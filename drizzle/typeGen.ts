import fs from 'fs';
import path from 'path';
import pluralize from 'pluralize';

const ignoreFiles = [
  'enum.ts',
  'schema.ts', 
  'index.ts'
]

async function generateTypes() {
  const root = "./"
  const schemaDir = path.join(root, 'drizzle', 'schema');
  const typesDir = path.join(root, 'drizzle', 'types');

  // Ensure the types directory exists
  if (!fs.existsSync(typesDir)) {
    fs.mkdirSync(typesDir, { recursive: true });
  }

  // Read all schema files
  const files = fs.readdirSync(schemaDir);

  // Filter out ignored files
  const schemaFiles = files.filter(file => !ignoreFiles.includes(file) && file.endsWith('.ts'));

  // Prepare content for the types file
  let typesContent = '';

  for (const file of schemaFiles) {
    const filePath = path.join(schemaDir, file);
    
    // Import the default export from each file as 't'
    const tableName = path.basename(file, '.ts'); // Get file name without extension
    const typeName = pluralize.singular(tableName.charAt(0).toUpperCase() + tableName.slice(1)); // Convert to singular and capitalize first letter

    typesContent += `
/** THIS IS A GENERATED FILE. DO NOT EDIT **/
import { InferSelectModel } from 'drizzle-orm'
import ${tableName} from '../schema/${tableName}'

export type ${typeName} = InferSelectModel<typeof ${tableName}>
export type ${typeName}Create = InferInsertModel<typeof ${tableName}>
`;
    
    // Write the types file
    const outputFilePath = path.join(typesDir, typeName+'.d.ts');
    fs.writeFileSync(outputFilePath, typesContent.trim());
    console.log(`\tGenerated types for ${typeName}...`)
  }
}

// Usage
// Call the function with the appropriate parameters
generateTypes()
  .then(() => console.log('Types generated successfully!'))
  .catch(err => console.error('Error generating types:', err));
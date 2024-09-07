import fs from 'fs';
import path from 'path';
import pluralize from 'pluralize';
import chalk from 'chalk';

const ignoreFiles = [
  'enum.ts',
  'schema.ts', 
  'index.ts'
]

const typeDef = (tableName:string, typeName:string) => `
/** THIS IS A GENERATED FILE. DO NOT EDIT **/
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import ${tableName} from '../schema/${tableName}';

export type ${typeName} = InferSelectModel<typeof ${tableName}>;
export type ${typeName}Create = InferInsertModel<typeof ${tableName}>;
`;

async function generateTypes() {
  const root = "./"
  const schemaDir = path.join(root, 'drizzle', 'schema');
  const typesDir = path.join(root, 'drizzle', 'types');

  if (!fs.existsSync(typesDir)) {
    fs.mkdirSync(typesDir, { recursive: true });
  }

  const files = fs.readdirSync(schemaDir);
  const schemaFiles = files.filter(file => !ignoreFiles.includes(file) && file.endsWith('.ts'));

  console.log(chalk.yellow('🚛 Generating types 🚛'))

  for (const file of schemaFiles) {
    const tableName      = path.basename(file, '.ts');
    const typeName       = pluralize.singular(tableName.charAt(0).toUpperCase() + tableName.slice(1));
    const def            = typeDef(tableName, typeName)
    const outputFilePath = path.join(typesDir, typeName+'.d.ts');

    fs.writeFileSync(outputFilePath, def);
    console.log(`\tGenerated ${typeName}...`)
  }
}

generateTypes()
  .then(() => console.log(chalk.green('💃💃 Types generated successfully! 💃💃')))
  .catch(err => console.error(chalk.red('😡😡😡 Error generating types:', err)));
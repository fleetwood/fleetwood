import { dbSchema } from './index';

export const COLORS = dbSchema.enum('colors', ['red', 'green', 'blue']);

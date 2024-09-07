
/** THIS IS A GENERATED FILE. DO NOT EDIT **/
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import users from '../schema/users';

export type User = InferSelectModel<typeof users>;
export type UserCreate = InferInsertModel<typeof users>;

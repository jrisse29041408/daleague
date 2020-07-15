import { buildSchema } from 'type-graphql';
import UserResolver from '../resolvers/UserResolver';

export const schema = buildSchema({
  resolvers: [UserResolver],
});

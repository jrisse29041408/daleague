/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import 'reflect-metadata';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import UserResolver from './resolvers/UserResolver';
// import { schema } from './util/buildSchema';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const startServer = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });
  // creating the graphqlserver and http server
  const apolloServer = new ApolloServer({ schema });
  const app = express();
  // connect apolloserver to express server
  apolloServer.applyMiddleware({ app });

  const port = process.env.port || 2904;
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/graphql`);
  });
};

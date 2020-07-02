import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
import { redis } from './redis';
import * as cors from 'cors';
import { RegisterResolver } from './app/modules/user/resolvers/Register';
import { LoginResolver } from './app/modules/user/resolvers/Login';
import { MeResolver } from './app/modules/user/resolvers/Me';
import { LogoutResolver } from './app/modules/user/resolvers/Logout';
import { ConfirmUserResolver } from './app/modules/user/resolvers/ConfirmUser';
import { CreateUserResolver } from './app/modules/user/resolvers/CreateUser';

const main = async () => {
  await createConnection({
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'jack',
    password: '',
    database: 'daleague',
    synchronize: true,
    logging: true,
    entities: ['src/entity/*.*'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  });

  const schema = await buildSchema({
    resolvers: [
      RegisterResolver,
      LoginResolver,
      MeResolver,
      LogoutResolver,
      ConfirmUserResolver,
      CreateUserResolver,
    ],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    },
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res }),
    introspection: true,
  });

  const RedisStore = connectRedis(session);
  const sessionOption: session.SessionOptions = {
    store: new RedisStore({
      client: redis as any,
    }),
    name: 'qid',
    secret: 'dalfjdsfjoiqef23412ewdqd2342',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
    },
  };

  const app = express();

  app.use(session(sessionOption));
  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  );

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('Server listening on http://localhost:4000/graphql');
  });
};

main();

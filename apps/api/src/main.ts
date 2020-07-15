import { startServer } from './app/util/startServer';
import { psqlConnection } from './app/util/createConnection';

const main = async (): Promise<void> => {
  await psqlConnection();
  await startServer();
};

main();

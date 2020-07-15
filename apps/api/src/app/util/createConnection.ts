import { createConnection } from 'typeorm';

export const psqlConnection = async (): Promise<void> => {
  await createConnection();
};

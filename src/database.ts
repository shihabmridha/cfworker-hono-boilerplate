import { HonoApp } from './types';

let connection: D1Database = null as unknown as D1Database;
export function getConnection() {
  if (connection === null) {
    throw new Error('No database connection established');
  }

  return connection;
}

export default (app: HonoApp) => {
  app.use('*', async (c, next) => {
    connection = c.env.DB;

    await next();
  });
};

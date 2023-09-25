import authController from './auth/auth.controller';
import { HonoApp } from './types';
import userController from './user/user.controller';

export default function (app: HonoApp) {
  // Grouping authenticated routes in a single place.
  // All the routes prefixed with 'auth' is authenticated
  // See more about hono route grouping: https://hono.dev/api/routing#grouping
  const protectedApp = new HonoApp();

  app.get('/', (c) => {
    return c.text('Hello from HonoApp!');
  });

  authController(app, protectedApp);
  userController(app, protectedApp);

  // This must go last (after registering all the routes)
  app.route('/auth', protectedApp);
}

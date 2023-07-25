import authController from './auth/auth.controller';
import { HonoAppApp } from './types';
import userController from './user/user.controller';

export default function (app: HonoAppApp) {
  // Grouping authenticated routes in a single place.
  // All the routes prefixed with 'auth' is authenticated
  // See more about hono route grouping: https://hono.dev/api/routing#grouping
  const protectedApp = new HonoAppApp();

  app.get('/', (c) => c.text('Hello from HonoApp!'));

  authController(app, protectedApp);
  userController(app, protectedApp);

  // This must go last (after registering all the routes)
  app.route('/auth', protectedApp);
}

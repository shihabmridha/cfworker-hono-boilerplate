import authController from './auth/auth.controller';
import { HonoApp } from './types';
import userController from './user/user.controller';

export default function (app: HonoApp) {
  app.get('/', async (c) => {
    return c.text('Hello from HonoApp!');
  });

  authController(app);
  userController(app);
}

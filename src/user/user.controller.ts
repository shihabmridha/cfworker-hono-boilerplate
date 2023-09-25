import { HonoApp } from '../types';
import userService from './user.service';

export default (app: HonoApp) => {
  app.get('/auth/me', async (c) => {
    const jwtPayload = c.get('jwtPayload');
    const dto = await userService.get(jwtPayload.id);

    return c.json(dto);
  });
};

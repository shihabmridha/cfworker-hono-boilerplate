import { HonoAppApp } from '../types';
import userService from './user.service';

export default (mainApp: HonoAppApp, protectedApp: HonoAppApp) => {
  protectedApp.get('/me', async (c) => {
    const jwtPayload = c.get('jwtPayload');
    const dto = await userService.get(jwtPayload.id);

    return c.json(dto);
  });
};

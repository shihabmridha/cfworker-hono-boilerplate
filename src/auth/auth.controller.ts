import { HonoApp } from '../types';
import { LoginDto } from './auth.dto';
import authService from './auth.service';

export default (mainApp: HonoApp, _: HonoApp) => {
  mainApp.post('/login', async (c) => {
    const payload = await c.req.json<LoginDto>();
    const token = await authService.login(payload, c.env.JWT_SECRET);

    return c.json({ token });
  });
};

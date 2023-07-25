import { createJwtToken } from '../utils';
import { LoginDto } from './auth.dto';

class AuhtService {
  async login(dto: LoginDto, jwtSecret: string) {
    // find user using dto.username
    // validate the password

    const token = createJwtToken({ id: 1, username: 'shihab' }, jwtSecret);
    return token;
  }
}

export default new AuhtService();

import { getConnection } from '../database';
import { UserDto } from './user.dto';
import { HTTPException } from 'hono/http-exception';
export class UserService {
  async get(id: string) {
    const res = await getConnection()
      .prepare('SELECT * FROM users WHERE id = ?')
      .bind(id)
      .first<UserDto>();

    if (res === null) {
      throw new HTTPException(404, { message: `User Id = ${id} not found` });
    }

    return {
      id: res.id,
      firstName: res.firstName,
      lastName: res.lastName,
    } as UserDto;
  }

  async create(dto: UserDto) {
    // validate data
    // insert into database
    return dto;
  }
}

export default new UserService();

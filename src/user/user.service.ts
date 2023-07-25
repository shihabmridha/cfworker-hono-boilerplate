import { UserDto } from './user.dto';

class UserService {
  // constructor()

  async get(_id: string) {
    // find user by id
    return { id: '1', lastName: 'lastName', firstName: 'firstName' } as UserDto;
  }

  async create(dto: UserDto) {
    // validate data
    // insert into database
    return dto;
  }
}

export default new UserService();

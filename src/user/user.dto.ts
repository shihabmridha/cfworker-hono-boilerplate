export interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth?: string;
  status?: string;
}

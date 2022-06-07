import { User } from '../../models/user.model';

export class UserService {
  findAll = (): Promise<User[]> => {
    return Promise.resolve([
      new User({
        id: '1',
        email: 'admin@test.com',
        passwordHash: '123456789abcdef',
        salt: '123456',
      }),
    ]);
  };

  create = (userInput: Partial<User>) => {
    return new User(userInput);
  };
}

import { ApiProperty } from '@nestjs/swagger';

export class User {
  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name?: string;

  passwordHash: string;
  salt: string;
}

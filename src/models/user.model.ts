import { ApiProperty } from '@nestjs/swagger';

export class User {
  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty()
  invoiceType?: string;

  @ApiProperty()
  vatID?: string;

  passwordHash: string;
  salt: string;
}

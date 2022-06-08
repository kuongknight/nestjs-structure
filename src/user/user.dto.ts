import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { VatID } from '../core/utils/validations';

enum IMVOICE_TYPE {
  T,
  F,
}

export class CreateUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(IMVOICE_TYPE)
  invoiceType: string;

  @ApiProperty({
    description:
      'VAT ID followed invoceType, invoiceType: T => 1234 (Length 4)',
  })
  @IsNotEmpty()
  @VatID('invoiceType')
  vatID: string;
}

export class FilterUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  actived?: boolean;
}

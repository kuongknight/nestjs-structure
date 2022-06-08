import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../models/user.model';
import { LoginInput } from './auth.dto';

@ApiTags('Auth')
@Controller()
export class AuthController {
  @ApiOperation({ summary: 'Local Authentication' })
  @ApiResponse({ type: User })
  @Post('/auth/local/login')
  localLogin(@Body() payload: LoginInput): User {
    return new User(payload);
  }
}

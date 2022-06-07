import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../models/user.model';
import { LoginInput } from './auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @ApiOperation({ summary: 'Local Authentication' })
  @ApiResponse({ type: User })
  @Post('local/login')
  localLogin(@Body() payload: LoginInput): User {
    console.log(payload);
    return new User({ name: 'admin' });
  }
}

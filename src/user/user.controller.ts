import { Body, Controller, Get, Injectable, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../common';
import { User } from '../models/user.model';
import { CreateUserDto, FilterUserDto } from './user.interface';

@Injectable()
@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiResponse({ type: [User] })
  @Get()
  findAll(@Query() query: FilterUserDto): Promise<User[]> {
    console.log(query);
    return this.userService.findAll();
  }

  @ApiResponse({ type: User })
  @Post()
  register(@Body() userInput: CreateUserDto): User {
    return this.userService.create(userInput);
  }
}

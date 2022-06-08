import { Body, Controller, Get, Injectable, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../common';
import { User } from '../models/user.model';
import { CreateUserDto, FilterUserDto } from './user.dto';

@Injectable()
@ApiTags('User')
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @ApiResponse({ type: [User] })
  @Get('/users')
  findAll(@Query() query: FilterUserDto): Promise<User[]> {
    console.log(query);
    return this.userService.findAll();
  }

  @ApiResponse({ type: User })
  @Post('/users')
  register(@Body() userInput: CreateUserDto): User {
    console.log(userInput);
    return this.userService.create(userInput);
  }
}

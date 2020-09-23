import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GetQueryPipe } from 'src/common/pipe/get-query.pipe';
import { QueryDto } from 'src/shared/dtos/query.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(@Query() query, @Query(GetQueryPipe) pagination: QueryDto) {
    return this.userService.getAll();
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.getOne(id);
  }

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@Inject('USER_REPOSITORY') private userRepo: Repository<User>) {}

  async getAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async getOne(id: number): Promise<User> {
    return this.userRepo.findOne({ id: id });
  }

  async create(dto: CreateUserDto): Promise<User> {
    return this.userRepo.save(dto);
  }
}

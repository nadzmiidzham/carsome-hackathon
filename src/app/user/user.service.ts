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

  async findOne(email: string, password: string): Promise<User> {
    return this.userRepo.findOne({ email, password });
  }

  async create(dto: CreateUserDto): Promise<User> {
    return this.userRepo.save({
      ic: dto.ic,
      email: dto.email,
      name: dto.name,
      password: dto.password,
      // eslint-disable-next-line @typescript-eslint/camelcase
      phone_no: dto.phoneNo,
      role: dto.role,
    });
  }
}

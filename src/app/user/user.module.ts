import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Connection } from 'typeorm';
import { User } from './entities/user.entity';
import { DatabaseModule } from 'src/database/database.module';

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProvider, UserService],
  exports: [UserService]
})
export class UserModule {}

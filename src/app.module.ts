import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(), UserModule],
})
export class AppModule {}

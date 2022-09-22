import { Module } from '@nestjs/common';
import { UsersModule } from '../../users/users.module';
import { GoogleController } from './google.controller';
import { GoogleStrategy } from './google.strategy';
import { JwtAuthModule } from '../jwt/jwt-auth.module';

@Module({
  imports: [UsersModule, JwtAuthModule],
  controllers: [GoogleController],
  providers: [GoogleStrategy],
})
export class GoogleModule {}

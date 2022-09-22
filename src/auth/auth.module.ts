import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleModule } from './google/google.module';
import { UsersModule } from '../users/users.module';

@Module({
  providers: [AuthService],
  imports: [UsersModule, GoogleModule],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleModule } from './google/google.module';

@Module({
  providers: [AuthService],
  imports: [GoogleModule],
})
export class AuthModule {}

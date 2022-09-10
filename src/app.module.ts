import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import app from './config/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        ({
          type: configService.get<string>('DB_DRIVER'),
          host: configService.get<string>('MONGO_HOSTNAME'),
          port: configService.get<string>('MONGO_PORT'),
          username: configService.get<string>('MONGO_USERNAME'),
          password: configService.get<string>('MONGO_PASSWORD'),
          autoLoadEntities: true,
          synchronize: true,
          useNewUrlParser: true,
          logging: true,
        } as TypeOrmModule),
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

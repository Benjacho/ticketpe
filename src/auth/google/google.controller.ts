import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleGuard } from './google.guard';
import { Request, Response } from 'express';
import { JwtAuthService } from '../jwt/jwt-auth.service';
import { SESSION_COOKIE_KEY } from '../../config/constants';
import { User } from '../../users/user.entity';

@Controller('auth/google')
export class GoogleController {
  constructor(private jwtAuthService: JwtAuthService) {}

  @Get()
  @UseGuards(GoogleGuard)
  async googleAuth(@Req() _req) {
    console.log(_req);
    //guard redirection
  }

  @Get('redirect')
  @UseGuards(GoogleGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    if (req.user instanceof User) {
      return this.jwtAuthService.login(req.user);
      // console.log(accessToken);
      // res.cookie(SESSION_COOKIE_KEY, accessToken, {
      //   httpOnly: true,
      //   sameSite: 'lax',
      // });
      // return res.redirect('/');
    }
  }
}

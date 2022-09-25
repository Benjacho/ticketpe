import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';
import { google, Auth } from 'googleapis';

@Injectable()
export class GoogleService {
  oauthClient: Auth.AuthClient;
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    this.oauthClient = new google.auth.OAuth2(
      this.configService.get<string>('OAUTH_GOOGLE_ID'),
      this.configService.get<string>('OAUTH_GOOGLE_SECRET'),
    );
  }

  async getUserData(token: string) {
    const userInfoClient = google.oauth2('v2').userinfo;

    this.oauthClient.setCredentials({
      access_token: token,
    });
    await userInfoClient.get(
      {
        auth: this.oauthClient,
      },
      {},
    );
    const userInfoResponse = await userInfoClient.get({
      auth: this.oauthClient,
    });

    return userInfoResponse.data;
  }
}

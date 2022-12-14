import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async getHello() {
    // const user = await this.usersService.create({
    //   name: 'benja',
    //   email: 'christianbfc97@gmail.com',
    // });
    // console.log(user);
    return this.appService.getHello();
  }
}

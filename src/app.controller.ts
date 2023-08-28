import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getSession(@Session() session: Record<string, any>) {
    session.playerOne = `"Thiago Miné"`;
    return session;
  }

  // getHello(): string {
  //   return this.appService.getHello();
  // }
}

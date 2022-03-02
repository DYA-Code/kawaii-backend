import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  _getBye(): string {
    return 'Bye World!';
  }
}

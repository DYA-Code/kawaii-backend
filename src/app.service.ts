import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDB(): string {
    return 'Hello DataBase!';
  }
}

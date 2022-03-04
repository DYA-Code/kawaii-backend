import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbController } from './db/db.controller';
import { DbService } from './db/db.service';

@Module({
  imports: [],
  controllers: [AppController, DbController],
  providers: [AppService, DbService],
})
export class AppModule {}

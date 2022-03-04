import { Controller, Get, Param } from '@nestjs/common';
import { DbService } from './db.service';

@Controller('db')
export class DbController {
    constructor(readonly dbService: DbService) {}

    // Database' Main Page
    @Get()
    async getUsrAll() {
        return await 'Database Page';
    }
    
    // Create a User Account
    @Get('/createUsr/:id/:pw')
    async createUsr(@Param('id') reqId: string, @Param('pw') reqPw: string) {
        return await this.dbService.createUsr(reqId, reqPw);
    }

    // Get All Users Informations
    @Get('/getUsr')
    async getUsr() {
        return await this.dbService.getDb();
    }

    // Auth a Users Informations
    @Get('/auth/:id/:pw')
    async searchUsr(@Param('id') reqId: any, @Param('pw') reqPw: any) {
        const db = (await this.dbService.getDb()).map(x => x.usrId)
        const db2 = (await this.dbService.getDb()).map(x => x.usrPw)
        
        if ( db.includes(reqId) && db2.includes(reqPw) ) { return true } else { return false }
    }
}

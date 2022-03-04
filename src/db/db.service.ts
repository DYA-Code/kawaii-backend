import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class DbService {
  getUsr(): string {
    return 'return all usrs';
  }

  getUsrByName( usrName: string ) {
    return `return one usr: ${usrName}`;
  }

  getDb() {
    const getUsr = prisma.usr.findMany();
    return getUsr
  }

  createUsr( _usrId: string, _usrPw: string ) {
      const newUsr = prisma.usr.create({
          data: {
              "usrId": _usrId,
              "usrPw": _usrPw
          }
      });

      return newUsr
  }

}

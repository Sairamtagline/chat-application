import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../databaseService';

@Injectable()
export class UserService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

  //Add new user service 
  async addUsers(name: string, userId: number | null) {
    try {
      return this.prismaService.user.upsert({
        where: {
          id: userId,
        },
        update: {
          name
        },
        create: {
          name
        },
      });
    } catch (error) {
      throw new HttpException("BadRequestException", HttpStatus.BAD_REQUEST)
    }
  };
}

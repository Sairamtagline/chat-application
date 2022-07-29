import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../databaseService';

@Injectable()
export class UserService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

  addUsers = async (name: string, userId: number | null) => {
    if (userId) {
      return this.prismaService.user.update({
        where: {
          id: userId,
        },
        data: {
          name
        },
      });
    } else {
      return this.prismaService.user.create({ data: { name } });
    }
  };
}

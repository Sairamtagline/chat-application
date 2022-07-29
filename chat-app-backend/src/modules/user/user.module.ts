import { Module } from '@nestjs/common';
import { PrismaService } from '../../databaseService'
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports:[],
    providers: [UserResolver, UserService, PrismaService]
})
export class UserModule {}

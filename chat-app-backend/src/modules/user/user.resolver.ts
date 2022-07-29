import { UserService } from './user.service';
import {
  Args,
  Context,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';

import { User } from '../../models/userModel';
import { Inject } from '@nestjs/common';
import { Chat } from 'src/models/chatModel';


@Resolver((of) => User)
export class UserResolver {
  //Instance of the prisma service
  constructor(@Inject(UserService) private readonly userService: UserService) { }
  @Query((returns) => [Chat], {
    description: 'It returns all registered users',
  })
  async users() {
    // return this.userService.addUsers("name","1");
  }

  @Mutation((returns) => User)
  async addUser(
    @Args('name') name: string,
    @Args('id') userId: number | null,
  ) {
    return this.userService.addUsers(name, userId);
  }
}

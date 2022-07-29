import {
  Args, Mutation,
  Query, Resolver
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { Inject } from '@nestjs/common';
import { Chat } from 'src/models/chatModel';
import { User } from '../../models/userModel';


@Resolver(() => User)
export class UserResolver {
  //Instance of the prisma service
  constructor(@Inject(UserService) private readonly userService: UserService) { }

  @Mutation(() => User, {
    description: 'It add or update user',
  })
  async addUser(
    @Args('name') name: string,
    @Args('id') userId: number | null,
  ) {
    return this.userService.addUsers(name, userId);
  }
}

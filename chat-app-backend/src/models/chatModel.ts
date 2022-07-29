import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './userModel';

@ObjectType({ description: "Chat model" })
export class Chat {
  @Field(() => ID)
  id: number

  @Field()
  message: String

  @Field()
  userId: User

  @Field()
  users: User

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}


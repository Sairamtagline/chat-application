import { User } from './userModel';
import { ObjectType, Field, ID, HideField } from '@nestjs/graphql'
import { type } from 'os'

@ObjectType({ description: "Chat model" })
export class Chat {
  @Field((type) => ID)
  id: number

  @Field(type => String)
  message: String

  @Field(type => User)
  userId: User

  @Field(type => User)
  users: User
}


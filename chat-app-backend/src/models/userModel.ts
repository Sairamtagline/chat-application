import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType({ description: "User model" })
export class User {

  @Field((type) => ID)
  id: number

  @Field()
  name: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}



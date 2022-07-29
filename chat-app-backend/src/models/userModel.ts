import { ObjectType, Field, ID, HideField } from '@nestjs/graphql'

@ObjectType({ description: "User model" })
export class User {
  @Field((type) => ID)
  id: number

  @Field()
  name: string
}



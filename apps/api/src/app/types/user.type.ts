import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export default class UserType {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  password: string;

  @Field(() => [ID], { nullable: true })
  teamIds?: string[];

  @Field(() => [ID], { nullable: true })
  leagueIds?: string[];
}

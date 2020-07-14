import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export default class Team {
  @Field(() => ID)
  id: string;

  @Field()
  teamName: string;

  @Field(() => ID)
  gmId: string;

  @Field(() => ID)
  leagueId: string;
}

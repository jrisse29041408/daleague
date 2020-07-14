import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export default class League {
  @Field(() => ID)
  id: string;

  @Field()
  leagueName: string;

  @Field(() => ID)
  creatorId: string;
}

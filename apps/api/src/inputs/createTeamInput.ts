import { InputType, Field } from 'type-graphql';
import { MaxLength } from 'class-validator';
import { createTeamInterface } from '../interfaces/Team.interface';

@InputType()
export class CreateTeamInput implements createTeamInterface {
  @Field()
  @MaxLength(30)
  teamName: string;

  @Field()
  @MaxLength(30)
  leaguePassword: string;
}

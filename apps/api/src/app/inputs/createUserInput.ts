import { InputType, Field } from 'type-graphql';
import { MaxLength } from 'class-validator';
import { createUserInput } from '../interfaces/User.interface';

@InputType()
export class CreateUserInput implements createUserInput {
  @Field()
  @MaxLength(30)
  username: string;

  @Field()
  @MaxLength(30)
  email: string;

  @Field()
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Arg, Resolver, Mutation, Query } from 'type-graphql';
import UserType from '../types/user.type';
import axios from 'axios';
import * as bcrypt from 'bcryptjs';
import { CreateUserInput } from '../inputs/createUserInput';
import User from '../entity/UserModel';

@Resolver(UserType)
export default class UserResolver {
  @Query(() => User)
  async findUser(@Arg('id') id: string): Promise<User> {
    return await User.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Arg('input') input: CreateUserInput): Promise<User> {
    const { username, email, password } = input;
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(username, email, hashedPassword);
    return await axios
      .post(`http://localhost:3000/users/`, {
        username,
        email,
        password: hashedPassword,
      })
      .then((res) => res.data);
  }

  // @Mutation(() => Boolean)
  // async login(
  //   @Arg('email') email: string,
  //   @Arg('password') password: string
  // ): Promise<boolean> {
  //   // check if email exists

  //   // get password input value

  //   // compare the input password to the password from input email

  //   // if password is invalid return false

  //   // if password is valid return true

  //   return false;
  // }
}

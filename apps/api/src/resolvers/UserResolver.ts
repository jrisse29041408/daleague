// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Arg, Resolver, Mutation, Query } from 'type-graphql';
import User from '../types/user.type';
import axios from 'axios';
import * as bcrypt from 'bcryptjs';
import { CreateUserInput } from '../inputs/createUserInput';

@Resolver(User)
export default class UserResolver {
  @Query(() => User)
  async findUser(@Arg('id') id: string): Promise<User> {
    return await axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => res.data);
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
}

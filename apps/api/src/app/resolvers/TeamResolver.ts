// import { Resolver, Query, Mutation, ID, Arg } from 'type-graphql';
// import Team from '../types/team.type';
// import { CreateTeamInput } from '../inputs/createTeamInput';
// import axios from 'axios';
// import * as bcrypt from 'bcryptjs';

// @Resolver(Team)
// export default class TeamResolver {
//   @Mutation(() => Team)
//   async createTeam(@Arg('input') input: CreateTeamInput): Promise<Team> {
//     const { teamName, leaguePassword } = input;
//     const hashedPassword = await bcrypt.hash(leaguePassword, 12);
//     return await axios
//       .post('http://localhost:3000/teams/', { teamName, hashedPassword })
//       .then((res) => res.data);
//   }
// }

import { gql } from "graphql-request";
import { User } from "@/types/github.d";

import { Github } from "@/adapters/github";

import { SearchUser } from "./search-user";
import { SearchUserQueryDoc } from "./data/search-user.graphql";
import {
  SearchUserQuery,
  SearchUserQueryVariables,
} from "./data/search-user.graphql.generated";

export class SearchUserService implements SearchUser {
  constructor(private client: Github) {}

  async execute(searchString: string): Promise<SearchUser.Results> {
    const results = await this.client.gql<
      SearchUserQuery,
      SearchUserQueryVariables
    >(SearchUserQueryDoc, { searchString });

    const users = results.search.nodes;
    return {
      users:
        users?.flatMap((user) => {
          if (user?.__typename === "User") {
            return {
              id: user.id,
              name: user.name,
              avatarUrl: user.avatarUrl,
              email: user.email,
              bio: user.bio,
              followers: user.followers.totalCount ?? 0,
              following: user.following.totalCount ?? 0,
              login: user.login,
            };
          } else return [];
        }) ?? [],
    };
  }
}

export default function makeSearchUserService() {
  return new SearchUserService(new Github());
}

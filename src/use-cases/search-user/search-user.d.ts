import { User } from "@/types/github.d";

export interface SearchUser {
  execute(searchString: string): Promise<SearchUser.Results>;
}

export type AppUser = Pick<
  User,
  "id" | "name" | "avatarUrl" | "email" | "bio" | "login"
> & {
  followers: number;
  following: number;
};

export namespace SearchUser {
  export interface Results {
    users: AppUser[];
  }
}

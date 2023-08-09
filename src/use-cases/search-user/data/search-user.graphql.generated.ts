import * as Types from '@/types/github.d';

export type SearchUserQueryVariables = Types.Exact<{
  searchString: Types.Scalars['String']['input'];
}>;


export type SearchUserQuery = { __typename?: 'Query', search: { __typename?: 'SearchResultItemConnection', userCount: number, nodes?: Array<{ __typename?: 'App' } | { __typename?: 'Discussion' } | { __typename?: 'Issue' } | { __typename?: 'MarketplaceListing' } | { __typename?: 'Organization' } | { __typename?: 'PullRequest' } | { __typename?: 'Repository' } | { __typename: 'User', id: string, name?: string | null, avatarUrl: any, email: string, bio?: string | null, login: string, followers: { __typename?: 'FollowerConnection', totalCount: number }, following: { __typename?: 'FollowingConnection', totalCount: number } } | null> | null } };

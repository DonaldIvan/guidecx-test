import { gql } from "graphql-request";

export const SearchUserQueryDoc = gql`
  query SearchUser($searchString: String!) {
    search(query: $searchString, type: USER, first: 40) {
      userCount
      nodes {
        ... on User {
          __typename
          id
          name
          avatarUrl
          email
          bio
          login
          followers {
            totalCount
          }
          following {
            totalCount
          }
        }
      }
    }
  }
`;

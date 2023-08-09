import { SearchUserService } from "./search-user.service";
import { Github } from "@/adapters/github";

const mockRequest = jest.fn();

jest.mock("@/adapters/github", () => {
  return {
    Github: jest.fn().mockImplementation(() => {
      return { gql: mockRequest };
    }),
  };
});

const client = new Github();
const service = new SearchUserService(client);

describe("SearchUser", () => {
  it("returns search users profile", async () => {
    mockRequest.mockResolvedValue({
      search: {
        nodes: [
          {
            id: "1234",
            name: "Joe",
            login: "joe.bob",
            avatarUrl: "https://avatars.githubusercontent.com/u/84866422?v=4",
            email: "joe@email.com",
            bio: "My name is Joe simple developer",
            __typename: "User",
            following: { totalCount: 0 },
            followers: { totalCount: 0 },
          },
        ],
      },
    });

    const results = await service.execute("test");

    expect(results).toEqual({
      users: [
        expect.objectContaining({
          id: "1234",
          name: "Joe",
          login: "joe.bob",
          avatarUrl: "https://avatars.githubusercontent.com/u/84866422?v=4",
          email: "joe@email.com",
          bio: "My name is Joe simple developer",
          following: 0,
          followers: 0,
        }),
      ],
    });
  });
});

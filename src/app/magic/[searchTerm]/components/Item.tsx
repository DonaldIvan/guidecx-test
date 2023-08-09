import type { AppUser } from "@/use-cases/search-user/search-user";
import Image from "next/image";
import Link from "next/link";
interface Props {
  user: AppUser;
}
const Item = ({ user }: Props) => {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://github.com/${user.login}`}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {user.name}
        </Link>
      </h2>
      <p>{user.bio}</p>
      <small>{user.email}</small>
      <div className="flex flex-row gap-2">
        <div className="min-w-[50px]">
          <small>
            Follower: <span className="font-bold">{user.followers}</span>
          </small>
        </div>
        <div className="min-w-[50px]">
          <small>
            Following: <span className="font-bold">{user.following}</span>
          </small>
        </div>
      </div>
    </div>
  );

  const content = user?.avatarUrl ? (
    <article className="m-4 max-w-lg">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center min-w-[100px]">
          <Link href={`https://github.com/${user.login}`} target="_blank">
            <Image
              src={user.avatarUrl}
              alt={user.name ?? ""}
              width={100}
              height={100}
              loading="lazy"
              className="rounded-full"
            />
          </Link>
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">{itemTextCol}</article>
  );
  return content;
};

export default Item;

import Image from "next/image";
import Link from "next/link";

import makeService from "@/use-cases/load-profile/load-profile.service";
import styles from "@/app/profile/page.module.scss";

export default async function ProfilePage() {
  const profile = await makeService().execute();
  const { user, repositories } = profile;

  return (
    <>
      <article className="flex flex-col items-center text-white">
        <div className="ring-4 ring-gray-500 ring-offset-2 rounded-3xl max-w-xs">
          <Image
            className="rounded-3xl w-full"
            src={user?.avatarUrl}
            alt="user profile"
            width="100"
            height="100"
          />
        </div>
        <h2 className={styles.ProfilePage__Title}>{user?.name}</h2>
        <h3 className={styles.ProfilePage__SubTitle}>{user?.login}</h3>
        <div className={styles.ProfilePage__Followers}>
          <div className="pr-4">Followers: {user?.followers}</div>
          <div>Following: {user?.following}</div>
        </div>
      </article>

      <article className={`${styles.ProfileRepos} text-white `}>
        <h4>Repositories</h4>
        <div
          className={`p-4 rounded h-full mb-16 max-h-96 overflow-auto bg-slate-600`}
        >
          {repositories.map((repo) => (
            <div key={repo.id} className={styles.ProfileRepos__Item}>
              <Link href={repo.url}>{repo.name}</Link>
              <p>{repo.description}</p>

              <footer>
                <span>Stars: {repo.stargazerCount}</span>
              </footer>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

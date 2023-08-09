import { notFound } from "next/navigation";
import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";
import makeService from "@/use-cases/search-user/search-user.service";

interface Props {
  params: {
    searchTerm: string;
  };
}

export const generateMetadata = async ({ params: { searchTerm } }: Props) => {
  const res = await makeService().execute(searchTerm);

  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!res?.users) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
};

const page = async ({ params: { searchTerm } }: Props) => {
  const res = await makeService().execute(searchTerm);

  if (!res?.users) return notFound();
  const displayTerm = searchTerm.replaceAll("%20", " ");
  const content = (
    <main className="mx-auto max-w-3xl rounded bg-slate-300 py-1 overflow-auto h-full">
      {res?.users?.length ? (
        res?.users.map((user) => <Item key={user.id} user={user} />)
      ) : (
        <h2 className="p-2 text-xl">{`${displayTerm} not found`}</h2>
      )}
    </main>
  );
  return content;
};

export default page;

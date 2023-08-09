"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/magic/${search}`);
  };

  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-80 rounded-xl bg-white p-2 text-xl"
        placeholder="Search user"
      />
      <button className="ml-2 rounded-full px-4 bg-slate-300 p-2 text-xl font-bold">
        S
      </button>
    </form>
  );
};

export default Search;

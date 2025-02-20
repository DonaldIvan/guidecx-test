import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex flex-col justify-between bg-slate-600 p-4 drop-shadow-xl md:flex-row">
      <h1 className="mb-2 grid place-content-center text-3xl font-bold text-white md:mb-0">
        <Link href="/magic">GitHobby</Link>
      </h1>
      <Search />
    </nav>
  );
};

export default Navbar;

import Navbar from "@/components/Navbar";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <main className="bg-slate-800 h-screen w-screen m-[-32px]">
      <Navbar />
      <div className="p-8 h-5/6">{children}</div>
    </main>
  );
};

export default Layout;

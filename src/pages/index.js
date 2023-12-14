import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <title>Twitter</title>
      <main className="flex min-h-screen mx-auto max-w-7xl">
        {/* SideBar */}
        <Sidebar />
        {/* Feed Section */}
        {/* Widgets */}
        {/* Modal */}
      </main>
    </div>
  );
}

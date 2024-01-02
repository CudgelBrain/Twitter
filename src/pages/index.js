import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ newsResult,randomId }) {
  return (
    <div>
      <title>Twitter</title>
      <main className="flex min-h-screen mx-auto">
        {" "}
        {/*had to remove max-w-7xl but i didnt*/}
        {/* SideBar */}
        <Sidebar />
        {/* Feed Section */}
        <Feed />
        {/* Widgets */}
        <Widgets theResults={newsResult.articles} whoToFollow = {randomId.results}/>{" "}
        {/* <Widgets newsResult={newsResult} /> */}
        {/* Modal */}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const newsResult = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json"
  ).then((res) => res.json());
  //who to follow
  const randomId = await fetch("https://randomuser.me/api/?results=50").then((res) => res.json()) /*https://randomuser.me/api/?results=50&inc=name,picture <= this can be the query too. according to needs*/
  return {
    props: {
      newsResult,
      randomId
    },
  };
}



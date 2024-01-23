import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import SidebarMenuItem from "../components/SidebarMenuItem";
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import HashtagIcon from "@heroicons/react/24/outline/HashtagIcon";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import InboxIcon from "@heroicons/react/24/outline/InboxIcon";
import BookmarkIcon from "@heroicons/react/24/outline/BookmarkIcon";
import ClipboardIcon from "@heroicons/react/24/outline/ClipboardIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import EllipsisHorizontalCircleIcon from "@heroicons/react/24/outline/EllipsisHorizontalCircleIcon";
import EllipsisHorizontalIcon from "@heroicons/react/24/outline/EllipsisHorizontalIcon";

export default function Sidebar() {
  const {data:session} = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 fixed xl:items-start h-full xl:ml-24">  {/*Had to add xl:ml-24 but i didnt*/}
      {/* twitter logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100">
        <Image
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          width={50}
          height={50}
        ></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        {session && (
        <>
          <SidebarMenuItem text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem text="Messages" Icon={InboxIcon} />
          <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
          <SidebarMenuItem text="Profile" Icon={UserIcon} />
          <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
        </>
        )}
        
      </div>
      {/* Button */}
      {session ? (
        <>    
          <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
      {/* Mini-Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src={session.user.image}
          alt="User-Image"
          className="h-10 w-10 rounded-full xl:mr-2"
          onClick={signOut}
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-gray-500">@{session.user.username}</p>
        </div>
        <EllipsisHorizontalIcon className="ml-8 hidden xl:inline h-7"/> {/*Added h-7*/}
      </div>
        </>
      ) : (
        <button onClick={signIn} className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Sign in</button>
      )}
      
    </div>
  );
}

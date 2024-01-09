import { PhotoIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useSession, signOut } from "next-auth/react";

export default function Input() {
  const {data: session} = useSession();
  console.log(session);
  return (
   <>
    {session && ( <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src={session.user.image}
        alt="user-image"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
        onClick={signOut}
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" rows="2" placeholder="What's happening?"></textarea>
        </div>
        <div className=" flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotoIcon className="xl:h-11 xl:w-11 p-2 text-sky-500 hover:bg-sky-100 hoverEffect " />
            <FaceSmileIcon className="xl:h-11 xl:w-11 p-2 text-sky-500 hover:bg-sky-100 hoverEffect " />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
        </div>
      </div>
    </div>)}
   </>
  );
}

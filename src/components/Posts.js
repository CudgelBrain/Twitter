import { ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Posts({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200
    =';9l87fd ">
      {/* User image*/}
      <div className="p-2">
        <img
          src={post.userImg}
          alt="User-Image"
          className="h-11 w-11 rounded-full mr-4"
        />
      </div>
          {/* right side */}
      <div className="p-2 w-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Post User Info */}
          <div className="flex space-x-1 whitespace-nowrap items-center">
            <h2 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h2>
            <span className="text-sm sm:text-[15px]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
          </div>
          {/*Dot Icon*/}
            <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>
        </div>
            {/* Post Text */}
          <p className="my-1 text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
              {/* Post Image  */}
          <img src={post.postImg} alt="Fuji-san" className="rounded-2xl mr-2"/>
             {/* Icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 cursor-pointer hover:bg-sky-100 "/>
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600  cursor-pointer hover:bg-red-100 "/>
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600  cursor-pointer hover:bg-red-100 "/>
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 cursor-pointer hover:bg-sky-100 "/>
          <ChartBarIcon className="h-9 w-9hoverEffect p-2 hover:text-sky-500 cursor-pointer hover:bg-sky-100 "/>
          {/* <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 p-2 hover:text-sky-500 cursor-pointer hover:bg-sky-100 rounded-full"/>
          <TrashIcon className="h-9 w-9 p-2 hover:text-red-600  cursor-pointer hover:bg-red-100 rounded-full"/>
          <HeartIcon className="h-9 w-9 p-2 hover:text-red-600  cursor-pointer hover:bg-red-100 rounded-full"/>
          <ShareIcon className="h-9 w-9 p-2 hover:text-sky-500 cursor-pointer hover:bg-sky-100 rounded-full"/>
          <ChartBarIcon className="h-9 w-9 p-2 hover:text-sky-500 cursor-pointer hover:bg-sky-100 rounded-full"/> */}
        </div>

      </div>
    </div>
  );
}
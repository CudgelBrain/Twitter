import { PhotoIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="data:image/jpeg;base64,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"
        alt="user-image"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
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
    </div>
  );
}

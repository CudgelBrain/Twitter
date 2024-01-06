
export default function ToFollowIds({userid}) {
  return (
    <div className="">
        <div className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-200">
            <img src={userid.picture.thumbnail} alt="" width="40" className="rounded-full" />
            <div className="truncate ml-4 leading-5">
                <h4 className="font-bold hover:underline text-[16px] truncate">{userid.login.username}</h4>
                 {/* his version =>  <h5 className="text-xs">{userid.name.first+" "+userid.name.last}</h5> */}
                <h5 className="text-sm text-gray-500 truncate">{userid.name.first} {userid.name.last}</h5>
            </div>
            <button className="bg-black text-white px-3.5 py-1.5 font-bold rounded-full ml-auto text-sm">Follow</button>
        </div>
    </div>
  )
}

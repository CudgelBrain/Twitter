import { getProviders,signIn} from "next-auth/react";

export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnqrBK4S7UhdKrLdIx7Ad2m4x9c82mL3_Mw&usqp=CAU"
        alt="twitter inside a phone"
        className="hidden object-cover md:w-44 md:h-80 rotate-6 md:inline-flex"
      />
      <div className="">
        {Object.values(providers).map((providers) => (
          <div className="flex flex-col items-center">
            <img
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
              alt="Twitter-Logo"
              className="w-36 object-cover"
            />
            <p className="text-center text-sm italic my-10">This App is created for learning purposes.</p>
            <button onClick={() => signIn(providers.id, {callbackUrl:"/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {providers.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

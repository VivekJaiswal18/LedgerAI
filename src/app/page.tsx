
import Link from "next/link";


export default function Home() {

  return (
    <div>
      <div className="mt-60 min-h-screen font-luckiest-guy-regular  flex-col justify-center items-center text-white">
        <div className="flex justify-center text-7xl items-center">Hello, This is <p className="text-yellow-200 ml-3">LedgerAI</p></div>
        <div className="flex justify-center text-4xl mt-8 items-center">I am an <p className="mx-3 text-yellow-200">LLM</p>  that ponders on Data from BlockChain...are you looking for something?</div>
         <Link href={"/chat"}>
      <div className="flex justify-center mx-auto items-center border-gray-400 border-4 w-1/4 rounded-xl text-2xl mt-20 cursor-pointer p-4">
        {/* Let's Go */}
        Let&apos;s Go
      </div>
    </Link>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

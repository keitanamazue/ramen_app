import Image from "next/image";
import { Nav } from "../components/Nav";

export default function account() {
  return (
    <div className="container mx-auto h-screen md:flex md:flex-row">
      <Nav />

      <div className="w-full mx-auto flex flex-col items-center justify-start md:w-9/12 md:justify-center ">
        <div className="flex justify-center items-center w-full border-b-2 border-gray-200 py-3 md:border-0">
          <Image
            src="/profile.JPG"
            alt="ramen"
            width={70}
            height={70}
            className="rounded-full"
          />
          <p className="ml-20 uppercase">keita namazue</p>
        </div>
        <div className="flex flex-col items-center mt-42">
          <p className="text-xl font-bold mt-20">あなたの現在のポイントは</p>
          <h2 className="text-8xl font-bold mt-20">100</h2>
          <p className="text-xl font-bold mt-20">ポイントです</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black h-screen w-full">
      <div className="text-4xl tracking-widest sm:text-6xl">
        <span className="text-blue-700">R</span>
        <span className="text-red-500">A</span>
        <span className="text-yellow-200">M</span>
        <span className="text-blue-500">E</span>
        <span className="text-green-600">N</span>
      </div>

      <div className="flex flex-col items-center mt-12">
        <Link href="/ramenList">
          <a className="text-xl bg-white py-2 px-7 rounded-full sm:py-2 sm:px-10">
            はじめる
          </a>
        </Link>

        <Link href="#">
          <a className="text-sm pt-5 text-blue-600">使い方をみる</a>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const nav = () => {
  return (
    <div className="w-full mx-auto flex justify-around items-center fixed bottom-0 bg-white border-t-2 z-50 md:static md:flex-col md:justify-start md:w-3/12 md:border-0">
      <Link href="/ramenList">
        <a className="hidden text-green-500 text-3xl mb-60 mt-6 md:block">
          RAMEN
        </a>
      </Link>

      <Link href="/ramenList">
        <a className="flex flex-col items-center p-3 md:flex-row md:justify-start md:mt-4">
          <HomeIcon className="text-4xl" />
          <p className="text-xs md:text-lg ">ホーム</p>
        </a>
      </Link>

      <Link href="/subscription">
        <a className="flex flex-col items-center p-3 md:flex-row md:justify-start md:mt-4">
          <AddCircleOutlineIcon className="text-4xl" />
          <p className="text-xs md:text-lg">サブスク</p>
        </a>
      </Link>

      <Link href="/account">
        <a className="flex flex-col items-center p-3 md:flex-row md:justify-start md:mt-4">
          <AccountCircleIcon className="text-4xl" />
          <p className="text-xs md:text-lg">アカウント</p>
        </a>
      </Link>
    </div>
  );
};

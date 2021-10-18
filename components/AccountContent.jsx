import { Header } from "./Header";

export const AccountContent = (props) => {
  return (
    <div className="w-full h-screen mx-auto flex flex-col items-center justify-start md:w-9/12 md:justify-center">
      <Header userImg="/profile.JPG" userName="keita namazue" />
      <p className="text-xl font-bold mt-20">あなたの現在のポイントは</p>
      <h2 className="text-8xl font-bold mt-20">100</h2>
      <p className="text-xl font-bold mt-20">ポイントです</p>
    </div>
  );
};

export default AccountContent;

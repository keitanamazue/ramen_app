import Image from "next/image";

export const Header = (props) => {
  const { userImg, userName } = props;
  return (
    <div className="flex justify-center items-center w-full border-b-2 border-gray-200 py-3 md:border-0">
      <Image
        src={userImg}
        alt="userImg"
        width={70}
        height={70}
        className="rounded-full"
      />
      <p className="ml-20 uppercase">{userName}</p>
    </div>
  );
};

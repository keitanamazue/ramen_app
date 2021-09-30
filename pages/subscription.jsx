import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { Nav } from "../components/Nav";

export default function subscription() {
  const handleToast = () => {
    toast.success("ご購入ありがとうございます。", {
      duration: 4000,
      position: "top-center",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  };
  return (
    <div className="container mx-auto md:flex md:flex-row">
      <Nav />
      <div className="w-full h-screen mx-auto flex flex-col items-center justify-start pt-20 md:w-9/12 md:justify-center md:pt-0">
        <Image
          src="/profile.JPG"
          alt="ramen"
          width={70}
          height={70}
          className="rounded-full"
        />

        <h2 className="pt-10 ">Select subsucription</h2>
        <p className="pt-5">お好きなプランをお選びください</p>

        <div className="flex justify-evenly items-center gap-7 mt-30">
          <div
            className="py-14 px-8 rounded-3xl shadow-md  mt-16 center cursor-pointer"
            onClick={handleToast}
          >
            <h3 className="text-lg font-bold">3 months</h3>
            <h4 className="text-base font-light center">3万円/月</h4>
            <Toaster />
          </div>

          <div
            className="bg-red-200   py-14 px-6 rounded-3xl shadow-md mt-16 center cursor-pointer"
            onClick={handleToast}
          >
            <h3 className="text-xl font-bold">12 months</h3>
            <h4 className="text-base font-light center">1万円/月</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

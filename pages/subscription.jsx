import Link from "next/link";

import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";

import HomeIcon from "@material-ui/icons/Home";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { SubscriotionContent } from "../components/SubscriotionContent";

const subscription = () => {
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
    <Layout
      sidebar={
        <Sidebar
          title={"RAMEN"}
          nav={
            <>
              {[
                {
                  title: "ホーム",
                  url: "/ramenList",
                  icon: <HomeIcon className="text-4xl" />,
                },
                {
                  title: "サブスク",
                  url: "/subscription",
                  icon: <AddCircleOutlineIcon className="text-4xl" />,
                },
                {
                  title: "アカウント",
                  url: "account",
                  icon: <AccountCircleIcon className="text-4xl" />,
                },
              ].map((item) => {
                return (
                  <Link key={item.title} href={item.url}>
                    <a className="flex flex-col items-center p-3 md:flex-row md:justify-start md:mt-4">
                      {item.icon}
                      <p className="text-xs md:text-lg">{item.title}</p>
                    </a>
                  </Link>
                );
              })}
            </>
          }
        />
      }
      main={<SubscriotionContent />}
    />
  );
};

export default subscription;

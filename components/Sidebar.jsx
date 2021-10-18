import { Link } from "@material-ui/core";

export const Sidebar = (props) => {
  const { title, nav } = props;
  return (
    <div className="w-full mx-auto flex justify-around items-center fixed bottom-0 bg-white border-t-2 z-50 md:static md:flex-col md:justify-start  md:border-0">
      <Link href="/ramenList">
        <p className="hidden text-green-500 text-3xl mb-60 mt-6 md:block">
          {title}
        </p>
      </Link>

      {nav}
    </div>
  );
};

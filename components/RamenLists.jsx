import RamenDiningIcon from "@mui/icons-material/RamenDining";

import { Links } from "../components/Links";

export const RamenLists = () => {
  return (
    <div className="md:w-9/12 md:flex md:flex-col md:items-center">
      <input
        className="hidden w-72 py-4 px-4 bg-gray-100 mt-6 outline-none md:block"
        type="text"
        placeholder="食べたいラーメンは？"
      />
      <div className="flex justify-center items-center p-4">
        <h2>近くのラーメン</h2>
        <RamenDiningIcon />
      </div>

      <Links />
    </div>
  );
};

export default RamenLists;

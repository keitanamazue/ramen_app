import { useRouter } from "next/router";
import Image from "next/image";
import { ITEM } from "../../../db";

export const DetailId = (props) => {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      {/* <Image src={items.src} width={300} height={100} alt="ramenImg" />
      <h1>{item.title}</h1>
      <p>{item.desc}</p> */}
    </div>
  );
};

export default DetailId;

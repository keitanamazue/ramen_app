import Image from "next/image";
import { ITEM } from "../db";

export const Links = (props) => {
  return (
    <div className="w-10/12 mx-auto md:w-full">
      <div className="pb-20 md:flex md:flex-wrap">
        {ITEM.map((items) => {
          return (
            <div key={items.id} className="pt-5　w-full mx-auto md:w-5/12 mt-4">
              <Image
                src={items.src}
                alt="ramen-image"
                width={400}
                height={200}
              />
              <h3 className="font-bold text-lg pt-5">{items.title}</h3>
              <p className="pt-2 text-sm text-gray-400 break-normal	">
                {items.excerpt}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

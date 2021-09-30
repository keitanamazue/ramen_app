import Image from "next/image";

const ITEM = [
  {
    id: "1",
    src: "/ramen.jpeg",
    title: "そらの星",
    excerpt:
      "大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。",
    desc: "大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。",
  },
  {
    id: "2",
    src: "/download.jpg",
    title: "醤油の涙",
    excerpt:
      "少ない醤油でいかに素材の良さを引き出せるかにこだわった醤油ラーメン",
    desc: "大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。",
  },
  {
    id: "3",
    src: "/download-1.jpg",
    title: "花道ラーメン",
    excerpt: "学生に人気の低価格ラーメン。このラーメン一杯で４００円。",
    desc: "大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。",
  },
  {
    id: "4",
    src: "/download-2.jpg",
    title: "極濃ラーメン",
    excerpt:
      "醤油ラーメンの中でも、濃い物好きに向けたラーメン。少し濃い人にはお勧めできない。",
    desc: "大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。",
  },
  {
    id: "5",
    src: "/download-3.jpg",
    title: "とんこつの鬼",
    excerpt:
      "とんこつラーメン一筋の店主によって一つ一つ作られる。座席も少なく完全予約制。",
    desc: "大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。",
  },
  {
    id: "6",
    src: "/download-4.jpg",
    title: "北海道コーンバターラーメン",
    excerpt: "北海道の有名ラーメンがついに上陸。",
    desc: "大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。",
  },
  {
    id: "7",
    src: "/download-6.jpg",
    title: "味増し",
    excerpt: "替え玉が無料で有名。味も値段の割に良い。",
    desc: "大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。大阪で珍しい横浜家系ラーメンを本格的に提供しているラーメン屋になります。",
  },
];

export const Links = (props) => {
  return (
    <div className="w-10/12 mx-auto md:w-full">
      <div className="pb-20 md:flex md:flex-wrap">
        {ITEM.map((items) => {
          return (
            <div key={items.id} className="pt-5　w-full mx-auto md:w-5/12">
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

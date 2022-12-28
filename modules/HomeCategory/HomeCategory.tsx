import Image from "components/Image";
import { WrapLink } from "components/link";
import ComicTitle from "modules/ComicTitle";
import Heading from "modules/Heading";

const features = [
  {
    id: 1,
    poster: "https://cn-e-pic.mangatoon.mobi/cartoon-posters/1005142f6a3.webp",
    title: "Thiên Tài Khốc Bảo: Tổng Tài Cuồng Sủng Thê"
  },
  {
    id: 2,
    poster: "https://cn-e-pic.mangatoon.mobi/cartoon-posters/1005142f6a3.webp",
    title: "Kính Chào Nữ Vương Đại Nhân"
  },
  {
    id: 3,
    poster: "https://cn-e-pic.mangatoon.mobi/cartoon-posters/4509188159.webp",
    title: "Bá Đạo Tổng Tài Nhẹ Nhàng Yêu"
  },
  {
    id: 4,
    poster: "https://cn-e-pic.mangatoon.mobi/cartoon-posters/1005142f6a3.webp",
    title: "Thiên Tài Khốc Bảo: Tổng Tài Cuồng Sủng Thê"
  },
  {
    id: 5,
    poster: "https://cn-e-pic.mangatoon.mobi/cartoon-posters/1005142f6a3.webp",
    title: "Kính Chào Nữ Vương Đại Nhân"
  },
  {
    id: 6,
    poster: "https://cn-e-pic.mangatoon.mobi/cartoon-posters/4509188159.webp",
    title: "Bá Đạo Tổng Tài Nhẹ Nhàng Yêu"
  }
];

const HomeCategory = () => {
  return (
    <section className="pt-8">
      <div className="layout-container">
        <div className="flex items-center justify-between">
          <Heading>Thể loại</Heading>
          <WrapLink className="text-lg font-semibold text-redff4">Xem tất cả &gt;</WrapLink>
        </div>
        <ul className="flex items-center gap-6 py-3">
          <li>
            <WrapLink className="inline-block text-lg font-bold border-b-2 border-redff4 text-redff4">
              Nữ cường
            </WrapLink>
          </li>
          <li>
            <WrapLink className="font-bold inline-block text-lg text-[#948084]">Tổng tài</WrapLink>
          </li>
          <li>
            <WrapLink className="font-bold inline-block text-lg text-[#948084]">
              Trường học
            </WrapLink>
          </li>
        </ul>
        <div className="pt-4 comic-list">
          {features.map((comic) => (
            <div key={comic.id}>
              <WrapLink className="bg-[#999999]">
                <Image src={comic.poster} alt={comic.title} className="rounded aspect-[175/233]" />
              </WrapLink>
              <ComicTitle>{comic.title}</ComicTitle>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;

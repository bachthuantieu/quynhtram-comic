import { Image } from "components/image";
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

const HomeFeatured = () => {
  return (
    <section className="pt-6">
      <div className="layout-container">
        <Heading>Truyện nổi bật</Heading>
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

export default HomeFeatured;

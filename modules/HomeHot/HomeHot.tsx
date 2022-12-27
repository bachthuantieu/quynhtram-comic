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

const HomeHot = () => {
  return (
    <section className="pt-6">
      <div className="layout-container">
        <Heading>Hot nhất - Truyện tranh</Heading>
        <div className="grid gap-3 my-4 md:grid-cols-2">
          <div className="bg-[#f6f4fd] p-4 rounded-md flex gap-4">
            <WrapLink className="bg-[#999999] rounded overflow-hidden shrink-0">
              <Image
                src="https://cn-e-pic.mangatoon.mobi/cartoon-posters/7859c5a.webp"
                alt=""
                className="max-w-[120px] md:max-w-[185px] aspect-[175/233]"
              />
            </WrapLink>
            <div>
              <WrapLink className="text-lg font-bold">Tổng Tài Tại Thượng</WrapLink>
              <span className="line-clamp-1 text-[#888888] text-sm">
                Tình yêu / Tổng tài / Ngược / Công sở / Mối tình đầu / Đô thị / Bá đạo / Có em bé /
                Gái ngoan
              </span>
              <p className="text-[#888888] line-clamp-4 md:text-base text-sm pt-3">
                Cung Âu, một tên thiếu gia giàu có mắc bệnh hoang tưởng, và Thời Tiểu Niệm, một tác
                giả truyện tranh nghèo rớt mùng tơi và cô đơn đã bị buộc chặt lấy nhau trong một
                tình huống hết sức trớ trêu: Cung Âu nghĩ Thời Tiểu Niệm đã giấu nhẹm đứa con của
                hai người (không hề). Cùng theo dõi xem nam chính sẽ ngược nữ chính theo những cách
                nào, và làm thế nào mà họ yêu nhau...
              </p>
            </div>
          </div>
          <div className="bg-[#f6f4fd] p-4 rounded-md flex gap-4">
            <WrapLink className="bg-[#999999]">
              <Image
                src="https://cn-e-pic.mangatoon.mobi/cartoon-posters/7859c5a.webp"
                alt=""
                className="rounded max-w-[120px] md:max-w-[185px] aspect-[175/233]"
              />
            </WrapLink>
            <div>
              <WrapLink className="text-lg font-bold">Tổng Tài Tại Thượng</WrapLink>
              <span className="text-sm line-clamp-1 text-gray88">
                Tình yêu / Tổng tài / Ngược / Công sở / Mối tình đầu / Đô thị / Bá đạo / Có em bé /
                Gái ngoan
              </span>
              <p className="pt-2 text-sm text-gray88 line-clamp-4 md:text-base">
                Cung Âu, một tên thiếu gia giàu có mắc bệnh hoang tưởng, và Thời Tiểu Niệm, một tác
                giả truyện tranh nghèo rớt mùng tơi và cô đơn đã bị buộc chặt lấy nhau trong một
                tình huống hết sức trớ trêu: Cung Âu nghĩ Thời Tiểu Niệm đã giấu nhẹm đứa con của
                hai người (không hề). Cùng theo dõi xem nam chính sẽ ngược nữ chính theo những cách
                nào, và làm thế nào mà họ yêu nhau...
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4 comic-list">
          {features.map((comic) => (
            <div key={comic.id}>
              <WrapLink className="bg-[#999999] overflow-hidden rounded inline-block">
                <Image src={comic.poster} alt={comic.title} className="aspect-[175/233]" />
              </WrapLink>
              <ComicTitle>{comic.title}</ComicTitle>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHot;

import { WrapLink } from "components/link";
import { PATH } from "constants/path";
import { Swiper, SwiperSlide } from "swiper/react";

const categories = [
  { id: 1, display: "Cổ Đại", href: "/" },
  { id: 2, display: "Tổng Tài", href: "/" },
  { id: 3, display: "Xuyên Không", href: "/" }
];

const HomeCategory = () => {
  return (
    <div className="mt-5 layout-container">
      <h3 className="heading">Thể loại</h3>
      <Swiper slidesPerView="auto" slidesPerGroupAuto spaceBetween={8} className="mt-3">
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <WrapLink
              href={`${PATH.search}/${category.href}`}
              className="py-[6px] px-[10px] rounded border border-[#ffa2a2] text-[#f97892] bg-[#fff5f5] inline-block font-medium"
            >
              {category.display}
            </WrapLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategory;

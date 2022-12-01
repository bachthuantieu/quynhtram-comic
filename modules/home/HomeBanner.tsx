import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { WrapLink } from "components/link";
import { Image } from "components/image";

const banners = [
  { id: 1, url: "dung-khoc.jpg" },
  { id: 2, url: "ke-hoach.jpg" }
];

const HomeBanner = () => {
  return (
    <div className="!mt-7 layout-container">
      <Swiper loop navigation={true} modules={[Navigation]} className="overflow-hidden rounded-lg">
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <WrapLink href="/">
              <Image alt="" src={banner.url} className="h-[400px] w-full object-cover" />
            </WrapLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;

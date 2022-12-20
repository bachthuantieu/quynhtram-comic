import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { WrapLink } from "components/link";
import { Image } from "components/image";

const banners = [
  {
    id: 1,
    url: "https://st.ntcdntempv3.com/data/comics/26/arya-ban-ben-thinh-thoang-lai-treu-gheo-925.jpg"
  },
  {
    id: 2,
    url: "https://st.ntcdntempv3.com/data/comics/182/man-cap-tra-xanh-xuyen-khong-thanh-tieu-5293.jpg"
  },
  {
    id: 3,
    url: "https://st.ntcdntempv3.com/data/comics/126/sau-khi-xuyen-sach-ta-bi-nam-phu-benh-ki-3779.jpg"
  },
  {
    id: 4,
    url: "https://st.ntcdntempv3.com/data/comics/114/ly-hon-voi-dai-boss-toi-cang-toa-sang-ho-512.jpg"
  },
  {
    id: 5,
    url: "https://st.ntcdntempv3.com/data/comics/57/bach-yeu-pho.jpg"
  },
  {
    id: 6,
    url: "https://st.ntcdntempv3.com/data/comics/227/oan-gia-chung-nha.jpg"
  }
];

const HomeBanner = () => {
  return (
    <div className="mt-7">
      <div className="layout-container">
        <Swiper
          loop
          navigation={true}
          modules={[Navigation]}
          slidesPerView="auto"
          spaceBetween={20}
          className="overflow-hidden rounded-md"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={banner.id} className="!w-[180px]">
              <WrapLink href="/">
                <Image
                  alt=""
                  src={banner.url}
                  className="border border-[#ddd] overflow-hidden rounded-md aspect-[180/240] object-cover w-full"
                />
                <h3 className="mt-[6px] line-clamp-2 text-[15px] font-medium text-purple85">
                  Manh Sư Tại Thượng
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <WrapLink href="/" className="text-purple85">
                    Chap 455
                  </WrapLink>
                  <span>12/12/2102</span>
                </div>
              </WrapLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;

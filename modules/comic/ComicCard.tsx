import { IconClock } from "components/icons";
import { Image } from "components/image";
import { WrapLink } from "components/link";
import React from "react";

const ComicCard = () => {
  return (
    <div>
      <WrapLink>
        <Image
          src="https://st.ntcdntempv3.com/data/comics/65/doc-gia-chiem-huu-co-thieu-phuc-hac-kieu-6033.jpg"
          className="border-[#ddd] w-full border rounded"
          alt=""
        />
      </WrapLink>
      <WrapLink className="mt-2 text-base font-medium line-clamp-2 text-purple8a">
        Hóa Ra Đó Chính Là Tình Yêu, Quỷ Vương!
      </WrapLink>
      <div className="flex items-center justify-between mt-1">
        <WrapLink className="text-purple8a">Chap 3</WrapLink>
        <span className="text-[#878787]">1 ngày trước</span>
      </div>
    </div>
  );
};

export default ComicCard;

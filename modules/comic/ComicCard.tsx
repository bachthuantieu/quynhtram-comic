import { Image } from "components/image";
import { WrapLink } from "components/link";

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
      <WrapLink className="mt-2 text-[15px] font-medium line-clamp-2">
        Hóa Ra Đó Chính Là Tình Yêu, Quỷ Vương!
      </WrapLink>
      <div className="flex items-center justify-between mt-[6px]">
        <WrapLink className="text-[#707070]">Chap 3</WrapLink>
        <span className="text-[#878787]">1 ngày trước</span>
      </div>
    </div>
  );
};

export default ComicCard;

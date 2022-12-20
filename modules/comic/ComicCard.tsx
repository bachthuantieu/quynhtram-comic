import { Image } from "components/image";
import { WrapLink } from "components/link";

const ComicCard = () => {
  return (
    <div>
      <WrapLink>
        <Image
          src="https://st.ntcdntempv3.com/data/comics/33/cong-chua-ashtarte.jpg"
          className="border border-[#ddd] overflow-hidden rounded-md aspect-[180/240] object-cover w-full"
          alt=""
        />
      </WrapLink>
      <WrapLink className="mt-[6px] line-clamp-2 text-[15px] font-medium text-purple85">
        Hóa Ra Đó Chính Là Tình Yêu, Quỷ Vương!
      </WrapLink>
      <div className="flex items-center justify-between mt-1">
        <WrapLink href="/" className="text-purple85">
          Chap 455
        </WrapLink>
        <span>12/12/2102</span>
      </div>
    </div>
  );
};

export default ComicCard;

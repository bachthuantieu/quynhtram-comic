import { Image } from "components/image";
import { WrapLink } from "components/link";
import { LayoutHome } from "layouts";
import React from "react";

const ComicDetailsPage = () => {
  return (
    <LayoutHome>
      <div className="layout-container">
        <div className="flex gap-5 mt-5">
          <div className="flex-shrink-0 max-w-[240px]">
            <Image
              src="https://st.ntcdntempv3.com/data/comics/33/cong-chua-ashtarte.jpg"
              className="border-[#ddd] w-full border rounded-lg"
              alt=""
            />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray7b">Thứ Anh Cần Là Trái Tim Tôi?</h1>
            <div className="mt-[6px] text-base">
              <strong className="text-gray7b">Tên khác: </strong>
              <span>Không có</span>
            </div>
            <div className="mt-[6px] text-base">
              <strong className="text-gray7b">Tác giả: </strong>
              <span>Không có</span>
            </div>
            <div className="mt-[6px] text-base">
              <strong className="text-gray7b">Tình trạng: </strong>
              <span>Đang tiến hành</span>
            </div>
            <div className="mt-[6px] text-base">
              <strong className="text-gray7b">Ngày thêm: </strong>
              <span>02/12/2022</span>
            </div>
            <div className="mt-[6px] text-base">
              <strong className="text-gray7b">Tổng lượt xem: </strong>
              <span>31</span>
            </div>
            <div className="mt-[6px] text-base">
              <strong className="text-gray7b">Thể loại: </strong>
              <span>31</span>
            </div>
            <div className="mt-3">
              <button className="px-4 py-2 text-sm font-medium text-white rounded-md btn-gradient bg-gradient-pink">
                Theo dõi truyện
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="heading">Tóm tắt</h3>
          <p className="text-base">
            Những ngưới sống ở sâu trong đáy Đại Dương hay được gọi với cái tên người cá. Họ và
            người dân của đế quốc Bavenberg đã bị lôi kéo vào cuộc chiến đãm máu trong suốt hơn một
            thập kỷ qua. Đê kết thúc chiến tranh họ đã gửi tiểu thư trẻ tuổi có tên là cordelia như
            một vật để giữ lấy hòa bình đôi bên. Qua nhiều năm, cô đã kết thân được với hoàng tử
            Noah Von Bavenberg và một vị tiểu thư Melina Von Hannover. Cô có mọi thứ mình muốn trừ
            việc được bước chân ra khỏi cung điện hoàng gia. Tuy nhiên, vào năm 18 tuổi cuộc sống
            của cô bước vào một bước ngoặc đen tối và méo mó.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="heading">Danh sách chương</h3>
          <div>
            <WrapLink className="p-2 leading-9 text-white capitalize whitespace-no-wrap bg-theme">
              Xem từ đầu
            </WrapLink>
            <p className="mt-1">Cập nhật lúc 09:22 13/06/2022.</p>
            <div></div>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default ComicDetailsPage;

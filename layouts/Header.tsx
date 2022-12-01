import { Image } from "components/image";
import { WrapLink } from "components/link";
import { PATH } from "constants/path";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage:
          'url("https://st.nettruyentv.com/Data/Sites/1/skins/comic/images/bg_header_2017.jpg")'
      }}
    >
      <div className="layout-container">
        <div className="h-[60px] flex items-center justify-between">
          <WrapLink href={PATH.home} className="flex-shrink-0">
            <Image
              src="https://www.ngonphong.com/wp-content/themes/ocumeo/images/logo.png"
              className="h-9"
              alt="logo"
            />
          </WrapLink>
          <WrapLink className="flex-shrink-0">
            <Image
              src="https://i0.wp.com/koikomik.com/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg?ssl=1"
              className="w-8 h-8 rounded-full"
              alt="logo"
            />
          </WrapLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

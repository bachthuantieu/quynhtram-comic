import Image from "components/Image";
import { WrapLink } from "components/link";
import { defaultAvatar } from "constants/global";
import { PATH } from "constants/path";
import useGlobalStore from "store/global-store";

const links = [
  {
    path: PATH.home,
    display: "Trang chủ"
  },
  {
    path: PATH.home,
    display: "Truyện tranh"
  },
  {
    path: PATH.home,
    display: "Phúc lợi"
  }
];

const Header = () => {
  const { currentUser } = useGlobalStore();
  return (
    <header className="shadow1">
      <div className="layout-container">
        <nav className="flex items-center justify-between py-5">
          <WrapLink>
            <h2 className="text-[22px] font-bold text-redff4">QuynhTram</h2>
          </WrapLink>
          <ul className="flex items-center gap-5">
            {links.map((link) => (
              <li key={link.display}>
                <WrapLink
                  href={link.path}
                  className="font-bold transition-all hover:text-redff4 text-dark4d"
                >
                  {link.display}
                </WrapLink>
              </li>
            ))}
          </ul>
          {currentUser ? (
            <WrapLink href={PATH.profile}>
              <Image
                src={currentUser.photoURL || defaultAvatar}
                alt={currentUser.email}
                className="rounded-full w-9 h-9"
              />
            </WrapLink>
          ) : (
            <WrapLink
              href={PATH.signIn}
              className="px-5 inline-block leading-10 rounded-[20px] text-white bg-redff4 h-10 font-semibold"
            >
              Đăng nhập
            </WrapLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

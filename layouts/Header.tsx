import { WrapLink } from "components/link";
import { PATH } from "constants/path";

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
  return (
    <header>
      <div className="layout-container">
        <nav className="flex items-center justify-between py-5">
          <h2 className="text-xl font-bold text-redff4">QuynhTram</h2>
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
          <button
            type="button"
            className="px-5 rounded-[20px] text-white bg-redff4 h-10 font-semibold"
          >
            Đăng nhập
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

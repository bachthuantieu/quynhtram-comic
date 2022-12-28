import Image from "components/Image";
import { WrapLink } from "components/link";
import { defaultAvatar } from "constants/global";
import { PATH } from "constants/path";
import { signOut } from "firebase/auth";
import Sidebar from "layouts/Sidebar";
import { auth } from "libs/firebase-app";
import Link from "next/link";
import useGlobalStore from "store/global-store";

const sidebarLinks = [
  {
    icon: "/icon-account.png",
    path: PATH.profile,
    display: "Tài khoản của tôi"
  },
  {
    icon: "/icon-password.png",
    path: PATH.changePassword,
    display: "Đổi mật khẩu"
  }
];

const UserSidebar = () => {
  const { currentUser } = useGlobalStore();
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <Sidebar labelOpenSidebar="Tài khoản của tôi">
      <div className="flex items-center gap-x-2">
        <Image
          alt={currentUser?.displayName}
          src={currentUser?.photoURL || defaultAvatar}
          className="object-cover w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold line-clamp-1">Hoang Lam</h3>
          <Link href={PATH.home}>Sửa hồ sơ</Link>
        </div>
      </div>
      <ul className="mt-7">
        {sidebarLinks.map((link) => (
          <li key={link.display} className="mb-4">
            <WrapLink href={link.path} className="flex items-center gap-x-3">
              <Image src={link.icon} alt={link.display} className="w-5 h-5" />
              <span>{link.display}</span>
            </WrapLink>
          </li>
        ))}
        <li>
          <button onClick={handleLogout} className="flex items-center gap-x-3">
            <Image src="/icon-logout.png" alt="Đăng xuất" className="w-5 h-5" />
            <span>Đăng xuất</span>
          </button>
        </li>
      </ul>
    </Sidebar>
  );
};

export default UserSidebar;

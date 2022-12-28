import { IconChevronLeft, IconList } from "components/Icons";
import useClickOutside from "hooks/useClickOutside";
import { useRef } from "react";
import classNames from "utils/classNames";

interface SidebarProps {
  children: React.ReactNode;
  labelOpenSidebar?: string;
  className?: string;
}

const Sidebar = ({
  children,
  labelOpenSidebar = "Mở sidebar",
  className = "lg:w-[220px] shrink-0"
}: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const toggleSidebar = () => {
    if (sidebarRef.current) sidebarRef.current.classList.toggle("!translate-x-0");
    if (overlayRef.current) overlayRef.current.classList.toggle("fixed");
  };
  const closeSidebar = () => {
    if (sidebarRef.current) sidebarRef.current.classList.remove("!translate-x-0");
    if (overlayRef.current) overlayRef.current.classList.remove("fixed");
  };
  useClickOutside(sidebarRef, () => closeSidebar());
  return (
    <>
      <button onClick={toggleSidebar} className="flex items-center lg:hidden gap-x-2 max-w-fit">
        <IconList className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
        <span>{labelOpenSidebar}</span>
      </button>
      <aside
        className={classNames(
          "-translate-x-full z-[300] bg-[#f8fafc] lg:bg-transparent w-full max-w-[300px] fixed top-0 left-0 bottom-0 lg:translate-x-0 p-5 lg:h-fit transition-all duration-300 lg:static overflow-auto dark:bg-dark26 rounded-xl",
          className
        )}
        ref={sidebarRef}
      >
        <div
          aria-hidden="true"
          onClick={toggleSidebar}
          className="flex items-center mb-5 cursor-pointer gap-x-2 lg:hidden"
        >
          <IconChevronLeft className="w-4 h-4" fill="currentColor" />
          <span className="text-base font-medium">Trở lại</span>
        </div>

        <div>{children}</div>
      </aside>
      <div
        aria-hidden
        ref={overlayRef}
        onClick={closeSidebar}
        className="inset-0 -m-3 overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] z-[200]"
      />
    </>
  );
};

export default Sidebar;

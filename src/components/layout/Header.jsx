import { useState } from "react";
import { HiBars3, HiMoon, HiSun } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import { NAV_ITEMS, isPathActive } from "../../utils/navigation";
import UserMenu from "./UserMenu";
import useTheme from "../../hook/useTheme";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme("light");
  const location = useLocation();
  const isNavItemActiv = (path) => isPathActive(path, location.pathname);
  return (
    <header className="navbar bg-base-100 shadow-lg">
      {/* 漢堡按鈕 */}
      <div
        className={`navbar-start dropdown dropdown-bottom ${
          isMenuOpen ? "dropdown-open" : ""
        }`}
      >
        <div
          className="btn bg-ghost lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <HiBars3 className="w-6 h-6" />{" "}
        </div>
        {isMenuOpen && (
          <NavLinks
            items={NAV_ITEMS}
            isActive={(path) => isNavItemActiv(location.pathname, path)}
            onItemClick={() => setIsMenuOpen(false)}
            listClassName={
              "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box min-w-max md:hidden"
            }
          />
        )}
        {/* 導覽列的中間部分:Logo品牌 */}
        <Link
          to="/"
          className="btn btn-ghost text-lg font-bold text-primary hover:text-primary-focus transition-colors duration-200"
        >
          🍔早餐時光🍳
        </Link>
        {/* 導覽列的中間部分 : 大螢幕的導航選單 */}
        <div className="navbar-center hidden md:flex">
          <NavLinks
            item={NAV_ITEMS}
            isActive={isNavItemActiv}
            listClassName="menu menu-horizontal px-1"
          />
        </div>
        {/* 導覽列的右邊部分 : 切換主題、使用者設定 */}
        <div className="navBar-end flex items-center gap-2">
          {/* 主題切換按鈕 */}
          <button
            onClick={toggleTheme}
            aria-label="切換主題"
            className="btn btn-ghost btn-circle bordor-2 bg-base-300"
          >
            {theme === "dark" ? (
              <HiMoon className="w-6 h-6" />
            ) : (
              <HiSun className="w-6 h-6" />
            )}
          </button>
          {/* 使用者設定: 下拉式選單 */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

import { HiUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const defaultMenuItems = [
  { label: "個人資料", href: "/profile" },
  { label: "設定", href: "/settings" },
];

export default function UserMenu({ items = defaultMenuItems }) {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-sm bg-primary
            text-primary-content border-0 hover:bg-primary/70"
      >
        <HiUser className="w-5 h-5 area-hidden" />
      </div>

      <ul className="mt-3 z-[1] p-2 menu menu-sm dropdown-content bg-base-200 rounded-box right-0 min-w-max">
        {/* 未登入：顯示登入 / 註冊 連結 */}
        <SignedOut>
          <li>
            <Link
              to="/login"
              className="hover:bg-base-400 dark:hover:bg-base-300"
            >
              登入
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="hover:bg-base-400 dark:hover:bg-base-300"
            >
              註冊
            </Link>
          </li>
        </SignedOut>

        {/* 已登入：顯示 Clerk 的 UserButton（含登出選項），以及其他選單項 */}
        <SignedIn>
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
          {items.map(({ label, href, onClick }) => (
            <li key={label}>
              <Link
                to={href ?? "#"}
                onClick={onClick}
                className="hover:bg-base-400 dark:hover:bg-base-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </SignedIn>
      </ul>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path) =>
    `hover:underline ${pathname === path ? "font-bold underline" : ""}`;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
      <Link href="/" className="font-bold text-xl">
        🌤 Weatherly
      </Link>
      <div className="flex gap-4">
        <Link href="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link href="/history" className={linkClasses("/history")}>
          History
        </Link>
        <Link href="/about" className={linkClasses("/about")}>
          About
        </Link>
      </div>
    </nav>
  );
}

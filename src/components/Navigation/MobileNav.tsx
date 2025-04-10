"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNav = () => {

    const path = usePathname();
  return (
    <div className="bg-white shadow-lg">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-3 px-5">
        <Link href={"/"}>
          <Image
            src="/assets/frontend/images/resources/sticky-logo.png"
            alt="Logo"
            width={200}
            height={100}
            className="w-[150px]"
          />
        </Link>

        <div className="flex items-center gap-5 py-4 pr-3 xl:pr-0">
          <Link
            href="/"
            className={`font-bold text-xl ${
              path == "/" ? "text-orange-400" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/the-app"
            className={`font-bold text-xl ${
              path == "/the-app" ? "text-orange-400" : ""
            }`}
          >
            The App
          </Link>
          <Link
            href="/blog"
            className={`font-bold text-xl ${
              path == "/blog" ? "text-orange-400" : ""
            }`}
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

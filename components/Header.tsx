"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { NavigationMenu2, NavigationMenuDemo } from "./Navigation";
import Link from "next/link";

const Header = () => {
  const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDir = () => {
      const currentScrollY = window.pageYOffset;

      if (Math.abs(currentScrollY - lastScrollY) < 5) return;

      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      setScrollY(currentScrollY);

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return (
    <header
      className={` ring-1 ring-neutral-800 z-50 mt-6 fixed top-4 left-1/2 -translate-x-1/2 w-10/12 h-16 flex justify-between items-center 
        rounded-[16px] p-2 backdrop-blur-lg bg-[#16161a9d] transition-all duration-500
        ${
          scrollDir === "down" && scrollY > 30
            ? "translate-y-5 opacity-0 duration-800"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      <div className=" absolute top-0 h-0.5 left-2/12 right-2/12 mask-l-from-5% mask-r-from-5% bg-yellow-200" />
      <div className=" absolute top-0 h-0.5 left-3/12 right-3/12 mask-l-from-5% mask-r-from-5% bg-white" />
      <div className="w-fit min-w-12 h-fit">
        <Image
          className=" object-cover min-h-12"
          src="/win-logo-1.png"
          alt="win"
          width={80}
          height={80}
        />
      </div>

      <div className=" motion-2 max-sm:hidden max-md:text-[2.8vw] max-lg:text-[3vw] motion-2 text-nowrap text-[28px] flex gap-6 font-American text-white">
        <Link href="/how-to-play">HowToPlay</Link>
        <Link href="/dailygiveway">Daily Giveway</Link>
        <Link href="/jackpot">Jackpot</Link>
        <Link className="" href="/winners">
          Winners
        </Link>
      </div>

      <div className="min-sm:hidden motion-2 relative">
        <NavigationMenu2 />
      </div>

      <div className="flex gap-3 ">
        <NavigationMenuDemo />

        <div className=" max-lg:hidden bg-neutral-800 font-Fast text-white p-2 px-6 rounded-2xl">
          *255#
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import TermsConditions from "@/components/TermsConditions";

const DownSide = () => {
  return (
    <main className=" h-full flex-col w-full flex items-center justify-center ">
      <section className="bg-neutral-900 text-white max-md:w-full max-md:rounded-none w-11/12 max-lg:h-fit motion-2 h-[19rem] rounded-4xl max-md:p-0 p-4 flex flex-col justify-between">
        {/* up  */}
        <div className="flex max-lg:flex-col flex-1 gap-4">
          {/* left  */}
          <div className="flex-3/12 flex flex-col justify-around items-center">
            <div className=" flex items-center gap-1">
              <Image
                className=" object-cover min-h-16"
                src="/win-logo-1.png"
                alt="win"
                width={100}
                height={100}
              />
              <p className=" max-xl:text-4xl max-md:text-3xl text-5xl font-Pask">
                WINLIBERIA
              </p>
            </div>
            <p className=" text-xs max-md:text-sm max-md:text-center w-11/12 max-md:w-10/12">
              WinLiberia is Liberia’s premier digital lottery and raffle
              platform, offering a secure, fair, and exciting way to win
              life-changing cash prizes. Through weekly draws and user-friendly
              entry options, we bring convenience and opportunity to every
              corner of the country. Licensed and regulated.
            </p>
            <div className=" flex">
              <Link href="/https://web.facebook.com/profile.php?id=61566900031502&_rdc=1&_rdr#">
                <Facebook size={20} />
              </Link>
              <Link href="/https://api.whatsapp.com/message/VJG5LCFPFDWPN1?autoload=1&app_absent=0">
                <FaWhatsapp size={20} />
              </Link>
              {/* <Link href="/https://web.facebook.com/profile.php?id=61566900031502&_rdc=1&_rdr#">
                <Instagram />
              </Link>
              <Link href="/https://web.facebook.com/profile.php?id=61566900031502&_rdc=1&_rdr#">
                <Twitter />
              </Link> */}
            </div>
          </div>

          {/* right  */}
          <div className=" max-md:p-2 flex-col flex-6/12 flex font-Roboto text-sm">
            <ul className=" flex-2/12 font-Agdasima text-2xl text-neutral-500 w-full flex justify-around">
              <li className="flex-2 max-sm:hidden">Quick Link</li>
              <li className="flex-2">Note!</li>
              <li className="flex-3/12">Contact Us</li>
            </ul>

            <div className=" font-Agdasima text-lg flex-10/12 flex justify-around w-full">
              <div className=" max-sm:hidden p-2 flex-1 flex flex-col justify-evenly">
                <Link href="/how-to-play">How to play</Link>
                <Link href="/about">About Us</Link>
                <Link href="/dailygiveway">Daily Draw</Link>
                <Link href="/jackpot">Jackpot</Link>
              </div>

              <div className="p-2 flex-2 flex flex-col justify-evenly">
                <div className="flex items-center gap-2">
                  <Image
                    className=" -rotate-90 object-cover rounded-full"
                    src="/nla.png"
                    alt="win"
                    width={40}
                    height={40}
                  />
                  <p className="">Licensed by the National Lottery Authority</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    className=" object-center rounded-full"
                    src="/momo.jpg"
                    alt="win"
                    width={40}
                    height={40}
                  />
                  <p>Partner with MTN MoMo</p>
                </div>
              </div>

              <div className="p-2 flex-3/12 flex flex-col justify-evenly">
                <p>Email: admin@winliberia.com</p>
                <p>Phone: +231881697769</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-0.5 w-full bg-neutral-500" />

        {/* down  */}
        <div className=" relative max-md:p-2 mt-5 max-sm:gap-4 flex justify-between items-center text-gray-500 font-Agdasima max-md:text-lg text-xl">
          <p className="">© 2025 WINLIBERIA. All rights reserved.</p>
          <div className="flex max-md:gap-4 gap-10">
            <div className="">
              <TermsConditions />{" "}
            </div>
            <div className="">Privacy Policy</div>
          </div>
        </div>
      </section>

      <section className=" w-full mask-b-from-0% max-md:hidden h-[15rem] relative text-neutral-900 font-Bravecho">
        <div className=" absolute -translate-x-10 left-1/12 right-1/12 -bottom-4/12  max-lg:text-[10rem]  text-[12rem] text-nowrap">
          WIN LIBERIA
        </div>
      </section>
    </main>
  );
};

export default DownSide;

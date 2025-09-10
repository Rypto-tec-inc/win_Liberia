import { WinnersTables } from "@/components/WinnersTable";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className=" background-3 w-full text-white h-fit overflow-clip">
      <section className=" py-6 flex flex-col gap-6 w-full h-full backdrop-blur-xl backdrop-saturate-50 backdrop-contrast-50">
        <div className="flex flex-col items-center">
          <div className="flex items-center flex-col max-md:gap-2 gap-4">
            <p className="text-8xl max-lg:text-7xl max-md:text-5xl max-sm:text-4xl font-AMORIA">
              Latest Winners
            </p>
            <p className="text-center text-xl max-md:text-lg font-OMEGLE">
              Real-time updates of our latest winners. Your win could be next!
            </p>
          </div>
          <ul className="flex flex-wrap gap-6 p-2 w-7/12 h-40 min-h-fit justify-between">
            <li className="backdrop-blur-3xl border-2 rounded-2xl flex flex-col items-center p-2 justify-center flex-1">
              <p className="font-AMORIA text-4xl">999+</p>
              <p className="font-Agdasima text-xl">Total Winners</p>
            </li>
            <li className="backdrop-blur-3xl border-2 rounded-2xl flex flex-col items-center p-2 justify-center flex-1">
              <p className="font-AMORIA text-4xl">5.5M+</p>
              <p className="font-Agdasima text-xl">LRD Paid out</p>
            </li>
            <li className="backdrop-blur-3xl border-2 rounded-2xl flex flex-col items-center p-2 justify-center flex-1">
              <p className="font-AMORIA text-4xl">Daily</p>
              <p className="font-Agdasima text-xl">Draw frequency</p>
            </li>
          </ul>
        </div>
        <div className=" relative p-4 flex flex-col items-center">
          <p className="text-6xl max-md:text-5xl font-MAGNUM">Recent Winners</p>
          <WinnersTables />
        </div>
        <div className=" w-full flex items-center justify-center p-2 h-40">
          <div className=" flex items-center gap-3 flex-col p-2">
            <p className="text-4xl font-Agdasima">Want to Join Our Winners?</p>
            <p className="text-center text-sm">
              It's your turn to win big! Start playing now and experience the
              thrill of winning.
            </p>

            <Link
              href="/dailygiveway"
              className=" bg-[#1a1a1a11] border-2 backdrop-blur-3xl font-Fast text-white p-2 px-6 rounded-2xl"
            >
              Dial *255# to Play
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

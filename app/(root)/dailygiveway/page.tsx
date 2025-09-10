import PlayForm from "@/components/PlayForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="h-dvh overflow-clip w-full">
      <section className="flex justify-between w-full h-full">
        <div className=" flex-col text-center gap-3 bg-radial max-md:p-4 from-violet-900 to-violet-950 flex-1 flex items-center justify-around">
          <div className="">
            <p className="text-7xl text-white font-Jember">WINLIBERIA</p>
            <p className="text-lg text-neutral-200 font-Agdasima">
              {" "}
              your chances to win big with the #1 100% Digital Lottery Platform
              in Liberia!
            </p>
          </div>
          <PlayForm type="daily" />

          <div className="text-neutral-400 text-xs">
            By participating, you agree to WINLIBERIA Digital Lottery Terms and
            Conditions and Policy.
          </div>
        </div>
        <div className="flex-1 max-md:hidden mask-l-from-0%">
          <Image
            className="  object-cover w-full h-full"
            src="/jack.jpg"
            alt="win"
            width={5000}
            height={5000}
          />
        </div>
      </section>
    </main>
  );
};

export default page;

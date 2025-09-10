"use client";
import Header from "@/components/Header";
import HeroText from "@/components/HeroText";
import Sposnor from "@/components/Sposnor";
import CheckTicket from "@/components/CheckTicket";
import Winner from "@/components/Winner";
import DownSide from "@/components/DownSide";
import { useRef } from "react";

import { ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const wrapper = useRef<HTMLDivElement>(null);
  const ctx = useRef<GSAPContext>();

  useGSAP(() => {
    ctx.current = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 3,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
        smoothTouch: 0.1,
        speed: 3,
      });
    }, wrapper);
  });

  return (
    <main id="smooth-wrapper" ref={wrapper} className="w-full h-screen">
      <section
        className=" relative w-full min-h-screen bg-neutral-950 overflow-clip"
        id="smooth-content"
      >
        <section className="background w-full h-lvh flex items-center justify-end">
          <div className=" flex justify-center p-4">
            <Header />
          </div>

          <HeroText />
        </section>

        <section className="h-72 flex items-center justify-center">
          <Sposnor />
        </section>

        <section className="h-72 max-lg:h-fit flex items-center justify-center">
          <CheckTicket />
        </section>

        <section className="h-fit w-full text-white mt-20">
          <Winner />
        </section>

        <section className="w-full max-md:h-fit h-lvh">
          <DownSide />
        </section>
      </section>
    </main>
  );
}

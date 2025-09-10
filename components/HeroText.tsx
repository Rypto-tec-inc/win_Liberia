"use client";
import React from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const HeroText = () => {
  useGSAP(() => {
    SplitText.create(".split", {
      type: "lines, words, chars",
      mask: "chars",
      autoSplit: true,
      aria: "auto",
      onSplit(self) {
        return gsap.from(self.chars, {
          delay: 0.5,
          duration: 0.5,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
          ease: "sine.inOut",
        });
      },
    });

    gsap.to(".heroT", {
      delay: 0.5,
      duration: 1,
      opacity: 1,
      ease: "sine.in",
    });

    // gsap.to(".heroT", {
    //   opacity: 1,
    //   // y: -20,
    //   duration: 4,
    //   ease: "sine.inOut",
    //   scrollTrigger: {
    //     pin: true,
    //     trigger: ".heroT",
    //     start: "top 30%",
    //     end: "+=150",
    //     markers: true,
    //     scrub: 1,
    //     // toggleActions: "play none none reverse",
    //   },
    // });
  }, []);
  return (
    <div className=" heroT w-96 max-sm:w-[34rem] max-md:w-[30rem] motion-2 p-2 max-[36rem]:mr-4 max-md:mr-6 mr-40 text-white">
      {/* <HeroSection /> */}
      <p className="font-Jember max-[36rem]:text-6xl text-7xl split">
        Transform Your Life With One Draw
      </p>
      <div className=" font-Agdasima">
        <p className="text-xl max-md:text-3xl">
          Win Up To $
          <CountUp delay={2} duration={20} end={1000000} /> LRD{" "}
        </p>
        <p className="text-sm max-md:text-2xl">
          Join thousands of winners in Liberia's most trusted digital raffle
          platform
        </p>
      </div>
      <div className="">
        <button className=" hover:bg-[#47474749] transition-all duration-300 cursor-pointer backdrop-blur-lg border-1 font-Amperzand text-5xl w-full p-2 rounded-md">
          PLay Now
        </button>
      </div>
    </div>
  );
};

export default HeroText;

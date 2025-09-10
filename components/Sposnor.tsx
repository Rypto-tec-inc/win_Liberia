"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Sposnor = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderRef2 = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const boxes = gsap.utils.toArray<HTMLDivElement>(".slider-item");

  //     const slider = sliderRef.current;
  //     if (slider) {
  //       boxes.forEach((box) => {
  //         const clone = box.cloneNode(true);
  //         slider.appendChild(clone);
  //       });
  //     }

  //     // Animate left continuously
  //     gsap.to(".slider-item", {
  //       xPercent: -100,
  //       repeat: -1,
  //       ease: "power4.inOut",
  //       yoyo: true,
  //       duration: 20,
  //       modifiers: {
  //         xPercent: gsap.utils.wrap(-100, 0),
  //       },
  //     });
  //   }, sliderRef);

  //   return () => ctx.revert();
  // }, []);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLDivElement>(".slider-item");
    const itemss = gsap.utils.toArray<HTMLDivElement>(".slider-item2");

    gsap.to(".slider-item", {
      xPercent: -455,
      repeat: -1,
      ease: "linear",
      duration: 20,
      yoyo: true,
      // modifiers: {
      //   xPercent: gsap.utils.wrap(-100, 0),
      // },
    });
    gsap.to(".slider-item2", {
      xPercent: 450,
      repeat: -1,
      ease: "linear",
      duration: 20,
      yoyo: true,
      // modifiers: {
      //   xPercent: gsap.utils.wrap(-100, 0),
      // },
    });
  }, []);

  const Partner = [
    {
      name: "Kool",
      fm: "91.9 FM",
      code: "*222*3#",
    },
    {
      name: "Freedom",
      fm: "87.9 FM",
      code: "*222*1#",
    },
    {
      name: "Spoon",
      fm: "105.7 FM",
      code: "*222*4#",
    },
    {
      name: "WinLiberia",
      fm: "",
      code: "*222*05#",
    },
    {
      name: "Sky",
      fm: "107.1 FM",
      code: "*222*10#",
    },
    {
      name: "Kear",
      fm: "95.9 FM",
      code: "*222*8#",
    },
    {
      name: "OCM Radio ",
      fm: "104.5 FM",
      code: "*222*9#",
    },
    {
      name: "Lloyd",
      fm: "101.9 FM",
      code: "*222*14#",
    },
    {
      name: "Radio Margibi",
      fm: "",
      code: "*222*7#",
    },
  ];

  return (
    <main className="text-white w-full flex justify-center overflow-clip">
      <div className="overflow-hidden mask-l-from-60% mask-r-from-60% w-11/12 p-2 flex flex-col items-center ">
        <p className="text-7xl max-md:text-6xl max-sm:text-5xl motion-2 font-Bravecho">
          Partners
        </p>

        <div className="overflow-hidden w-full flex flex-col gap-3">
          <div
            ref={sliderRef}
            className=" max-md:-translate-x-[12rem] flex gap-3 flex-nowrap"
          >
            {Partner.map(({ name, fm, code }, index) => (
              <div
                key={index}
                className="slider-item relative rounded-lg h-20 bg-radial from-neutral-500 to-neutral-700 min-w-60 max-md:min-w-44 flex-shrink-0"
              >
                <div className="h-0.5 bg-white absolute left-2/12 right-2/12 mask-l-from-50% mask-r-from-50%" />
                <div className="p-2 flex flex-col justify-center items-center">
                  <p className="text-4xl font-LT">{name}</p>
                  <div className="text-lg font-AMORIA flex gap-2">
                    <p>{fm}</p>
                    <p>{code}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            ref={sliderRef2}
            className=" -translate-x-[66rem] max-md:-translate-x-[85rem] flex gap-3 flex-nowrap"
          >
            {Partner.map(({ name, fm, code }, index) => (
              <div
                key={index}
                className="slider-item2 relative rounded-lg h-20 bg-radial from-neutral-500 to-neutral-700 min-w-60 max-md:min-w-44 flex-shrink-0"
              >
                <div className="h-0.5 bg-white absolute left-2/12 right-2/12 mask-l-from-50% mask-r-from-50%" />
                <div className="p-2 flex flex-col justify-center items-center">
                  <p className="text-4xl font-LT">{name}</p>
                  <div className="text-lg font-AMORIA flex gap-2">
                    <p>{fm}</p>
                    <p>{code}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sposnor;

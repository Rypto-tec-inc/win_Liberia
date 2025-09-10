"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Ticket = [
  {
    name: "john Mann",
    ticket: "129029hfhi",
    partner: "kool FM",
    promo: "kool12",
    amount: "2200LRD",
  },
  {
    name: "Peter Gaye",
    ticket: "1fhl029hfhi",
    partner: "Spoon FM",
    promo: "Spo12",
    amount: "90800LRD",
  },
  {
    name: "john Mann",
    ticket: "129029hfhi",
    partner: "kool FM",
    promo: "kool12",
    amount: "2200LRD",
  },
  {
    name: "Peter Gaye",
    ticket: "1fhl029hfhi",
    partner: "Spoon FM",
    promo: "Spo12",
    amount: "90800LRD",
  },
  {
    name: "john Mann",
    ticket: "129029hfhi",
    partner: "kool FM",
    promo: "kool12",
    amount: "2200LRD",
  },
  {
    name: "Peter Gaye",
    ticket: "1fhl029hfhi",
    partner: "Spoon FM",
    promo: "Spo12",
    amount: "90800LRD",
  },
  {
    name: "john Mann",
    ticket: "129029hfhi",
    partner: "kool FM",
    promo: "kool12",
    amount: "2200LRD",
  },
  {
    name: "Peter Gaye",
    ticket: "1fhl029hfhi",
    partner: "Spoon FM",
    promo: "Spo12",
    amount: "90800LRD",
  },
];

const Winner = () => {
  const WinSliderRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLDivElement>(".wins");
    const itemss = gsap.utils.toArray<HTMLDivElement>(".slider-item2");

    gsap.to(".winns", {
      opacity: 1,
      // duration: 3,
      ease: "sine.in",
      scrollTrigger: {
        scrub: 1,
        trigger: ".winns",
        start: "top 70%",
        end: "+=150",
      },
    });

    gsap.fromTo(
      ".wins",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2, // each row steps in one by one
        scrollTrigger: {
          trigger: WinSliderRef.current,
          start: "top 80%", // when table enters viewport
          end: "bottom 60%",
          toggleActions: "play none none reset",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <main className="w-full h-fit mask-b-from-50%">
      <section className=" winns w-full h-fit flex flex-col items-center opacity-0">
        <p className="text-9xl motion-2 max-sm:text-8xl max-[35rem]:text-7xl font-AMORIA">
          Winners
        </p>
        <div className=" w-full max-md:w-fit h-fit p-6 flex flex-col gap-3">
          {/* Header Row */}
          <ul className="flex flex-nowrap min-w-80 justify-around max-sm:text-xl max-lg:text-2xl text-3xl font-Agdasima">
            <li>Name</li>
            <li>Ticket ID</li>
            <li>Partner</li>
            <li>Promo</li>
            <li>Amount</li>
          </ul>

          {/* Body Rows */}
          <div
            ref={WinSliderRef}
            className="flex mask-b-from-90% mask-l-from-90% mask-t-from-90% mask-r-from-90% background-2 flex-col gap-2 max-md:text-lg text-2xl font-Agdasima"
          >
            {Ticket.map(({ name, ticket, partner, promo, amount }, i) => (
              <ul
                key={i}
                className="wins flex flex-nowrap min-w-80 items-center justify-around h-20 rounded-md max-md:p-2 p-4 backdrop-blur-xl border-2 backdrop-brightness-50 backdrop-saturate-50"
              >
                {/* even:bg-violet-900 odd:bg-indigo-900 */}
                <li>{name}</li>
                <li>{ticket}</li>
                <li>{partner}</li>
                <li>{promo}</li>
                <li>{amount}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Winner;

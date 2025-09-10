"use client";
import Image from "next/image";
import GlowingEffects from "@/components/GlowingEffect";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How do I know if I’ve won?",
    answer: "Winners are notified instantly via SMS.",
  },
  {
    question: "How do I receive my winnings?",
    answer:
      "All winnings are automatically credited to your mobile money account within minutes of winning.",
  },
  {
    question: "What if I need help?",
    answer:
      "Our customer support team is available 24/7. Simply dial *255# and select the 'Help' option, or contact us through our website.",
  },
];

const page = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".faq-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <main className="w-full min-h-screen bg-radial from-neutral-950 to-neutral-800 text-white">
      <section className="w-full h-full gap-20 flex flex-col p-10">
        <div className="flex gap-4 flex-col justify-around items-center">
          <p className="text-8xl max-lg:text-7xl max-md:text-5xl max-sm:text-4xl motion-2 font-American">
            How to Play & Win
          </p>
          <p className="text-3xl max-md:text-xl max-sm:text-sm max-md:w-full font-MAGNUM text-center w-10/12">
            Playing WINLIBERIA is easy! Follow these simple steps to start your
            winning journey. No registration required - just dial and play!
          </p>
        </div>

        <div className="">
          <GlowingEffects />
        </div>

        <div className="w-full flex justify-center px-4 md:px-8 mb-10">
          <div
            ref={containerRef}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-6 border border-white/10 w-full max-w-4xl"
          >
            <h2 className="text-3xl font-AMORIA md:text-4xl font-bold mb-12 text-center text-white">
              Frequently Asked Questions
            </h2>

            <div className="grid gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item border-b border-white/10 pb-8 last:border-0 last:pb-0 opacity-0"
                >
                  <h3 className="text-lg font-Agdasima md:text-xl font-semibold mb-3 text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-col justify-around items-center">
          <p className="font-Agdasima text-2xl">Ready to Try Your Luck?</p>
          <p className="text-xs  max-md:text-center">
            Start playing now and join thousands of winners on WINLIBERIA!
          </p>
          <Link
            href="/dailygiveway"
            className=" bg-neutral-800 font-Fast text-white p-2 px-6 rounded-2xl"
          >
            Dial *255# to Play
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;

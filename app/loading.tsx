import { LoaderPinwheel } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <main className="w-full h-dvh bg-radial from-indigo-900 to-indigo-950 text-white">
      <section className="w-full h-full flex items-center justify-center">
        <LoaderPinwheel size={100} className=" animate-spin" />

        <p className="text-8xl font-High">Win Liberia</p>
      </section>
    </main>
  );
};

export default loading;

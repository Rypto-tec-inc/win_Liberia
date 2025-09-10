import { ArrowDownLeftSquareIcon, TicketIcon } from "lucide-react";
import React from "react";

const CheckTicket = () => {
  return (
    <main className="w-full text-white flex max-lg:flex-col items-center justify-around max-xl:justify-center gap-6 max-lg:gap-2 h-full motion-2 max-lg:p-3 ">
      <section className="bg-radial relative from-neutral-700 to-neutral-900 flex flex-col justify-around rounded-lg p-2 max-[35rem]:w-[20rem] max-sm:w-[23rem] max-md:w-[25rem] w-[28rem] max-sm:h-fit h-[16rem]">
        <div className="flex flex-col items-center gap-2">
          <p className="flex text-4xl font-Payback items-center gap-2">
            Daily Draw Ticket
          </p>
          <p className="text-sm motion-2 max-md:text-center max-md:text-lg">
            Enter your ticket number to see if your ticket number is valid.
          </p>
          <p className="flex items-center gap-2 text-xs motion-2 max-md:text-center max-md:text-sm">
            {" "}
            <ArrowDownLeftSquareIcon size={15} /> Daily draw tickets are only
            valid for the day they are issued.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Enter your ticket number"
            className=" placeholder:text-center placeholder:text-gray-500 font-Agdasima text-2xl bg-white w-full p-2 rounded-md text-black border border-gray-300"
          />
          <button className=" mt-2 w-full bg-linear-330 from-orange-700 to-orange-900 text-white p-2 rounded-lg font-Fast text-3xl">
            Check Ticket
          </button>

          {/* <p className="text-center text-lg text-red-500 font-Agdasima">
            Failed to verify daily draw ticket.
          </p> */}
        </div>
      </section>

      <section className="bg-radial relative from-neutral-700 to-neutral-900 flex flex-col justify-around rounded-lg p-2 max-[35rem]:w-[20rem] max-sm:w-[23rem] max-md:w-[25rem] w-[28rem] max-sm:h-fit h-[16rem]">
        <div className="flex flex-col items-center gap-2">
          <p className="flex text-4xl font-Payback items-center gap-2">
            Jackpot Ticket
          </p>
          <p className="text-sm motion-2 max-md:text-center max-md:text-lg">
            Enter your ticket number to see if your ticket number is valid.
          </p>
          <p className="flex items-center gap-2 text-xs motion-2 max-md:text-center max-md:text-sm">
            {" "}
            <ArrowDownLeftSquareIcon size={15} /> Jackpot tickets are valid for
            one full week from the date of issue.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Enter your jackpot ticket number"
            className=" placeholder:text-center placeholder:text-gray-500 font-Agdasima text-2xl bg-white w-full p-2 rounded-md text-black border border-gray-300"
          />
          <button className="mt-2 w-full bg-linear-330 from-green-900 to-green-950 text-white p-2 rounded-lg font-Fast text-3xl">
            Check Ticket
          </button>

          {/* <p className="text-center text-lg text-red-500 font-Agdasima">
            Failed to verify daily draw ticket.
          </p> */}
        </div>
      </section>
    </main>
  );
};

export default CheckTicket;

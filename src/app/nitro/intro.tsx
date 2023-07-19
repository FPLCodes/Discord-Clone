"use client";

import Navbar from "../components/Navbar";

export default function Intro() {
  return (
    <div>
      <Navbar />
      <div className="nitro-bg pb-[1049px] overflow-hidden h-auto pt-[200px] justify-center relative flex flex-col items-center -mt-[82px]">
        <div className="max-w-[1120px] static overflow-visible justify-start items-center flex flex-col w-[90%] h-auto self-start mx-auto">
          <div className="z-50 text-center justify-start self-center items-center max-w-[420px] relative flex flex-col">
            <h1 className="text-4xl text-center text-white font-gintoNordBold font-bold mb-6">
              Unleash more fun with Nitro
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

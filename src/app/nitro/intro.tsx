"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Intro() {
  return (
    <div>
      <Navbar />
      <div className="nitro-bg pb-[1049px] mb:pb-[1060px] lg:p-0 overflow-hidden h-auto lg:h-[740px] pt-[120px] lg:pt-0 justify-center relative flex flex-col items-center -mt-[82px]">
        <div className="max-w-[1120px] static overflow-visible justify-start items-center flex flex-col lg:flex-row w-[90%] h-auto self-start mx-auto">
          <div className="text-center justify-start self-center items-center max-w-[420px] relative flex flex-col">
            <h1 className="text-4xl md:text-[40px] lg:text-[56px] leading-none text-center lg:text-start text-white font-gintoNordBold font-bold mb-6">
              Unleash more fun with Nitro
            </h1>
            <div className="text-xl leading-7 text-center lg:text-start pr-6 text-white mb-4">
              Subscribe to Nitro to upgrade your emoji, personalize your
              profile, share bigger files, and so much more.
            </div>
            <Image
              className="max-w-[400px] w-[320px] absolute top-auto bottom-[-246px] left-auto right-auto lg:hidden"
              alt="Wumpus from discord flying with a jetpack and wearing an astraunaut helmet"
              src="/nitro/wumpus.png"
              width={640}
              height={528}
            />
          </div>
        </div>
        <div className="w-full h-full absolute overflow-hidden">
          <div className="hidden lg:block absolute top-[-12%] left-[-25%]">
            {/* <Image
              className="inline-block w-[112%] h-[120%] align-baseline"
              alt="Wumpus from discord flying with a jetpack and wearing an astraunaut helmet"
              src="/nitro/background.webm"
              width={640}
              height={528}
            /> */}
            <video
              width="112%"
              height="120%"
              className="inline-block align-baseline"
              autoPlay
              loop
              muted
            >
              <source
                src="../../../public/nitro/background.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

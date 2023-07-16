"use client";

import dynamic from "next/dynamic";
import BlackDownloadButton from "../components/black_download_btn";
import Image from "next/image";
const Footer = dynamic(() => import("@/app/footer"));
const Navbar = dynamic(() => import("@/app/components/navbar"));
const DownloadButton = dynamic(() => import("@/app/components/download_btn"));

export default function Home() {
  return (
    <main className="overflow-x-hidden font-primary">
      <div className="bg-notQuiteBlack overflow-hidden w-full flex flex-col items-center">
        <Navbar />
        <div className="py-14 md:py-20 px-6 md:px-10 w-full max-w-7xl grid grid-cols-4 md:grid-cols-8 gap-x-5">
          <div className="col-span-4 text-white">
            <div>
              <h1 className="font-headline font-extrabold uppercase leading-[95%] md:text-[56px]">
                Get Discord for any device
              </h1>
              <div
                style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
                className="mt-6 leading-[140%]"
              >
                An adventure awaits. Hang out with your friends on our desktop
                app and keep the conversation going on mobile.
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-normal">
              <DownloadButton
                text={<p>Download for Windows</p>}
                className="shrink-0 inline-flex font-medium mt-6 md:mr-6 w-full md:w-auto justify-center rounded-full text-xl py-4 px-8 cursor-pointer transition-all duration-300 bg-brand hover:shadow-xl hover:bg-indigo-400"
              />
              <div className="text-center md:text-start shrink-0 mt-6 w-full md:w-auto leading-6">
                Windows 7 or higher
              </div>
            </div>
          </div>
          <div className="hidden md:block relative col-span-4">
            <Image
              className="h-full w-auto min-w-max absolute top-0 bottom-0 left-0 right-0 mx-auto"
              src="/download/laptop.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt="three people in a discord video call in a voice chat called just-chillin"
            />
          </div>
        </div>
      </div>

      <div className="py-14 md:py-20 w-full text-notQuiteBlack flex flex-col items-center ">
        <div className="w-full max-w-7xl grid grid-cols-4 md:grid-cols-8 gap-x-5 px-6 md:px-10">
          <div className="col-span-4 md:col-span-8 grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] md:grid-rows-[156px_auto_156px_auto_156px] gap-5">
            <div className="overflow-hidden h-[363px] md:h-[600px] rounded-2xl p-14 col-span-1 row-span-2 bg-offwhite">
              <div className="flex flex-col items-center">
                <h3 className="leading-[120%] font-semibold ">iOS</h3>
                <BlackDownloadButton />
              </div>
              <Image
                className="mt-6 md:mt-16 w-full md:w-auto min-w-max"
                src="/download/ios.svg"
                width={0}
                height={0}
                sizes="100vw"
                alt="a discord call with 6 members in a voice channel called 'drawing-club' in an ios device"
              />
            </div>
            <div className="overflow-hidden h-[363px] md:h-[600px] rounded-2xl p-14 md:col-start-2 col-span-1 md:row-start-2 row-span-2 bg-offwhite">
              <div className="flex flex-col items-center">
                <h3 className="leading-[120%] font-semibold ">Android</h3>
                <BlackDownloadButton />
              </div>
              <Image
                className="mt-6 md:mt-16 w-full md:w-auto min-w-max"
                src="/download/android.svg"
                width={0}
                height={0}
                sizes="100vw"
                alt="text-channel called 'study-group' in an android device"
              />
            </div>
            <div className="overflow-hidden h-[363px] md:h-[600px] rounded-2xl p-14 col-span-1 row-span-2 bg-offwhite">
              <div className="flex flex-col items-center">
                <h3 className="leading-[120%] font-semibold ">Linux</h3>
                <BlackDownloadButton />
              </div>
              <Image
                className="mt-6 md:mt-16 w-full md:w-auto min-w-max"
                src="/download/linux.svg"
                width={0}
                height={0}
                sizes="100vw"
                alt="discord application on a desktop monitor"
              />
            </div>
            <div className="overflow-hidden h-[363px] md:h-[600px] rounded-2xl p-14 col-span-1 row-span-2 bg-offwhite">
              <div className="flex flex-col items-center">
                <h3 className="leading-[120%] font-semibold ">Mac</h3>
                <BlackDownloadButton />
              </div>
              <Image
                className="mt-6 md:mt-16 w-full md:w-auto min-w-max"
                src="/download/mac.svg"
                width={0}
                height={0}
                sizes="100vw"
                alt="discord application on a laptop"
              />
            </div>
            <div className="py-12 px-10 col-span-1 row-span-2 bg-offwhite">
              <h3 className="leading-[120%] font-semibold">
                Feeling experimental?
              </h3>
              <div className="my-4 leading-relaxed">
                Try our Public Test Build and test new features before they
                launch.
              </div>
              <div className="relative">
                <button className="rounded-full text-xl py-4 px-8 bg-notQuiteBlack text-white leading-6 font-medium inline-flex items-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-zinc-700">
                  Download Public Test build
                  <svg
                    className="ml-2 rotate-90"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

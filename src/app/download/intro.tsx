"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import DownloadButton from "../components/DownloadButton";

export default function Intro() {
  return (
    <div className="bg-notQuiteBlack overflow-hidden w-full flex flex-col items-center">
      <Navbar />
      <div className="py-14 md:py-20 lg:py-32 px-6 md:px-10 w-full max-w-7xl grid grid-cols-4 md:grid-cols-8 gap-x-5">
        <div className="col-span-4 text-white">
          <div>
            <h1 className="font-headline font-extrabold uppercase leading-[95%] md:text-[56px]">
              Get Discord for any device
            </h1>
            <div className="mt-6 md:mt-10 md:mb-4 leading-[140%] text-md">
              An adventure awaits. Hang out with your friends on our desktop app
              and keep the conversation going on mobile.
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
  );
}

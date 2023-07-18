"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Intro() {
  return (
    <div className="relative md:min-h-[626px] md:pb-20 lg:pb-0 w-full flex flex-col items-center overflow-hidden bg-background">
      <Navbar />
      <div className="py-14 md:py-20 lg:py-32 px-6 md:px-10 z-10 w-full max-w-7xl grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5">
        <div className="lg:col-start-3 col-span-4 md:col-span-5 lg:col-span-8 lg:text-center z-10">
          <div className="md:mb-2">
            <div className="md:mb-2 text-white">
              <h1 className="md:text-[56px] uppercase font-headline leading-[95%]">
                Imagine a place...
              </h1>
            </div>
            <div className="mt-6 md:mt-10 leading-relaxed text-white text-xl text-md">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </div>
          </div>
          <div className="lg:justify-center items-center flex flex-wrap">
            <a className="bg-white mr-6 mt-6 py-4 px-8 text-xl font-medium rounded-full items-center inline-flex leading-6 cursor-pointer transition-all duration-300 hover:text-brand hover:shadow-2xl">
              <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                <g fill="currentColor">
                  <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                  <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                </g>
              </svg>
              Download for Windows
            </a>
            <button className="text-white bg-zinc-800 mt-6 py-4 px-8 text-xl font-medium rounded-full items-center inline-flex leading-6 cursor-pointer transition-all duration-300 hover:bg-zinc-700 hover:shadow-2xl">
              Open Discord in your browser
            </button>
          </div>
        </div>
      </div>
      <div className="relative md:absolute md:h-full md:w-full md:top-0 md:left-0 z-0">
        <Image
          className="absolute hidden md:block left-1/2 md:top-auto md:bottom-0 md:-ml-[1320px] lg:-ml-[1280px] min-w-max"
          alt="clouds and stars background"
          src="/svgexport-4.svg"
          width={2560}
          height={626}
        />
        <Image
          className="relative block w-full h-auto max-w-[880px] lg:max-w-[689px] -ml-20 lg:absolute lg:bottom-0 lg:left-1/2 lg:-ml-[1030px] md:hidden lg:block"
          alt="characters sitting on shoes"
          src="/svgexport-5.svg"
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          className="absolute hidden md:block bottom-0 left-1/2 md:-ml-[70px] lg:ml-[370px]"
          alt="characters at a bar"
          src="/svgexport-6.svg"
          width={615}
          height={360}
        />
      </div>
    </div>
  );
}

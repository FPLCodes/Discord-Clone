import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Backdrop } from "@mui/material";
const bodyScroll = require("body-scroll-lock");

export default function Intro() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
    bodyScroll.enableBodyScroll(document);
  };

  const handleOpen = () => {
    setOpen(true);
    bodyScroll.disableBodyScroll(document);
  };

  return (
    <main className="relative md:min-h-[626px] md:pb-20 lg:pb-0 w-full flex flex-col items-center overflow-hidden bg-background">
      <div className="z-50 w-full max-w-7xl grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 px-6 md:px-10 gap-x-5">
        <header className="col-span-12 text-white text-sm bg-background hidden lg:flex">
          <nav className="flex items-center justify-between w-full h-20 z-10">
            <Link href="/" className="justify-center cursor-pointer flex-none">
              <Image
                alt="discord logo"
                src="/svgexport-1.svg"
                width={124}
                height={34}
              />
            </Link>
            <div className="flex-auto text-center font-semibold leading-[140%] w-full text-base font-primary">
              <a className="hover:underline cursor-pointer m-3 p-2">Download</a>
              <a className="hover:underline cursor-pointer m-3 p-2">Nitro</a>
              <a className="hover:underline cursor-pointer m-3 p-2">Discover</a>
              <a className="hover:underline cursor-pointer m-3 p-2">Safety</a>
              <a className="hover:underline cursor-pointer m-3 p-2">Support</a>
              <a className="hover:underline cursor-pointer m-3 p-2">Blog</a>
              <a className="hover:underline cursor-pointer m-3 p-2">Careers</a>
            </div>
            <div className="w-32 text-end flex-none">
              <a className="text-notQuiteBlack font-medium bg-white rounded-3xl leading-6 px-4 py-[9px] cursor-pointer transition-all duration-300 hover:shadow-xl hover:text-brand">
                Login
              </a>
            </div>
          </nav>
        </header>
        <header className="col-span-4 md:col-span-8 justify-center text-white text-sm bg-background flex lg:hidden">
          <nav className="flex justify-between items-center w-full h-20 z-50">
            <Link href="/" className="justify-center cursor-pointer flex-none">
              <Image
                alt="discord logo"
                src="/svgexport-1.svg"
                width={124}
                height={34}
              />
            </Link>
            <div className="text-end flex items-center">
              <a className="text-notQuiteBlack font-medium bg-white rounded-3xl mr-4 px-4 py-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:text-brand">
                Login
              </a>
              <Menu>
                <Menu.Button>
                  <Image
                    onClick={() => {
                      handleOpen();
                    }}
                    alt="burger icon"
                    src="/svgexport-2.svg"
                    width={40}
                    height={40}
                  />
                </Menu.Button>
                <Backdrop
                  sx={{
                    color: "#fff",
                  }}
                  open={open}
                  onClick={handleClose}
                >
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform translate-x-96"
                  >
                    <Menu.Items className="absolute top-0 left-0 w-full h-full">
                      <div className="fixed top-0 right-0 bottom-0 w-[330px] h-screen z-50 overflow-hidden bg-white text-notQuiteBlack rounded-tl-lg rounded-bl-lg pt-6 pl-6 pr-12 pb-[120px]">
                        <div className="absolute top-6 right-6 -m-2 p-2 cursor-pointer">
                          <Menu.Item>
                            {({ close }) => (
                              <Image
                                onClick={() => {
                                  handleClose();
                                  close();
                                }}
                                alt="close icon"
                                src="/x.svg"
                                width={24}
                                height={24}
                              />
                            )}
                          </Menu.Item>
                        </div>
                        <div className="absolute left-0 right-0 bottom-0 h-[120px] flex flex-col justify-end">
                          <div className="p-6">
                            <a className="bg-brand py-2 px-4 rounded-full cursor-pointer flex items-center text-white font-medium justify-center transition-all duration-300 hover:shadow-xl hover:bg-indigo-400">
                              <Image
                                className="mr-2"
                                alt="white download icon"
                                src="/svgexport-8.svg"
                                width={24}
                                height={24}
                              />
                              Download for Windows
                            </a>
                          </div>
                        </div>
                        <Link href="/">
                          <Image
                            alt="dark discord logo"
                            src="/discord_dark.svg"
                            width={124}
                            height={34}
                          />
                        </Link>
                        <div className="w-full h-[1px] mt-6 mb-4 bg-zinc-100"></div>
                        <nav className="text-base">
                          <a className="flex items-center py-2 px-4 cursor-pointer hover:underline bg-zinc-100 text-sky-500 rounded-lg">
                            <span>Home</span>
                          </a>
                          <a className="flex items-center py-2 px-4 cursor-pointer hover:underline">
                            <span>Download</span>
                          </a>
                          <a className="flex items-center py-2 px-4 cursor-pointer hover:underline">
                            <span>Nitro</span>
                          </a>
                          <a className="flex items-center py-2 px-4 cursor-pointer hover:underline">
                            <span>Discover</span>
                          </a>
                          <span className="flex items-center py-2 px-4 cursor-pointer hover:underline">
                            <span>Safety</span>
                            <Image
                              className="-rotate-90 ml-1"
                              alt="open icon"
                              src="/dropdown_dark.svg"
                              width={24}
                              height={24}
                            />
                          </span>
                          <span className="flex items-center py-2 px-4 cursor-pointer hover:underline">
                            <span>Mod Academy</span>
                            <Image
                              className="-rotate-90 ml-1"
                              alt="open icon"
                              src="/dropdown_dark.svg"
                              width={24}
                              height={24}
                            />
                          </span>
                          <a className="flex items-center py-2 px-4 cursor-pointer hover:underline">
                            <span>Support</span>
                          </a>
                          <a className="flex items-center py-2 px-4 cursor-pointer hover:underline">
                            <span>Blog</span>
                          </a>
                          <a className="flex items-center py-2 px-4 cursor-pointer hover:underline">
                            <span>Careers</span>
                          </a>
                        </nav>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Backdrop>
              </Menu>
            </div>
          </nav>
        </header>
      </div>
      <div className="py-14 md:py-20 lg:py-32 px-6 md:px-10 z-10 w-full max-w-7xl grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5">
        <div className="lg:col-start-3 col-span-4 md:col-span-5 lg:col-span-8 lg:text-center z-10">
          <div className="md:mb-2">
            <div className="md:mb-2 text-white">
              <h1 className="md:text-[56px] uppercase font-headline leading-[95%]">
                Imagine a place...
              </h1>
            </div>
            <div
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
              className="mt-6 md:mt-10 leading-relaxed text-white text-xl"
            >
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
    </main>
  );
}

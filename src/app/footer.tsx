import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

const languages = [
  { name: "Dansk", img: "/flags/Denmark.png" },
  { name: "Deutsch", img: "/flags/Germany.png" },
  { name: "English, USA", img: "/flags/USA.png" },
  { name: "Español", img: "/flags/Spain.png" },
  { name: "Français", img: "/flags/France.png" },
  { name: "日本語", img: "/flags/Japan.png" },
  { name: "한국어", img: "/flags/Korea.png" },
  { name: "Română", img: "/flags/Romania.png" },
  { name: "Русский", img: "/flags/Russia.png" },
  { name: "Türkçe", img: "/flags/Turkey.png" },
  { name: "中文", img: "/flags/China.png" },
];

export default function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[2]);

  return (
    <main className="pt-20 pb-16 flex flex-col items-center w-full bg-notQuiteBlack">
      <div className="grid md:grid-cols-12 grid-cols-4 gap-x-5 text-white text-[16px] leading-6 max-w-7xl md:px-10 px-6 w-full">
        <div className="md:col-span-3 col-span-4 md:mb-0 mb-14 flex flex-col">
          <div className="flex flex-row my-6 cursor-pointer w-max items-center">
            <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
              <div className="relative">
                <div className="overflow-hidden absolute bottom-full mb-2 rounded-lg shadow-sm bg-white">
                  <Listbox.Options className="overflow-x-hidden overflow-y-auto overscroll-contain text-notQuiteBlack max-h-80 min-w-[150px]">
                    {languages.map((language, idx) => (
                      <Listbox.Option
                        className="p-2 text-sm rounded-md hover:bg-zinc-200"
                        key={idx}
                        value={language}
                      >
                        <div className="flex items-center">
                          <Image
                            className="mr-2"
                            alt="flag"
                            src={language.img}
                            width={24}
                            height={16}
                          />
                          {language.name}
                        </div>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
                <Listbox.Button className="flex text-sm items-center">
                  <Image
                    className="mr-2"
                    alt="flag"
                    src={selectedLanguage.img}
                    width={24}
                    height={16}
                  />
                  {selectedLanguage.name}
                  <div className="self-center pl-2">
                    <Image
                      alt="Dropdown icon"
                      src="/dropdown.svg"
                      width={7}
                      height={5}
                    />
                  </div>
                </Listbox.Button>
              </div>
            </Listbox>
          </div>
          <div className="flex flex-row gap-6 mt-6">
            <a href="https://twitter.com/discord">
              <Image
                className="cursor-pointer"
                alt="twitter logo"
                src="/twitter.svg"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.instagram.com/discord/">
              <Image
                className="cursor-pointer"
                alt="instagram logo"
                src="/instagram.svg"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.facebook.com/discord/">
              <Image
                className="cursor-pointer"
                alt="facebook logo"
                src="/facebook.svg"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.youtube.com/discord/">
              <Image
                className="cursor-pointer"
                alt="youtube logo"
                src="/youtube.svg"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.tiktok.com/@discord">
              <Image
                className="cursor-pointer"
                alt="tiktok logo"
                src="/tiktok.svg"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <div className="spacer md:block hidden"></div>
        <div className="col-span-2 flex flex-col md:mb-0 mb-10">
          <h5 className="mb-5 text-brand">Product</h5>
          <a className="hover:underline cursor-pointer">Download</a>
          <a className="hover:underline cursor-pointer mt-2">Nitro</a>
          <a className="hover:underline cursor-pointer mt-2">Status</a>
        </div>
        <div className="col-span-2 flex flex-col md:mb-0 mb-10">
          <h5 className="mb-5 text-brand">Company</h5>
          <a className="hover:underline cursor-pointer">About</a>
          <a className="hover:underline cursor-pointer mt-2">Jobs</a>
          <a className="hover:underline cursor-pointer mt-2">Brand</a>
          <a className="hover:underline cursor-pointer mt-2">Newsroom</a>
        </div>
        <div className="col-span-2 flex flex-col mb-10">
          <h5 className="mb-5 text-brand">Resources</h5>
          <a className="hover:underline cursor-pointer">College</a>
          <a className="hover:underline cursor-pointer mt-2">Support</a>
          <a className="hover:underline cursor-pointer mt-2">Safety</a>
          <a className="hover:underline cursor-pointer mt-2">Blog</a>
          <a className="hover:underline cursor-pointer mt-2">Feedback</a>
          <a className="hover:underline cursor-pointer mt-2">Build</a>
          <a className="hover:underline cursor-pointer mt-2">StreamKit</a>
          <a className="hover:underline cursor-pointer mt-2">Creators</a>
          <a className="hover:underline cursor-pointer mt-2">Community</a>
          <a className="hover:underline cursor-pointer mt-2">
            Official 3rd Party Merch
          </a>
        </div>
        <div className="col-span-2 flex flex-col mb-10">
          <h5 className="mb-5 text-brand">Policies</h5>
          <a className="hover:underline cursor-pointer">Terms</a>
          <a className="hover:underline cursor-pointer mt-2">Privacy</a>
          <a className="hover:underline cursor-pointer mt-2">Cookie Settings</a>
          <a className="hover:underline cursor-pointer mt-2">Guidelines</a>
          <a className="hover:underline cursor-pointer mt-2">
            Acknowledgements
          </a>
          <a className="hover:underline cursor-pointer mt-2">Licenses</a>
          <a className="hover:underline cursor-pointer mt-2">Moderation</a>
          <a className="hover:underline cursor-pointer mt-2">
            Company Information
          </a>
        </div>
      </div>
      <div className="w-full max-w-7xl md:px-10 px-5">
        <div className="separator mb-8 bg-brand h-[1px]"></div>
        <div className="flex justify-between">
          <Link href="/">
            <Image
              className="cursor-pointer"
              alt="discord logo"
              src="/discord.svg"
              width={124}
              height={34}
            />
          </Link>
          <div>
            <p className="text-white bg-brand text-sm font-medium py-3 px-4 w-fit mx-auto rounded-3xl transition-all cursor-pointer duration-300 hover:bg-indigo-400 hover:shadow-xl">
              Sign up
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

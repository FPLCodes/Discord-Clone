import Image from "next/image";
import { Listbox } from "@headlessui/react";
import { useState } from "react";

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

export default function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[2]);

  return (
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
  );
}

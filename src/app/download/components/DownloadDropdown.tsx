import { Menu } from "@headlessui/react";
import dynamic from "next/dynamic";
const BlackDownloadButton = dynamic(() => import("./BlackDownloadButton"));

export default function DownloadDropdown({
  options,
  text,
}: {
  options: Array<string>;
  text: string;
}) {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button>
          <BlackDownloadButton dropdown text={text} />
        </Menu.Button>
        <Menu.Items className="text-start p-4 w-full top-full mt-2 absolute bg-white overflow-hidden rounded-lg shadow text-notQuiteBlack">
          {options.map((option: string) => (
            <Menu.Item key={option}>
              <ul className="cursor-pointer">
                <div className="py-1 px-2 hover:underline hover:text-brand hover:bg-gray-200 rounded text-md">
                  {option}
                </div>
              </ul>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}

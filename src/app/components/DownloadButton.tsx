import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  text: ReactNode;
  className: string;
}

export default function DownloadButton({ text, className }: Props) {
  return (
    <a className={className}>
      <Image
        className="mr-2"
        alt="white download icon"
        src="/download.svg"
        width={24}
        height={24}
      />
      {text}
    </a>
  );
}

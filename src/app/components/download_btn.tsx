import Image from "next/image";
import { ReactNode } from "react";

export default function DownloadButton({
  text,
  className,
}: {
  text: ReactNode;
  className: string;
}) {
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

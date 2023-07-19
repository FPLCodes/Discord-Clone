import Dropdown from "../../components/Dropdown";

interface Props {
  dropdown?: boolean;
  text?: string;
}

export default function BlackDownloadButton({
  dropdown = false,
  text = "Download",
}: Props) {
  return (
    <div className="mt-4 rounded-full text-xl py-4 px-8 inline-flex items-center bg-notQuiteBlack text-white cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-zinc-700">
      {text}
      {dropdown ? <Dropdown /> : <></>}
    </div>
  );
}

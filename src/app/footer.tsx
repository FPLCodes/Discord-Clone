import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./components/LanguageDropdown";

export default function Footer() {
  return (
    <div className="pt-20 pb-16 flex flex-col items-center w-full bg-notQuiteBlack">
      <div className="grid md:grid-cols-12 grid-cols-4 gap-x-5 text-white text-[16px] leading-6 max-w-7xl md:px-10 px-6 w-full">
        <div className="md:col-span-3 col-span-4 md:mb-0 mb-14 flex flex-col">
          <LanguageDropdown />
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
          <Link href="/download" className="hover:underline cursor-pointer">
            Download
          </Link>
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
    </div>
  );
}

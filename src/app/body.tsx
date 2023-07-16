import Image from "next/image";
import { useEffect } from "react";
import DownloadButton from "./components/DownloadButton";

export default function Body() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const scrollTrigger = (selector: string, options = {}) => {
        // Selecting all elements that match the provided selector
        let els: NodeListOf<Element> = document.querySelectorAll(selector);

        // Iterating over each selected element
        Array.from(els).forEach((el: Element) => {
          // Calling the addObserver function for each element with the provided options
          addObserver(el, options);
        });
      };

      const addObserver = (el: Element, options: any) => {
        // Creating a new IntersectionObserver instance
        let observer = new IntersectionObserver((entries, observer) => {
          // Handling each intersection entry
          entries.forEach((entry) => {
            // Adding a CSS class "active" to the element if it is intersecting with the viewport
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              // Stopping the observation for the current element
              observer.unobserve(entry.target);
            }
          });
        }, options);

        // Starting the observation for the specified element
        observer.observe(el);
      };

      scrollTrigger(".scroll-reveal", {
        rootMargin: "-125px",
      });
    }
  });

  return (
    <main>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5 md:px-10 px-6 py-14 md:py-20 lg:py-32 max-w-7xl w-full transition-all duration-700 scroll-reveal fade-up">
          <Image
            className="col-span-12 md:col-span-4 lg:col-span-7 md:mt-0 mt-5 w-full h-auto"
            alt="Stylized image of a Discord server with multiple channels for studying, games, cooking, and pet photos"
            src="/stylized_img_1.svg"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="lg:col-start-9 md:col-span-4 col-span-12 md:mt-0 mt-5 justify-center flex flex-col text-notQuiteBlack">
            <h2 className="font-extrabold md:text-5xl md:leading-[120%]">
              Create an invite-only place where you belong
            </h2>
            <p
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
              className="mt-6 leading-relaxed"
            >
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex w-full justify-center">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5 md:px-10 px-6 py-14 md:py-20 lg:py-32 max-w-7xl w-full transition-all duration-500 scroll-reveal fade-up">
          <Image
            className="md:order-2 lg:col-start-6 md:col-span-4 lg:col-span-7 col-span-12 md:my-auto mt-5 w-full h-auto"
            alt="Stylized image showing friends hanging out in multiple voice channels"
            src="/stylized_img_2.svg"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="lg:col-start-1 md:col-span-4 col-span-12 md:mt-0 mt-5 justify-center flex flex-col text-notQuiteBlack">
            <h2 className="font-extrabold md:text-5xl md:leading-[120%]">
              Where hanging out is easy
            </h2>
            <p
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
              className="mt-6 font-light leading-relaxed"
            >
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5 md:px-10 px-6 py-14 md:py-20 lg:py-32 max-w-7xl w-full transition-all duration-700 scroll-reveal fade-up">
          <Image
            className="col-span-12 md:col-span-4 lg:col-span-7 md:mt-0 mt-5 w-full h-auto"
            alt="Stylized image showing friends in a server organized into roles for Coach, Student Lead, and Animal Crossing"
            src="/stylized_img_3.svg"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="lg:col-start-9 md:col-span-4 col-span-12 md:mt-0 mt-5 justify-center flex flex-col text-notQuiteBlack">
            <h2 className="font-extrabold md:text-5xl md:leading-[120%]">
              From few to a fandom
            </h2>
            <p
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
              className="pt-6 font-light leading-relaxed"
            >
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex w-full justify-center">
        <div className="grid grid-cols-4 md:grid-cols-12 md:px-10 px-6 py-14 md:py-20 lg:pt-32 md:pb-20 max-w-7xl w-full transition-all duration-700 scroll-reveal fade-up">
          <div className="md:col-start-2 col-span-4 md:col-span-10 md:text-center justify-center flex flex-col text-notQuiteBlack">
            <h2 className="font-extrabold font-headline">
              RELIABLE TECH FOR STAYING CLOSE
            </h2>
            <p
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
              className="pt-6 text-medium font-light"
            >
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <Image
            className="mt-4 col-span-12 w-full h-auto"
            alt="Stylized image showing friends video talking with each other on desktop and mobile"
            src="/stylized_img_4.svg"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
      <div className="bg-gray-100 flex flex-col w-full justify-center items-center">
        <div className="flex flex-col flex-wrap relative mb-14 md:mb-20 lg:mb-32 md:px-10 px-5 justify-center max-w-7xl w-full">
          <div className="absolute top-0 self-center w-max overflow-hidden flex justify-center">
            <Image
              alt="four stars"
              src="/svgexport-7.svg"
              width={531}
              height={49}
            />
          </div>
          <h4 className="text-[32px] font-bold leading-tight z-10 mt-[30px] text-center">
            Ready to start your journey?
          </h4>
          <DownloadButton
            text={
              <p className="text-white text-xl font-medium">
                Download for Windows
              </p>
            }
            className="bg-brand inline-flex py-4 px-8 mt-10 rounded-full cursor-pointer self-center justify-center w-full md:w-max transition-all duration-300 hover:shadow-xl hover:bg-indigo-400"
          />
        </div>
      </div>
    </main>
  );
}

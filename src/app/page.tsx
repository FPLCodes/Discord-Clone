import dynamic from "next/dynamic";
const Intro = dynamic(() => import("./intro"));
const Body = dynamic(() => import("./body"));
const Footer = dynamic(() => import("./footer"));

export default function Home() {
  return (
    <main className="overflow-x-hidden font-primary">
      <Intro />

      <Body />

      <Footer />
    </main>
  );
}

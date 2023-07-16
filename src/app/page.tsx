"use client";

import dynamic from "next/dynamic";
const Intro = dynamic(() => import("@/app/intro"));
const Body = dynamic(() => import("@/app/body"));
const Footer = dynamic(() => import("@/app/footer"));

export default function Home() {
  return (
    <main className="overflow-x-hidden font-primary">
      <Intro />

      <Body />

      <Footer />
    </main>
  );
}

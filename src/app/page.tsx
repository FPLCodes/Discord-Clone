"use client";

import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/app/footer"));
const Body = dynamic(() => import("@/app/body"));
const Intro = dynamic(() => import("@/app/intro"));

export default function Home() {
  return (
    <main className="overflow-x-hidden font-primary">
      <Intro />

      <Body />

      <Footer />
    </main>
  );
}

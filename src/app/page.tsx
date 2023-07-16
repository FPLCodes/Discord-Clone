"use client";

import dynamic from "next/dynamic";
const Body = dynamic(() => import("@/app/body"));
const Intro = dynamic(() => import("@/app/intro"));

export default function Home() {
  return (
    <main className="overflow-x-hidden font-primary">
      <Intro />

      <Body />
    </main>
  );
}

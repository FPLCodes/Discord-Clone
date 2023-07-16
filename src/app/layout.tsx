"use client";

import "./globals.css";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/app/footer"));

export const metadata = {
  title: "Discord | Your Place to Talk and Hang Out",
  description: "Discord landing page created with Next.js 13 and TailwindCSS",
};

const ginto = localFont({
  src: "../../public/fonts/ABC Ginto Nord Black.ttf",
  variable: "--font-ginto",
});

const ggSans = localFont({
  src: [
    {
      path: "../../public/fonts/gg sans Normal.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/gg sans Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/gg sans SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/gg sans Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/gg sans ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-ggSans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ginto.variable} ${ggSans.variable} font-sans`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

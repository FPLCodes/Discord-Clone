import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Discord | Your Place to Talk and Hang Out",
  description: "Discord landing page created with Next.js 13 and TailwindCSS",
};

const ginto = localFont({
  src: "../../public/fonts/ABC Ginto Nord Black.ttf",
  variable: "--font-ginto",
});

const gintoBold = localFont({
  src: "../../public/fonts/Ginto Bold.ttf",
  variable: "--font-gintoBold",
});

const gintoNordBold = localFont({
  src: "../../public/fonts/Ginto Nord Bold.ttf",
  variable: "--font-gintoNordBold",
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
      className={`${ginto.variable} ${gintoBold.variable} ${ggSans.variable} ${gintoNordBold.variable} font-sans`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}

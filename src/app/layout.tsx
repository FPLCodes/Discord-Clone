import "./globals.css";

export const metadata = {
  title: "Discord | Your Place to Talk and Hang Out",
  description: "Discord landing page created with Next.js 13 and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}

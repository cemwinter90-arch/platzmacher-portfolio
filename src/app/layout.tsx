import type { Metadata } from "next";
import { Hanken_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://platzmacher.eu"),
  title: "Platzmacher | Entrümpelung und Haushaltsauflösung",
  description:
    "Zuverlässige, diskrete und planbare Entrümpelungen, Haushaltsauflösungen und Räumungen.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/brand/platzmacher-favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/brand/platzmacher-favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/brand/platzmacher-favicon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${hankenGrotesk.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

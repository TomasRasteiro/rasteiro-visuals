import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Cursor from "@/sections/Cursor";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export const metadata = {
  title: "Rasteiro Visuals",
  description: "Photography, Video Editing and Graphic Design",
  icons: {
    icon: "/logoTopoSite.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body
        className={`${inter.variable} ${playfair.variable}`}
      >

        <Cursor />

        {children}

      </body>

    </html>
  );
}
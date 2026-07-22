import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Cursor from "@/sections/Cursor";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Tomás Rasteiro",
  description: "Photography, Video Editing and Graphic Design",
  icons: {
    icon: "/logoTopoSite.png",
  },
  verification: {
    google: "yXe3_Hkv9yzQ6AWIOc0LR34SSDTYeT2msqUTRHsW-HQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Cursor />

        {children}

        <SpeedInsights />
        <GoogleAnalytics gaId="G-N7H3F3JYXW" />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TopMenu from "@/components/TopMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "A simple venue explorer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Mulish } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import NavbarController from "@/Custom Components/Navbar/page";
import { CSPostHogProvider } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paws and Claws",
  description: "Happy pets, happy hearts!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body
          className={`${mulish.variable} antialiased`}
        >
          <NavbarController />
          {children}
          <Analytics />
        </body>
      </CSPostHogProvider>
    </html>
  );
}

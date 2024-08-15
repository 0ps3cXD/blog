import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cn from "@/lib/cn";
import BackToTop from "@/components/BackToTop";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeHappyCoaching",
  description: "BeHappyCoaching | Beruflich und privat erfolgreich",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Links = [
    { href: "/", text: "Home" },
    { href: "/books", text: "Bücher" },
    { href: "/coachings", text: "Coachings" },
    { href: "/contact", text: "Kontakt" },
  ];
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <body className={cn("h-fit flex flex-col", inter.className)}>
        <Navbar links={Links}/>
        {children}
        <BackToTop/>
        <Footer/>
      </body>
    </html>
  );
}

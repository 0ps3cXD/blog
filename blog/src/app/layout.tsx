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
  description: "Trauma überwinden, glücklich und erfolgreich leben - Caroline Bono",
  openGraph: {
    title: "BeHappyCoaching",
    url: "https://behappycoaching.ch/",
    description: "Trauma überwinden, glücklich und erfolgreich leben - Caroline Bono",
  },
  twitter: {
    title: "BeHappyCoaching",
    description: "Trauma überwinden, glücklich und erfolgreich leben - Caroline Bono",
  }
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
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className={cn("h-fit flex flex-col", inter.className)}>
      <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1051403233002980');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1051403233002980&ev=PageView&noscript=1"
              alt="Facebook Pixel"
            />
          </noscript>
        <Navbar links={Links}/>
        {children}
        <BackToTop/>
        <Footer/>
      </body>
    </html>
  );
}

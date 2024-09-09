"use client";
import cn from "@/lib/cn";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={cn("fixed right-2 md:right-4 p-2 z-50 rounded-full bg-primary hover:bg-primary-accent text-secondary transition-all duration-500", show ? "opacity-100 bottom-2 md:bottom-4" : "bottom-[2rem] md:bottom-[-3rem] opacity-0")}
      /*style={{
        transform: show ? "translateY(0)" : "translateY(20px)",
      }}*/
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
}
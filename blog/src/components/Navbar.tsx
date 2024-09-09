"use client";
import cn from "@/lib/cn";
import Link from "next/link";
import { useState } from "react";
import { Bebas_Neue, Poppins } from "next/font/google";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"]});

interface Props {
    links: Array<{ href: string, text: string }>
}

export default function Navbar(props: Props) {
    const [show, setShow] = useState(false);
    return (
        <nav role="navigation" className="w-screen absolute top-0 left-0 flex justify-end md:justify-center items-center bg-transparent text-primary z-50 h-[50px] font-thin text-2xl" style={{ fontFamily: bebas.style.fontFamily}}>
            {/*<div className="flex justify-center items-center ml-6">
                <Link href={"/"}>
                    <img loading="lazy" src="/logo.png" alt="Logo" className="h-[50px] p-1"/>
                </Link>
            </div>*/}
            <div className="hidden md:flex justify-center items-center mr-4 gap-4">
                {props.links.map((link) => {
                    return (
                        <Link href={link.href} key={link.href} className="transition-colors hover:text-primary-accent duration-300">{link.text}</Link>
                    )
                })}
            </div>
            <div className="flex md:hidden justify-center items-center mr-6">
                <button onClick={() => {setShow(!show)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div className={cn("fixed top-0 w-screen h-screen bg-white flex-col justify-between items-center transition-all text-primary duration-300", show ? "right-0" : "right-[-220%] xl:right-[-120%]")}>
                <div className="w-[95%] h-auto flex flex-col justify-start items-start p-7">
                    <button onClick={() => {setShow(!show)}} className="absolute top-[14px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    <Link href={"/"} className="mb-2 mt-7 transition-colors hover:text-primary-accent">Home</Link>
                    <Link href={"/books"} className="my-2 transition-colors hover:text-primary-accent">Bücher</Link>
                    <Link href={"/coachings"} className="my-2 transition-colors hover:text-primary-accent">Psychologische Beratung</Link>
                    <Link href={"/contact"} className="my-2 transition-colors hover:text-primary-accent">Kontakt</Link>
                    <div className="w-full flex justify-center items-center gap-5 mt-5 transition-all">
                        <Link href={"https://www.instagram.com/behappycoaching/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-primary hover:text-primary-accent size-8 transition-all">
                                <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </Link>
                        <Link href={"https://www.facebook.com/BeHappyCoaching-143933582391146/?fref=ts"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-primary hover:text-primary-accent size-8 transition-all">
                                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
                            </svg>
                        </Link>
                        <Link href={"https://ch.linkedin.com/in/dr-iur-caroline-bono-12074966"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-primary hover:text-primary-accent size-8 transition-all">
                                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
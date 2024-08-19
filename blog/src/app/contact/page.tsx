"use client"
import CalendlyWidget from "@/components/CalendlyWidget"
import { Dancing_Script } from "next/font/google";
const b_dancing_script = Dancing_Script({ weight: "700", subsets: ["latin"]});


export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-5 pt-[50px] pb-6">
            <h1 className="text-3xl md:text-5xl text-center text-pretty" style={{ fontFamily: b_dancing_script.style.fontFamily }}>Jetzt kostenloses Kennenlerngespräch vereinbaren!</h1>
            <CalendlyWidget/>
        </main>
    )
}
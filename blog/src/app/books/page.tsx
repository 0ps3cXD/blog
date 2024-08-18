import Link from "next/link";
import { Bebas_Neue, Dancing_Script, Poppins, Playfair_Display } from "next/font/google";
import { InfiniteMovingCards } from "@/components/InfiniteCards";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"]});
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const b_poppins = Poppins({ weight: "500", subsets: ["latin"] });
const playfair_display = Playfair_Display({ weight: "400", subsets: ["latin"]});

export default function Books() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-5 md:gap-12 xl:gap-36 px-12 pb-6 md:px-24 pt-[60px]">
            <section className="w-screen flex flex-col items-center justify-center">
                <div className=""></div>
            </section>
        </main>
    )
}
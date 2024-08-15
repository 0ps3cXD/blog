import Link from "next/link";
import { Bebas_Neue, Dancing_Script, Poppins, Playfair_Display } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"]});
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const b_poppins = Poppins({ weight: "500", subsets: ["latin"] });
const playfair_display = Playfair_Display({ weight: "400", subsets: ["latin"]});


export default function Books() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-5 md:gap-12 xl:gap-36 px-12 pb-6 md:px-24 pt-[60px]">
            <section className="w-screen flex items-center justify-center gap-8 md:gap-12" aria-label="hero">
                <img loading="lazy" src="/hero_2.png" alt="Hero" className="w-[96%] h-fit block rounded-[450px] transition-all hover:rounded-xl duration-500" />
            </section>
            <section className="w-[95%] overflow-hidden flex flex-col md:flex-row justify-evenly items-center p-5 xl:px-5 gap-2 lg:gap-5 translate-y-[-50px] md:translate-y-[-100px] xl:translate-y-[-300px]" aria-label="bücher">
                <div className="w-fit flex flex-col items-center justify-center gap-5 bg-secondary rounded-xl p-5 xl:p-10">
                    <img src="/book-cover-mockups_2.png" alt="Allein gegen Goliath Bild" className="w-[60%] rounded-xl"/>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <h1 className="text-primary text-3xl" style={{ fontFamily: b_poppins.style.fontFamily}}>Allein gegen Goliath</h1>
                        <Link className="w-fit text-secondary bg-primary text-center rounded-xl py-1 px-2 hover:bg-primary-accent transition-colors duration-400 text-xl" target="_" href={"https://www.amazon.de/Allein-gegen-Goliath-rundumversichertes-Albtraum/dp/3037630132/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2OZ3772XM7FPA&dib=eyJ2IjoiMSJ9.X4nvjpL41MOOatO4Jui0ZcUGdZY6tiLvPOavWjgogMTW38duvGSFt-89SXqI9ytTXj7mDqyMisoq4gt1fvsSkcH_GAf1aiTk-oMnanq0rkk9N9iBlzkgDSlYrQbQXh11ACqj5pGSPFHd-OyCqDy5aS_fEWgDTI1LntyNXDT-3eaXkacm2Nw1elIZtTJLB9jhkQ0Qg5jmsZQ_kJxLCcVqz9cyVrXf8AGEMpyGevZaLIo.vVkx7YWNt4zhqdSGuyIzX-rtOW8Crcq-RuHgOb7mokw&dib_tag=se&keywords=caroline+bono&qid=1723737420&sprefix=caroline+bono%2Caps%2C101&sr=8-2"}>Jetzt kaufen!</Link>
                    </div>
                </div>
                <div className="w-fit h-full flex flex-col items-center justify-center gap-5 bg-secondary rounded-xl p-5 xl:p-10">
                    <img src="/book-cover-mockups_1.png" alt="Goliath gegen Alle Bild" className="w-[60%] rounded-xl"/>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <h1 className="text-primary text-3xl" style={{ fontFamily: b_poppins.style.fontFamily}}>Goliath gegen Alle</h1>
                        <Link style={{ fontFamily: poppins.style.fontFamily}} className="w-fit text-secondary bg-primary text-center rounded-xl py-1 px-2 hover:bg-primary-accent transition-colors duration-400 text-xl" target="_" href={"https://www.amazon.de/Goliath-gegen-alle-H%C3%B6lle-Himmel/dp/3991303507/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.X4nvjpL41MOOatO4Jui0ZcUGdZY6tiLvPOavWjgogMTW38duvGSFt-89SXqI9ytTXj7mDqyMisoq4gt1fvsSkcH_GAf1aiTk-oMnanq0rkk9N9iBlzkgDSlYrQbQXh11ACqj5pGSPFHd-OyCqDy5aS_fEWgDTI1LntyNXDT-3eaXkacm2Nw1elIZtTJLB9jhkQ0Qg5jmsZQ_kJxLCcVqz9cyVrXf8AGEMpyGevZaLIo.vVkx7YWNt4zhqdSGuyIzX-rtOW8Crcq-RuHgOb7mokw&qid=1723737420&sr=8-1"}>Jetzt kaufen!</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
import Link from "next/link";
import { Bebas_Neue, Dancing_Script, Poppins, Playfair_Display } from "next/font/google";
import { InfiniteMovingCards } from "@/components/InfiniteCards";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"]});
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const b_poppins = Poppins({ weight: "500", subsets: ["latin"] });
const playfair_display = Playfair_Display({ weight: "400", subsets: ["latin"]});

const testimonials = [
    {
      quote:
        "Caroline Bono-Hörler schildert spannend, sachlich und unterhaltsam ihre Geschichte nach einem schweren Auffahrunfall. Die Art der Verletzungen, die Schmerzen, die Folgen für Ihre Familie und den dramatischen Kampf um Gerechtigkeit. Die Geschichte hat kein Happyend. Gerechtigkeit bleibt ihr versagt - bis in die letzte Instanz. Ich habe dieses Buch nur so verschlungen. Ernüchternd ist: Dies ist kein Krimi. Es ist ein Bericht. Mehr noch: Es scheint System und Infrastruktur dahinter zu stehen. Sollte der Bericht stimmen, dann haben Versicherungen, Gutachter und Gerichte ein Glaubwürdigkeitsproblem.",
      name: "Helge Rafael",
      title: "Ein packender Bericht",
    },
    {
        quote: 
            "Das Buch spricht mir, ebenfalls als Opfer eines Verkehrsunfalls, aus der Seele. Frau Dr. Bono schreibt Ihre Empfindungen so einfühlsam und ohne Make-up, dass ich das Buch in einem Zug gelesen habe.",
        name: "Claudia Luft-Steinma",
        title: "Erschütternd ehrlich"
    },
    {
        quote: 
            "Und das in der Schweiz! Da weigert sich die bekannte Schweizer Versicherung für die Folgekosten eines Unfalles zu zahlen. Da ignorieren Schweizer Gerichte zahlreiche Befunden der Ärzte. Da wird versucht die schweren Unfallverletzungen zu verharmlosen (Schleudertrauma) bzw. auf die \"Psychoschiene\" zu bringen. Und noch einiges mehr läuft da schief in Alpenlande (in Österreich ist es wohl kaum besser). Meine Empfehlung: Das Buch lesen und gleich mal eine Rechtsschutzversicherung abschließen. Man kann wirklich nicht wissen, ob ab morgen schon das Leben unfallbedingt zur Hölle wird. Und letztlich die Versicherung dabei nur ein (!) Interesse haben: Ihren Gewinn maximieren und damit ihre Aktionäre befriedigen...",
        name: "Rudolf",
        title: "Unglaublich!",
    }
  ];

export default function Books() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-5 md:gap-12 xl:gap-36 px-12 pb-6 md:px-24 pt-[60px]">
            <section className="w-screen flex items-center justify-center gap-8 md:gap-12" aria-label="hero">
                <img loading="lazy" src="/hero_2.png" alt="Hero" className="w-[96%] h-full block rounded-[450px] transition-all hover:rounded-xl duration-500" />
            </section>
            <div className="w-screen translate-y-[-50px] md:translate-y-[-100px] xl:translate-y-[-300px]">
                <section className="w-[95%] overflow-hidden flex flex-col md:flex-row justify-evenly items-center p-5 xl:px-5 gap-2 lg:gap-5" aria-label="bücher">
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
                <section className="w-screen">
                    <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                        <InfiniteMovingCards
                            className="bg-white"
                            items={testimonials}
                            direction="right"
                            speed="slow"
                            />
                    </div>
                </section>
            </div>
        </main>
    )
}
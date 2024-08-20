import CalendlyWidget from "@/components/CalendlyWidget";
import { Dancing_Script, Poppins } from "next/font/google";
import Link from "next/link";
const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"]});
const b_dancing_script = Dancing_Script({ weight: "700", subsets: ["latin"]});
const poppins = Poppins({ weight: "400", subsets: ["latin"] });


export default function Coachings() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-5 md:gap-12 xl:gap-36 pt-[50px] pb-6">
            <img loading="lazy" src="/hero5.png" alt="BeHappyCoaching Hero 5" className="w-screen"/>
            <section className="w-screen flex flex-col gap-[50px] justify-center items-center transition-all">
                <div className="w-full flex flex-col justify-center items-center gap-5">
                    <div className="w-[90%] flex justify-end">
                        <h2 className="text-primary text-5xl md:text-7xl" style={{ fontFamily: b_dancing_script.style.fontFamily }}>Glaubst du an Wunder?</h2>
                    </div>
                    <h1 style={{ fontFamily: b_dancing_script.style.fontFamily}} className="font-sans text-7xl md:text-8xl font-bold ml-8">&quot;Jeder will glücklich und erfolgreich sein.&quot;</h1>
                </div>
                <div className="w-[95%] flex flex-col md:flex-row justify-evenly items-center gap-[50px]">
                    <div className="md:w-[40%] w-full overflow-hidden px-4 py-10 flex justify-center items-center flex-col bg-transparent rounded-2xl gap-3 xl:gap-7">
                        <img className="max-w-[70%] rounded-full transition-all" loading="lazy" src="/caroline_bono_hoerler_portrait.png" alt="Caroline Bono Hoerler Portrait"/>
                        <h1 className="text-xl md:text-3xl xl:text-4xl text-primary flex justify-center items-center gap-3 max-w-[300px] text-center" style={{ fontFamily: poppins.style.fontFamily}}>
                            Das BeHappy&copy; Erfolgsrezept
                        </h1>
                    </div>
                    <div className="md:w-[60%] w-full px-4 py-10 flex justify-center items-center flex-col bg-sand rounded-xl gap-3 xl:gap-7 z-10">
                        <h1 className="text-4xl text-primary text-center text-pretty" style={{ fontFamily: b_dancing_script.style.fontFamily }}>Warum ich dir helfen kann - mein Background:</h1>
                        <ul className="list-disc px-2" style={{ fontFamily: poppins.style.fontFamily }}>
                            <li>Master of Law Universität Zürich</li>
                            <li>PhD of Law Universität Zürich</li>
                            <li>Dipl. Wirtschafts- und Familienmediatorin</li>
                            <li>Rechtsanwältin</li>
                            <li>Omega Health Coach (Dr. Roy Martina)</li>
                            <li>NLP, Hypnose, Emotional Balance Technique</li>
                            <li>Cristallin Healing</li>
                            <li>Master Angel Life Coach®</li>
                            <li>Monroe Institute (Dolphin Energy Club)</li>
                            <li>Joy-Mapping (Melissa Joy Jonsson)</li>
                            <li>Matrix Energetics® (Dr. Richard Bartlett)</li>
                            <li>Transaktionsanalyse / Psychoanalyse</li>
                            <li>Holographic Imaging</li>
                            <li>Pranic Healing</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="w-screen flex justify-center items-center transition-all">
                <div className="w-full px-4 py-10 flex justify-center items-center flex-col bg-secondary gap-3 xl:gap-7">
                    <h1 className="text-xl text-center text-pretty md:text-5xl xl:text-7xl text-primary font-semibold" style={{ fontFamily: dancing_script.style.fontFamily}}>Ich helfe bei:</h1>
                    <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily }}>Du kommst mit &nbsp;<span className="text-3xl" style={{ fontFamily: dancing_script.style.fontFamily }}>einem Problem</span>, respektive mit einem nicht erfülltem <span className="text-3xl" style={{ fontFamily: dancing_script.style.fontFamily }}>Wunsch</span> ins Coaching, sei dies im Bereich &nbsp;<span className="text-3xl" style={{ fontFamily: dancing_script.style.fontFamily }}>Arbeitsplatz</span>,&nbsp; <span className="text-3xl" style={{ fontFamily: dancing_script.style.fontFamily }}>Liebesbeziehung</span>, &nbsp;<span className="text-3xl" style={{ fontFamily: dancing_script.style.fontFamily }}>Trauma</span>, &nbsp;<span className="text-3xl" style={{ fontFamily: dancing_script.style.fontFamily }}>Unfall</span>.</p>
                    <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily }}>Wir suchen im Gespräch nach dem roten Faden, der sich durch dein Leben zieht, entdecken die Gesamtzusammenhänge des Problems und Verarbeiten die Ursachen, welche oft im Unbewussten Bereich liegen mit der für dieses Problem geeigneten Methode.</p>
                </div>
            </section>
            <section className="w-screen flex flex-col lg:flex-row justify-center items-center transition-all">
                <div className="w-[95%] flex flex-col lg:flex-row justify-center items-center gap-[50px]">
                    <div className="w-full px-4 py-10 flex justify-center items-center flex-col bg-secondary rounded-xl gap-3 xl:gap-7">
                        <h2 className="text-xl md:text-3xl text-primary-accent" style={{ fontFamily: dancing_script.style.fontFamily}}>Dein Investment in dich selbst</h2>
                        <h1 className="text-xl text-center text-pretty md:text-4xl text-primary" style={{ fontFamily: poppins.style.fontFamily}}>Unsere Coaching-Angebote</h1>
                        <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Jede unserer Coaching Sessions fängt mit einer Stunde an, kann aber je nach Ziel erweitert werden. Diese Investition in dich hilft dir, die Veränderungen in deinem Leben herbeizuführen, die du dir schon immer gewünscht hast. Egal, ob du berufliche oder private Ziele erreichen, emotionale oder körperliche Blockaden lösen, oder einfach mehr Zufriedenheit im Alltag finden möchtest - Ich bin hier, um dich auf deinem Weg zu unterstützen. Buche jetzt deine Sitzung und starte noch heute auf deinem Weg zu einem erfüllten Leben.</p>
                        <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Buche jetzt deine Sitzung und starte noch heute auf deinem Weg zu einem erfüllten Leben.</p>
                    </div>
                    <div className="w-full flex flex-col gap-5">
                        <img loading="lazy" src="/side-view-young-girl-talking-therapist.png" className="w-full rounded-full" alt="Side View young girl talking theraphist" />
                        <h3 className="text-center text-4xl" style={{ fontFamily: dancing_script.style.fontFamily }}>One on One<br/>Online oder in persona am Zürichsee</h3>
                    </div>
                </div>
            </section>
            <section className="w-screen h-fit flex justify-center items-center flex-col gap-5">
              <h1 className="text-5xl" style={{ fontFamily: b_dancing_script.style.fontFamily }}>Schritte unserer Zusammenarbeit im Coaching</h1>
              <img loading="lazy" src="/schritte_der_zusammenarbeit_behappy_coaching.png" alt="Schritte der Zusammenarbeit" className="w-screen"/>
              <Link className="text-xl bg-primary text-sand hover:bg-secondary hover:text-primary transition-all duration-300 px-3 py-2 rounded-xl" style={{ fontFamily: poppins.style.fontFamily}} href={"/contact"}>Hier klicken um kostenlosen Kennenlerntermin zu buchen</Link>
            </section>
            <section className="w-screen h-fit justify-center items-center">
              <img loading="lazy" src="/resultate_behappy_coaching.png" alt="Resultate" className="w-screen"/>
            </section>
            <CalendlyWidget/>
        </main>
    )
}
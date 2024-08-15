import Head from "next/head";
import { Bebas_Neue, Dancing_Script, Poppins } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"]});
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const listItems: Array<string> = [
  "Gesundheit und Selbstheilung",
  "Zufriedenheit und innere Balance",
  "Konfliktlösung und Bearbeitung von Lebensthemen",
  "Projekt- und Karriere Durchbrüche",
  "Zufriedenheit am Arbeitsplatz",
  "Transformation von Beziehungsproblemen",
  "Finden des Lebenspartners/der Lebenspartnerin",
  "Linderung von emotionalen und körperlichen Schmerzen",
];


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-12 pb-6 md:px-24">
      <Head>
        <title>BeHappyCoaching</title>
      </Head>
      <section className="w-screen h-full flex flex-col items-start justify-start  gap-8 md:gap-12" aria-label="banner">
        <img loading="lazy" src="https://lauraseiler.com/wp-content/uploads/2023/12/Background_Header.jpg" alt="Banner" className="w-screen h-screen bg-slate-400" />
      </section>
      <section className="w-screen flex justify-center items-center transition-all"  aria-label="welcome">
        <div className="w-[95%] px-4 py-10 flex justify-center items-center flex-col bg-secondary rounded-xl gap-3" style={{ transform: "translateY(-140px)"}}>
          <h2 className="text-xl md:text-3xl text-primary-accent" style={{ fontFamily: dancing_script.style.fontFamily}}>Dein Weg zu einem erfüllten Leben</h2>
          <h1 className="text-xl text-center text-pretty md:text-4xl text-primary" style={{ fontFamily: poppins.style.fontFamily}}>Willkommen bei BeHappy Coaching</h1>
          <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Wie wäre es, wenn du ohne großen Aufwand phänomenale Veränderungen in deinem Leben erreichen könntest, die bisher unerreichbar schienen? Bei BeHappyCoaching bieten wir dir genau diese Möglichkeit. Stell dir vor, du könntest beruflich und privat erfolgreich und erfüllt sein, unabhängig von den äußeren Umständen. Mit den richtigen Tools und Methoden kannst du dein Leben mit Anmut und Freude dorthin lenken, wo du es haben möchtest.</p>
          <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>In unseren Coachings lernst du, wie du mit allen Lebenssituationen – selbst schweren Schicksalsschlägen – umgehen kannst und stets in deiner Mitte findest. Entdecke und verwirkliche dein volles Potenzial, aktiviere deine Selbstheilungskräfte und erfahre das Optimum an möglicher Heilung. Dein Weg zu einem glücklichen, erfüllten Leben beginnt hier.</p>
        </div>
      </section>
      <section className="w-screen flex justify-center items-center transition-all">
        <div className="w-[95%] px-4 py-10 flex justify-center items-center flex-col rounded-xl gap-3">
          <h2 className="text-xl md:text-3xl text-primary-accent" style={{ fontFamily: dancing_script.style.fontFamily}}>Dein Investment in dich selbst</h2>
          <h1 className="text-xl text-center text-pretty md:text-4xl text-primary" style={{ fontFamily: poppins.style.fontFamily}}>Unsere Coaching-Angebote</h1>
          <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Jede unserer Coaching Sessions fängt mit 45 Minuten an, kann aber je nach Ziel erweitert werden. Diese Investition in dich selbst kann dir helfen, die Veränderungen in deinem Leben herbeizuführen, die du dir schon immer gewünscht hast. Egal, ob du berufliche oder private Ziele erreichen, emotionale oder körperliche Blockaden lösen oder einfach mehr Zufriedenheit im Alltag finden möchtest – wir sind hier, um dich auf deinem Weg zu unterstützen.</p>
          <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Buche jetzt deine Sitzung und starte noch heute auf deinem Weg zu einem erfüllten Leben.</p>
        </div>
      </section>
      <section className="w-screen flex justify-center items-center transition-all">
        <div className="w-[95%] px-4 py-10 flex justify-center items-center flex-col rounded-xl gap-3">
          <h1 className="text-xl text-center text-pretty md:text-4xl text-primary" style={{ fontFamily: poppins.style.fontFamily}}>Themen, die wir behandeln</h1>
          <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Bei BeHappy Coaching decken wir eine breite Palette an Themen ab, um dir umfassend zur Seite zu stehen:</p>
          <ul className="md:text-lg max-w-[90%] md:max-w-[60%] text-center  text-pretty list-none list-inside" style={{ fontFamily: poppins.style.fontFamily}}>
            {listItems.map((item: string) => {
              return <li key={item} className="text-primary-accent flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
                {item}
                </li>
            })}
          </ul>
          <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Solange dein Unterbewusstsein, deine Ahnenlinie oder du selbst bestimmte Themen blockieren, kann es schwierig sein, deine Wünsche zu erfüllen. Wir helfen dir dabei, diese Blockaden zu lösen und dein volles Potenzial zu entfalten.</p>
        </div>
      </section>
      <section className="w-screen flex justify-center items-center transition-all">
        <div className="w-[95%] px-4 py-10 flex justify-center items-center flex-col gap-3">
          
        </div>
      </section>
    </main>
  );
}

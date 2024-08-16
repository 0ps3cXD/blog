import Head from "next/head";
import { Bebas_Neue, Dancing_Script, Poppins, Playfair_Display } from "next/font/google";
import { InfiniteMovingCards } from "@/components/InfiniteCards";
import Link from "next/link";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import localFont from '@next/font/local'

const theseasons = localFont({
  src: [
    {
      path: '../../public/fonts/Fontspring-DEMO-theseasons-it.otf',
      weight: '400'
    },
  ],
  variable: '--font-theseasons'
})


const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"]});
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const b_poppins = Poppins({ weight: "500", subsets: ["latin"] });
const playfair_display = Playfair_Display({ weight: "400", subsets: ["latin"]});
const b_dancing_script = Dancing_Script({ weight: "700", subsets: ["latin"]});

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



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-5 md:gap-12 xl:gap-36 px-12 pb-6 md:px-24">
      <Head>
        <title>BeHappyCoaching</title>
      </Head>
      <section className="w-screen flex items-center justify-center gap-8 md:gap-12" aria-label="hero">
        <img loading="lazy" src="/hero.png" alt="Hero" className="w-[96%] h-full block rounded-xl" />
      </section>
      <div className="flex flex-col translate-y-[-50px] md:translate-y-[-100px] xl:translate-y-[-250px] gap-5 md:gap-7 xl:gap-[100px]">
        <section className="w-screen flex justify-center items-center transition-all" aria-label="welcome">
          <div className="w-[85%] md:w-[65%] px-4 py-10 flex justify-center items-center flex-col bg-secondary box-wrapper rounded-xl gap-3 xl:gap-7" style={{}}>
            <h2 className="text-xl md:text-3xl xl:text-4xl text-primary-accent text-center" style={{ fontFamily: dancing_script.style.fontFamily}}>Dein Weg zu einem erfüllten Leben</h2>
            <h1 className="text-xl text-center text-pretty md:text-4xl xl:text-5xl text-primary" style={{ fontFamily: b_poppins.style.fontFamily, fontWeight: 900 }}>Willkommen bei BeHappyCoaching&copy;</h1>
            <p className="md:text-lg xl:text-2xl max-w-[90%] md:max-w-[70%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily }}>Wie wäre es, wenn du ohne großen Aufwand phänomenale Veränderungen in deinem Leben erreichen könntest, die bisher unerreichbar schienen? Bei BeHappyCoaching bieten wir dir genau diese Möglichkeit. Stell dir vor, du könntest beruflich und privat erfolgreich und erfüllt sein, unabhängig von den äußeren Umständen. Mit den richtigen Tools und Methoden kannst du dein Leben mit Anmut und Freude dorthin lenken, wo du es haben möchtest.</p>
          </div>
        </section>
        <section className="w-screem flex flex-col md:flex-col justify-evenly items-center transition-all translate-y-[-50px] md:translate-y-[-120px] gap-[10px] " aria-label="mockup">
          <div className="w-[95%] flex flex-col md:flex-row justify-center items-center gap-[50px]">
            <div className="max-h-[700px] lg:max-h-[50rem]">
              <img src="/caroline_bono_hoerler_coaching.png" className="max-h-[700px] lg:max-h-[50rem] box-wrapper" />
            </div>
            <div className="w-[95%] md:w-[50%] flex flex-col justify-center items-center gap-[50px] xl:gap-[25px] z-10">
              <img src="/logo.png" className="max-w-[20%]"/>
              <div className="w-[95%] md:w-[90%] h-[60%] px-4 py-10 flex justify-center items-center flex-col bg-sand rounded-xl gap-5 xl:gap-7">
                <h1 style={{ fontFamily: "theseasons" }} className="text-black text-5xl font-sans text-center">Hey, ich bin<br/> <span className="text-primary" style={{ fontFamily: dancing_script.style.fontFamily}}>Caroline Bono-Hörler!</span></h1>
                <p className="text-xl max-w-[80%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily }}>So schön, dass du da bist! Als lizensierter Coach, Juristin, Bestseller-Autorin und Gründerin unterstütze ich so viele Menschen wie möglich dabei, den Zugang zu ihrer eigenen spirituellen Welt zu öffnen. Entfalte jetzt dein ganzes Potential!</p>
              </div>
              <Link href={"/contact"} className="bg-primary text-secondary mb-[20px] transition-all hover:bg-secondary hover:text-primary drop-shadow-xl duration-300 px-3 py-2 rounded-xl">Digital 1:1 Gespräch vereinbaren</Link>
            </div>
          </div>
          <div className="w-[95%] hidden md:flex md:text-3xl px-4 py-1 justify-center items-center flex-col rounded-xl gap-3 xl:gap-7">
            <h1 className="text-xl text-center text-pretty md:text-4xl text-black mb-5" style={{ fontFamily: dancing_script.style.fontFamily }}>Bekannt aus</h1>
            <InfiniteCarousel>
              <div className="w-full flex justify-center items-center gap-[100px]">
                <img className="w-[200px] md:w-full" src="/logos/coop_zeitung.png" />
                <img className="w-fit md:w-full" src="/logos/handelszeitung.png" />
              </div>
              <div className="w-full flex justify-center items-center gap-[100px]">
                <img className="w-fit md:w-full" src="/logos/persoenlich.png"/>
                <img className="w-fit md:w-full" src="/logos/tagesanzeiger.png"/>
              </div>
            </InfiniteCarousel>
          </div>
          <img loading="lazy" src="/be_happy_coaching_hero5.png" alt="BeHappyCoaching Hero 5"/>
        </section>
        <section className="w-screen flex flex-col gap-[50px] justify-center items-center transition-all">
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-[90%] flex justify-end">
              <h2 className="text-primary text-5xl md:text-7xl" style={{ fontFamily: b_dancing_script.style.fontFamily }}>Glaubst du an Wunder?</h2>
            </div>
            <h1 style={{ fontFamily: b_dancing_script.style.fontFamily}} className="font-sans text-7xl md:text-8xl font-bold ml-8">"Jeder will glücklich und erfolgreich sein."</h1>
          </div>
          <div className="w-[95%] flex flex-col md:flex-row justify-evenly items-center gap-[50px]">
            <div className="md:w-[40%] w-full px-4 py-10 flex justify-center items-center flex-col bg-secondary rounded-full gap-3 xl:gap-7 box-wrapper">
              <h1 className="text-xl md:text-3xl xl:text-4xl text-primary flex justify-center items-center gap-3 max-w-[300px] text-center" style={{ fontFamily: poppins.style.fontFamily}}>
                Das BeHappy&copy; Erfolgsrezept
              </h1>
              <p className="md:text-lg xl:text-2xl max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>In unseren Coachings lernst du, wie du in allen Lebenslagen, selbst während schwerer Schicksalsschläge, stets in deine Mitte findest und den Fokus nicht verlierst. Entdecke und verwirkliche dein volles Potenzial, aktiviere deine Selbstheilungskräfte und erfahre das Optimum an möglicher Heilung. Dein Weg zu einem glücklichen, erfüllten Leben beginnt hier.</p>
            </div>
            <div className="md:w-[60%] w-full px-4 py-10 flex justify-center items-center flex-col bg-sand rounded-xl gap-3 xl:gap-7 z-10"></div>
          </div>
        </section>
        <section className="w-screen flex justify-center items-center transition-all">
          <div className="w-[95%] px-4 py-10 flex justify-center items-center flex-col bg-secondary rounded-xl gap-3 xl:gap-7">
            <h1 className="text-xl text-center text-pretty md:text-5xl xl:text-7xl text-primary font-semibold" style={{ fontFamily: dancing_script.style.fontFamily}}>Ich helfe bei:</h1>
            <ul className="md:text-lg max-w-[90%] md:max-w-[60%] text-pretty m-0" style={{ fontFamily: poppins.style.fontFamily}}>
              {listItems.map((item: string) => {
                return <li key={item} className="text-primary-accent flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-[16px] h-[16px] min-w-[16px] min-h-[16px] flex justify-center items-center" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd" stroke-linejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero"/></svg>
                  {item}
                  </li>
              })}
            </ul>
            <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Solange dein Unterbewusstsein, deine Ahnenlinie oder du selbst bestimmte Themen blockieren, kann es schwierig sein, deine Wünsche zu erfüllen. Wir helfen dir dabei, diese Blockaden zu lösen und dein volles Potenzial zu entfalten.</p>
          </div>
        </section>
        <section className="w-screen flex justify-center items-center transition-all">
          <div className="w-[95%] flex flex-col md:flex-row justify-center items-center gap-[50px]">
            <img className="w-full bg-slate-400" alt="Laptop Image" />
            <div className="w-full px-4 py-10 flex justify-center items-center flex-col bg-secondary rounded-xl gap-3 xl:gap-7">
                <h2 className="text-xl md:text-3xl text-primary-accent" style={{ fontFamily: dancing_script.style.fontFamily}}>Dein Investment in dich selbst</h2>
                <h1 className="text-xl text-center text-pretty md:text-4xl text-primary" style={{ fontFamily: poppins.style.fontFamily}}>Unsere Coaching-Angebote</h1>
                <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Jede unserer Coaching Sessions fängt mit 45 Minuten an, kann aber je nach Ziel erweitert werden. Diese Investition in dich selbst kann dir helfen, die Veränderungen in deinem Leben herbeizuführen, die du dir schon immer gewünscht hast. Egal, ob du berufliche oder private Ziele erreichen, emotionale oder körperliche Blockaden lösen oder einfach mehr Zufriedenheit im Alltag finden möchtest – wir sind hier, um dich auf deinem Weg zu unterstützen.</p>
                <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Buche jetzt deine Sitzung und starte noch heute auf deinem Weg zu einem erfüllten Leben.</p>
            </div>
          </div>
        </section>
        <section className="w-screen flex justify-center items-center transition-all">
          <img src="/bildabschnit_1920_x_540.png" alt="Banner" className="w-screen bg-slate-400" />
        </section>
        <section className="w-screen flex justify-center items-center transition-all translate-y-[-40px] md:translate-y-[-180px]">
          <div className="w-[95%] md:w-[70%] lg:w-[50%] p-7 rounded-xl flex flex-col justify-center items-center bg-sand gap-3">
            <h1 className="text-center text-8xl text-black" style={{ fontFamily: b_dancing_script.style.fontFamily}}>Read Me!</h1>
            <h2 className="text-center text-4xl text-black font-bold" style={{ fontFamily: b_dancing_script.style.fontFamily }}>Tauche ab in meine Buchwelt</h2>
          </div>
        </section>
        <section className="w-screen flex flex-col md:flex-row justify-center items-center xl:px-5 gap-2 lg:gap-5 transition-all translate-y-[-70px] md:translate-y-[-290px] rounded-xl overflow-hidden" aria-label="bücher">
          <div className="w-[95%] flex flex-col md:flex-row justify-between items-center rounded-xl overflow-hidden">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-5 bg-sand p-5 xl:p-10">
              <img src="/book-cover-mockups_2.png" alt="Allein gegen Goliath Bild" className="w-[60%] rounded-xl"/>
              <div className="flex flex-col gap-2 justify-center items-center">
                <h1 className="text-black text-4xl" style={{ fontFamily: b_dancing_script.style.fontFamily}}>Allein gegen Goliath</h1>
                <h2>Lorem ipsum dolor sit amet</h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-5 bg-sand p-5 xl:p-10">
              <img src="/book-cover-mockups_1.png" alt="Goliath gegen Alle Bild" className="w-[60%] rounded-xl"/>
              <div className="flex flex-col gap-2 justify-center items-center">
                <h1 className="text-black text-4xl" style={{ fontFamily: b_dancing_script.style.fontFamily}}>Goliath gegen Alle</h1>
                <h2>Lorem Ipsum dolor sit amet</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

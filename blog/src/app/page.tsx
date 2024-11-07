import Head from "next/head";
import {
  Dancing_Script,
  Poppins,
} from "next/font/google";

import Link from "next/link";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import CalendlyWidget from "@/components/CalendlyWidget";

const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const b_poppins = Poppins({ weight: "500", subsets: ["latin"] });
const b_dancing_script = Dancing_Script({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-5 md:gap-12 xl:gap-36 px-12 pb-6 md:px-24 overflow-hidden">
      <Head>
        <title>BeHappyCoaching</title>
      </Head>
      <section
        className="w-screen flex items-center justify-center gap-8 md:gap-12"
        aria-label="hero"
      >
        <img
          loading="lazy"
          src="/hero_1.png"
          alt="Hero"
          className="w-[96%] h-full block rounded-xl"
        />
      </section>
      <div className="flex flex-col translate-y-[-50px] md:translate-y-[-100px] xl:translate-y-[-250px] gap-5 md:gap-7 xl:gap-[100px] h-fit">
        <section
          className="w-screen flex justify-center items-center transition-all"
          aria-label="welcome"
        >
          <div
            className="w-[85%] md:w-[65%] px-4 py-10 flex justify-center items-center flex-col bg-secondary box-wrapper rounded-xl gap-3 xl:gap-7"
            style={{}}
          >
            <h2
              className="text-xl md:text-3xl xl:text-4xl text-black text-center"
              style={{ fontFamily: dancing_script.style.fontFamily }}
            >
              Dein Weg zu einem erfüllten Leben
            </h2>
            <h1
              className="text-xl text-center text-pretty md:text-4xl xl:text-5xl text-primary"
              style={{
                fontFamily: b_poppins.style.fontFamily,
                fontWeight: 900,
              }}
            >
              Willkommen bei BeHappyCoaching&copy;
            </h1>
            <p
              className="md:text-lg xl:text-2xl max-w-[90%] md:max-w-[70%] text-center text-pretty"
              style={{ fontFamily: poppins.style.fontFamily }}
            >
              Wie wäre es, wenn du ohne großen Aufwand phänomenale Veränderungen
              in deinem Leben erreichen könntest, die bisher unerreichbar
              schienen? Bei BeHappyCoaching bieten wir dir genau diese
              Möglichkeit. Stell dir vor, du könntest beruflich und privat
              erfolgreich und erfüllt sein, unabhängig von den äußeren
              Umständen. Mit den richtigen Tools und Methoden kannst du dein
              Leben mit Anmut und Freude dorthin lenken, wo du es haben
              möchtest.
            </p>
          </div>
        </section>
        <section
          className="w-screem flex flex-col md:flex-col justify-evenly items-center transition-all translate-y-[-50px] md:translate-y-[-120px] gap-[10px] "
          aria-label="mockup"
        >
          <div className="w-[95%] flex flex-col md:flex-row justify-center items-center gap-[50px]">
            <div className="max-h-[700px] lg:max-h-[50rem]">
              <img
                src="/handy.png"
                alt="MockUp Phone"
                className="max-h-[700px] lg:max-h-[50rem] box-wrapper"
              />
            </div>
            <div className="w-[95%] md:w-[50%] flex flex-col justify-center items-center gap-[50px] xl:gap-[25px] z-10">
              <img
                src="/logo.png"
                className="max-w-[20%]"
                alt="BeHappyCoaching Logo"
              />
              <div className="w-[95%] md:w-[90%] h-[60%] px-4 py-10 flex justify-center items-center flex-col bg-sand rounded-xl gap-5 xl:gap-7">
                <h1
                  style={{ fontFamily: "theseasons" }}
                  className="text-black text-5xl font-sans text-center"
                >
                  Hey, ich bin
                  <br />{" "}
                  <span
                    className="text-primary"
                    style={{ fontFamily: dancing_script.style.fontFamily }}
                  >
                    Caroline Bono-Hörler!
                  </span>
                </h1>
                <p
                  className="text-xl max-w-[80%] text-center text-pretty"
                  style={{ fontFamily: poppins.style.fontFamily }}
                >
                  Als Gründerin von BeHappyCoaching ist es meine Mission,
                  Menschen auf ihrem Weg zu einem erfüllteren und glücklicheren
                  Leben zu begleiten. Mit meiner Erfahrung als Coachin
                  unterstütze ich dich dabei, deine persönlichen Ziele zu
                  erreichen und Hindernisse zu überwinden. Gemeinsam finden wir
                  den Weg zu deinem besten Selbst. Bist du bereit, dein Leben
                  positiv zu verändern?
                </p>
              </div>
            </div>
          </div>
          <div className="w-[95%] hidden md:flex md:text-3xl px-4 py-1 justify-center items-center flex-col rounded-xl gap-3 xl:gap-7">
            <h1
              className="text-xl text-center text-pretty md:text-4xl text-black mb-5"
              style={{ fontFamily: dancing_script.style.fontFamily }}
            >
              Bekannt aus
            </h1>
            <InfiniteCarousel>
              <div className="w-full flex justify-center items-center gap-[40px]">
                <img
                  loading="lazy"
                  className="w-fit md:w-full max-w-[300px] max-h-[100px] px-5"
                  src="/logos/coop_zeitung.png"
                  alt="Coop Zeitung"
                />
                <img
                  loading="lazy"
                  className="w-fit md:w-full max-w-[300px] max-h-[100px] px-5"
                  src="/logos/handelszeitung.png"
                  alt="Handelszeitung"
                />
                <img
                  loading="lazy"
                  className="w-fit md:w-full max-w-[300px] max-h-[100px] px-5"
                  src="/logos/persoenlich.png"
                  alt="Persönlich Zeitung"
                />
                <img
                  loading="lazy"
                  className="w-fit md:w-full max-w-[300px] max-h-[100px] px-5"
                  src="/logos/tagesanzeiger.png"
                  alt="Tagesanzeiger Zeitung"
                />
              </div>
            </InfiniteCarousel>
          </div>
          <img loading="lazy" src="/hero5.png" alt="BeHappyCoaching Hero 5" />
        </section>
        <section className="w-screen flex flex-col gap-[50px] justify-center items-center transition-all">
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-[90%] flex justify-end">
              <h2
                className="text-primary text-5xl md:text-7xl"
                style={{ fontFamily: b_dancing_script.style.fontFamily }}
              >
                Glaubst du an Wunder?
              </h2>
            </div>
            <h1
              style={{ fontFamily: b_dancing_script.style.fontFamily }}
              className="font-sans text-7xl md:text-8xl font-bold ml-8"
            >
              &quot;Jeder will glücklich und erfolgreich sein.&quot;
            </h1>
          </div>
          <div className="w-[95%] flex flex-col md:flex-row justify-evenly items-center gap-[50px]">
            <div className="md:w-[40%] w-full overflow-hidden px-4 py-10 flex justify-center items-center flex-col bg-transparent rounded-2xl gap-3 xl:gap-7">
              <img
                className="max-w-[70%] rounded-full transition-all"
                loading="lazy"
                src="/caroline_bono_hoerler_portrait.jpg"
                alt="Caroline Bono Hoerler Portrait"
              />
              <h1
                className="text-xl md:text-3xl xl:text-4xl text-primary flex justify-center items-center gap-3 max-w-[300px] text-center"
                style={{ fontFamily: poppins.style.fontFamily }}
              >
                Das BeHappyCoaching&copy; Erfolgsrezept
              </h1>
            </div>
            <div className="md:w-[60%] w-full px-4 py-10 flex justify-center items-center flex-col bg-sand rounded-xl gap-3 xl:gap-7 z-10">
              <h1
                className="text-4xl text-primary text-center text-pretty"
                style={{ fontFamily: b_dancing_script.style.fontFamily }}
              >
                Warum ich dir helfen kann - mein Background:
              </h1>
              <ul
                className="list-disc px-2"
                style={{ fontFamily: poppins.style.fontFamily }}
              >
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
                <li>Transaktionsanalyse</li>
                <li>Holographic Imaging</li>
                <li>Pranic Healing</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-screen flex justify-center items-center transition-all">
          <div className="w-full px-4 py-10 flex justify-center items-center flex-col bg-secondary gap-3 xl:gap-7">
            <h1
              className="text-xl text-center text-pretty md:text-5xl xl:text-7xl text-primary font-semibold"
              style={{ fontFamily: dancing_script.style.fontFamily }}
            >
              Ich helfe bei:
            </h1>
            <p
              className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty"
              style={{ fontFamily: poppins.style.fontFamily }}
            >
              Du kommst mit &nbsp;
              <span
                className="text-3xl"
                style={{ fontFamily: dancing_script.style.fontFamily }}
              >
                einem Problem
              </span>
              , respektive mit einem nicht erfülltem{" "}
              <span
                className="text-3xl"
                style={{ fontFamily: dancing_script.style.fontFamily }}
              >
                Wunsch
              </span>{" "}
              ins Coaching, sei dies im Bereich &nbsp;
              <span
                className="text-3xl"
                style={{ fontFamily: dancing_script.style.fontFamily }}
              >
                Arbeitsplatz
              </span>
              ,&nbsp;{" "}
              <span
                className="text-3xl"
                style={{ fontFamily: dancing_script.style.fontFamily }}
              >
                Liebesbeziehung
              </span>
              , &nbsp;
              <span
                className="text-3xl"
                style={{ fontFamily: dancing_script.style.fontFamily }}
              >
                Trauma
              </span>
              , &nbsp;
              <span
                className="text-3xl"
                style={{ fontFamily: dancing_script.style.fontFamily }}
              >
                Gesundheit
              </span>
              .
            </p>
            <p
              className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty"
              style={{ fontFamily: poppins.style.fontFamily }}
            >
              Wir suchen im Gespräch nach dem roten Faden, der sich durch dein
              Leben zieht, entdecken die Gesamtzusammenhänge des Problems und
              Verarbeiten die Ursachen, welche oft im unbewussten Bereich liegen
              mit der für dieses Problem geeigneten Methode.
            </p>
          </div>
        </section>
        <section className="w-screen flex flex-col lg:flex-row justify-center items-center transition-all">
          <div className="w-[95%] flex flex-col lg:flex-row justify-center items-center gap-[50px]">
            <div className="w-full px-4 py-10 flex justify-center items-center flex-col bg-secondary rounded-xl gap-3 xl:gap-7">
              <h2
                className="text-xl md:text-3xl text-black"
                style={{ fontFamily: dancing_script.style.fontFamily }}
              >
                Dein Investment in dich selbst
              </h2>
              <h1
                className="text-xl text-center text-pretty md:text-4xl text-primary"
                style={{ fontFamily: poppins.style.fontFamily }}
              >
                Unsere Coaching-Angebote
              </h1>
              <p
                className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty"
                style={{ fontFamily: poppins.style.fontFamily }}
              >
                Jede unserer Coaching Sessions fängt mit einem 15-minütigen
                kostenlosen Kennenlerngespräch via Telefonat an, kann aber je
                nach Ziel erweitert werden. Diese Investition in dich hilft dir,
                die Veränderungen in deinem Leben herbeizuführen, die du dir
                schon immer gewünscht hast. Egal, ob du berufliche oder private
                Ziele erreichen, emotionale oder körperliche Blockaden lösen,
                oder einfach mehr Zufriedenheit im Alltag finden möchtest - Ich
                bin hier, um dich auf deinem Weg zu unterstützen. Buche jetzt
                deine Sitzung und starte noch heute auf deinem Weg zu einem
                erfüllten Leben.
              </p>
            </div>
            <div className="w-full flex flex-col gap-5">
              <img
                loading="lazy"
                src="/side-view-young-girl-talking-therapist.png"
                className="w-full rounded-full"
                alt="Side View young girl talking theraphist"
              />
              <h3
                className="text-center text-4xl"
                style={{ fontFamily: dancing_script.style.fontFamily }}
              >
                One on One
                <br />
                Online oder in persona am Zürichsee
              </h3>
            </div>
          </div>
        </section>
        <div className="flex gap-[50px] flex-col">
          <section className="w-screen h-fit flex justify-center items-center transition-all">
            <img
              loading="lazy"
              src="/banner.png"
              alt="Banner"
              className="w-screen bg-slate-400"
            />
          </section>
          <section
            className="flex flex-col items-center justify-start gap-[50px] md:gap-[0px]"
            aria-label="bücher"
          >
            <div className="w-screen flex flex-col lg:flex-row justify-evenly items-center z-10">
              <img
                loading="lazy"
                src="/book-cover-mockup_allein_gegen_goliath.png"
                alt="Allein gegen Goliath Mock Up"
                className="h-full max-h-[400px] md:max-h-[700px] drop-shadow-2xl"
              />
              <div className="w-fit max-w-[600px] h-full flex flex-col justify-center items-start lg:py-[0px] gap-5 px-7">
                <h3
                  style={{ fontFamily: b_dancing_script.style.fontFamily }}
                  className="text-5xl text-primary"
                >
                  Read me!
                </h3>
                <h1
                  style={{ fontFamily: b_dancing_script.style.fontFamily }}
                  className="text-4xl text-black"
                >
                  Allein gegen Goliath
                </h1>
                <h2
                  style={{ fontFamily: poppins.style.fontFamily }}
                  className="text-xl text-black text-pretty"
                >
                  Wie mein rundumversichertes Leben zum Albtraum wurde
                </h2>
                <p className="text-pretty">
                  Dr. iur. Caroline Bono-Hörler war eine stolze Mutter und
                  erfolgreiche Juristin. Sie war kerngesund, sehr sportlich und
                  wusste, was sie wollte. Doch dann machte ein einziger
                  Augenblick alles zunichte. Ihr Auto stand vor einer Ampel, als
                  es von hinten gerammt wurde...
                </p>
                <Link
                  target="_"
                  href={
                    "https://www.amazon.de/Allein-gegen-Goliath-rundumversichertes-Albtraum/dp/3037630132/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr="
                  }
                  className="bg-primary text-sand drop-shadow-xl text-xl transition-all duration-300 hover:bg-sand hover:text-primary px-3 py-2 rounded-2xl"
                >
                  Jetzt bestellen
                </Link>
              </div>
            </div>
            <div className="w-screen flex flex-col lg:flex-row justify-evenly items-center z-10">
              <div className="w-fit max-w-[600px] h-full flex flex-col justify-center items-start lg:py-[0px] gap-5 pl-7 md:pl-20">
                <h3
                  style={{ fontFamily: b_dancing_script.style.fontFamily }}
                  className="text-5xl text-primary"
                >
                  Jetzt neu!
                </h3>
                <h1
                  style={{ fontFamily: b_dancing_script.style.fontFamily }}
                  className="text-4xl text-black"
                >
                  Goliath gegen Alle
                </h1>
                <h2
                  style={{ fontFamily: poppins.style.fontFamily }}
                  className="text-xl text-black text-pretty"
                >
                  Wie man von der Hölle in den Himmel kommt
                </h2>
                <p className="text-pretty">
                  Das Neue Buch von Frau Bono entführt dich in eine packende
                  Welt, in der Macht und Intrigen aufeinandertreffen. Tauche ein
                  in die Geschichte eines Helden, der sich gegen schier
                  übermächtige Gegner stellt und seine tiefsten Ängste
                  überwinden muss. Ein fesselnder Roman voller Spannung,
                  unerwarteter Wendungen und psychologischer Tiefe.
                </p>
                <Link
                  target="_"
                  href={
                    "https://www.novumverlag.com/onlineshop/ratgeber-sachbuch/sonstiges-allerlei/goliath-gegen-alle.html"
                  }
                  className="bg-primary text-sand drop-shadow-xl text-xl transition-all duration-300 hover:bg-sand hover:text-primary px-3 py-2 rounded-2xl"
                >
                  Jetzt bestellen
                </Link>
              </div>
              <img
                loading="lazy"
                src="/mockup2.png"
                alt="Goliath gegen Alle Mock Up"
                className="h-full max-h-[400px] md:max-h-[700px] drop-shadow-2xl"
              />
            </div>
            <div className="w-screen flex flex-col md:flex-row justify-center items-center">
              <div className="bg-primary w-fit max-w-[95%] flex flex-col justify-center items-center p-12 rounded-xl gap-5">
                <h1
                  className="text-5xl text-white text-center"
                  style={{ fontFamily: b_dancing_script.style.fontFamily }}
                >
                  Jetzt hier bestellen
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                  <Link
                    target="_"
                    href={
                      "https://www.amazon.de/Goliath-gegen-alle-H%C3%B6lle-Himmel/dp/3991303507/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.V9fnIcu6vQf2LhYwISRk1CxRpEfu58bUNqoGcW6gAMhYNog1Io1MncB1hLwzBx7AcCcCEAPHG9Vp7R2cho8GzVYvQLjogEE5EsfXB9Rj-hLcnHq0picXbElZPNs1OR9gPdoC3_flMckJLvQZLNYX2b9eXNzxZf7o9Xqwx3PlhPtxuWr4QNCEJ3p-iPjquUWYBRchYqd8b8_w5t7_U4oyqfyNG_BRs8NWokxBR_PxLg4.xThTcXAMt97Cbjzq0kTqSTpUko7WTGScKNX9g_2loPE&qid=1724159073&sr=8-1"
                    }
                    className="flex flex-col gap-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="221"
                      height="65"
                      viewBox="0 0 221 65"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M104.567 43.17C99.1665 47.17 91.2665 49.27 84.4665 49.27C75.4665 49.27 66.6665 45.97 59.9665 39.97C59.4665 39.47 59.8665 38.87 60.5665 39.27C68.0665 43.57 76.4665 45.77 85.0665 45.77C91.4665 45.77 97.8665 44.47 103.767 41.97C104.667 41.47 105.467 42.47 104.567 43.17Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M106.867 40.57C106.167 39.67 102.267 40.17 100.567 40.37C100.067 40.47 99.9665 39.97 100.467 39.67C103.567 37.47 108.667 38.17 109.267 38.87C109.867 39.57 109.067 44.67 106.167 47.17C105.767 47.57 105.267 47.37 105.467 46.87C106.067 45.17 107.467 41.47 106.867 40.57Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M100.567 24.27V22.17C100.567 21.87 100.767 21.67 101.067 21.67H110.667C110.967 21.67 111.167 21.87 111.167 22.17V23.97C111.067 24.47 110.767 24.97 110.467 25.27L105.567 32.27C107.467 32.17 109.267 32.57 110.967 33.47C111.267 33.67 111.467 33.97 111.467 34.27V36.57C111.467 36.87 111.167 37.27 110.767 37.07C107.667 35.47 103.867 35.47 100.767 37.07C100.467 37.27 100.067 36.87 100.067 36.57V34.47C100.067 33.97 100.167 33.47 100.467 32.97L106.167 24.77H101.167C100.867 24.77 100.667 24.57 100.567 24.27Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M65.9665 37.47H63.0665C62.7665 37.47 62.5665 37.27 62.5665 36.97V22.17C62.5665 21.87 62.8665 21.67 63.1665 21.67H65.8665C66.1665 21.67 66.3665 21.87 66.3665 22.17V24.07H66.4665C66.9665 22.37 68.5665 21.27 70.2665 21.37C72.0665 21.37 73.1665 22.27 73.9665 24.07C74.7665 21.87 77.2665 20.77 79.4665 21.57C80.1665 21.87 80.8665 22.27 81.2665 22.87C82.1665 24.07 81.9665 25.97 81.9665 27.47V36.87C81.9665 37.17 81.6665 37.37 81.3665 37.37H78.4665C78.1665 37.37 77.9665 37.17 77.9665 36.87V29.07C77.9665 28.17 77.9665 27.17 77.8665 26.27C77.7665 25.47 76.9665 24.87 76.1665 24.97C75.3665 24.97 74.7665 25.47 74.4665 26.17C74.2665 27.17 74.1665 28.17 74.2665 29.07V36.97C74.2665 37.27 73.9665 37.47 73.6665 37.47H70.7665C70.4665 37.47 70.2665 37.27 70.2665 36.97V29.07C70.2665 27.37 70.5665 24.97 68.4665 24.97C66.3665 24.97 66.4665 27.37 66.4665 29.07V36.97C66.5665 37.27 66.2665 37.47 65.9665 37.47Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M119.367 21.27C123.667 21.27 125.967 24.97 125.967 29.67C125.967 34.17 123.367 37.77 119.367 37.77C115.167 37.77 112.867 34.07 112.867 29.47C112.867 24.87 115.167 21.27 119.367 21.27ZM119.367 24.37C117.267 24.37 117.067 27.27 117.067 29.07C117.067 30.87 117.067 34.77 119.267 34.77C121.467 34.77 121.567 31.67 121.567 29.77C121.567 28.47 121.467 27.17 121.167 25.87C121.067 24.87 120.267 24.27 119.367 24.37Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M131.567 37.47H128.667C128.367 37.47 128.167 37.27 128.167 36.97V22.07C128.167 21.77 128.467 21.57 128.767 21.57H131.467C131.667 21.57 131.967 21.77 131.967 21.97V24.27H132.067C132.867 22.27 133.967 21.27 135.967 21.27C137.367 21.17 138.567 21.87 139.367 22.97C140.167 24.17 140.167 26.17 140.167 27.57V36.87C140.167 37.17 139.867 37.37 139.567 37.37H136.667C136.367 37.37 136.167 37.17 136.167 36.87V28.87C136.167 27.27 136.367 24.87 134.367 24.87C133.667 24.87 132.967 25.37 132.667 26.07C132.267 26.97 132.167 27.87 132.167 28.87V36.87C132.067 37.27 131.867 37.47 131.567 37.47Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M55.1665 30.37C55.2665 31.47 55.0665 32.47 54.6665 33.47C54.2665 34.27 53.5665 34.77 52.6665 34.77C51.5665 34.77 50.8665 33.97 50.8665 32.67C50.8665 30.17 53.0665 29.77 55.1665 29.77V30.37ZM58.0665 37.47C57.8665 37.67 57.5665 37.67 57.3665 37.57C56.6665 37.07 56.1665 36.37 55.6665 35.67C54.4665 37.07 52.7665 37.87 50.8665 37.77C48.5665 37.67 46.6665 36.17 46.6665 33.17C46.5665 31.07 47.8665 29.17 49.7665 28.47C51.5665 27.87 53.3665 27.57 55.1665 27.47V27.07C55.2665 26.37 55.1665 25.67 54.7665 24.97C54.4665 24.47 53.8665 24.17 53.1665 24.27C52.0665 24.17 51.0665 24.87 50.8665 25.97C50.8665 26.27 50.6665 26.47 50.3665 26.47L47.5665 26.17C47.2665 26.17 47.0665 25.87 47.1665 25.67C47.7665 22.17 50.8665 21.17 53.5665 21.17C55.1665 21.07 56.6665 21.67 57.8665 22.57C59.2665 23.87 59.1665 25.67 59.1665 27.57V32.07C59.1665 33.07 59.5665 34.07 60.2665 34.77C60.4665 34.97 60.4665 35.37 60.2665 35.57C59.7665 36.07 58.6665 36.97 58.0665 37.47Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M93.0665 30.37C93.1665 31.47 92.9665 32.47 92.5665 33.47C92.1665 34.27 91.4665 34.77 90.5665 34.77C89.4665 34.77 88.7665 33.97 88.7665 32.67C88.7665 30.17 90.9665 29.77 93.0665 29.77V30.37ZM95.9665 37.47C95.7665 37.67 95.4665 37.67 95.2665 37.57C94.5665 37.07 94.0665 36.37 93.5665 35.67C92.3665 37.07 90.6665 37.87 88.7665 37.77C86.3665 37.77 84.4665 36.27 84.4665 33.27C84.3665 31.17 85.6665 29.27 87.5665 28.57C89.3665 27.97 91.1665 27.67 92.9665 27.57V27.07C93.0665 26.37 92.9665 25.67 92.5665 24.97C92.1665 24.47 91.5665 24.17 90.9665 24.17C89.8665 24.07 88.8665 24.87 88.6665 25.87C88.6665 26.17 88.4665 26.37 88.1665 26.37L85.4665 26.17C85.1665 26.17 84.9665 25.87 85.0665 25.57C85.6665 22.17 88.7665 21.17 91.4665 21.17C93.0665 21.07 94.5665 21.67 95.8665 22.57C97.2665 23.87 97.1665 25.67 97.1665 27.57V32.07C97.1665 33.07 97.5665 34.07 98.2665 34.77C98.4665 34.97 98.4665 35.37 98.2665 35.57C97.5665 36.07 96.5665 36.97 95.9665 37.47Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M156.667 37.5H155.467C155.167 37.5 154.967 37.3 154.967 37V35.1C154.267 36.8 152.567 37.9 150.767 37.8C148.967 37.8 147.267 36.8 146.467 35.1C145.567 33.4 145.067 31.5 145.167 29.5C145.167 25.5 146.767 21.1 150.967 21.1C152.567 21.1 154.067 21.9 154.767 23.3V16.5C154.767 16.2 154.967 16 155.267 16H156.667C156.967 16 157.167 16.2 157.167 16.5V37C157.067 37.3 156.867 37.5 156.667 37.5ZM165.267 21.2C169.567 21.2 171.367 25.1 171.367 29.3C171.367 29.6 171.167 29.8 170.867 29.8H161.367C161.267 31 161.467 32.3 161.967 33.4C162.567 34.8 163.867 35.7 165.367 35.8C166.967 35.7 168.267 34.7 168.767 33.2C168.867 33 169.167 32.8 169.367 32.9L170.667 33C170.967 33 171.067 33.3 171.067 33.5C170.267 36.1 167.967 37.8 165.267 37.7C160.967 37.7 158.867 33.9 158.867 29.4C158.867 25.1 161.067 21.2 165.267 21.2ZM154.767 30.6V28.1C154.867 27 154.567 25.9 154.067 24.9C153.467 23.9 152.367 23.2 151.167 23.1C149.967 23.2 148.967 24 148.467 25.1C147.867 26.4 147.567 27.8 147.667 29.2C147.667 31.8 148.267 35.6 151.067 35.7C152.267 35.6 153.367 34.9 153.967 33.8C154.567 32.9 154.867 31.7 154.767 30.6ZM161.567 27.9H168.867C168.867 25.3 167.667 23.1 165.367 23C163.067 23.1 161.667 25.4 161.567 27.9ZM141.767 36.3C141.767 35.5 142.367 34.8 143.067 34.8C143.867 34.8 144.567 35.4 144.567 36.1C144.567 36.9 143.967 37.6 143.267 37.6C143.267 37.6 143.267 37.6 143.167 37.6C142.467 37.7 141.867 37.1 141.767 36.3Z"
                        fill="white"
                      ></path>
                      <path
                        d="M173.067 21.8C173.767 21.8 174.367 22.4 174.367 23.1C174.367 23.8 173.767 24.4 173.067 24.4C172.367 24.4 171.767 23.8 171.767 23.1C171.867 22.4 172.367 21.8 173.067 21.8ZM173.067 21.6C172.267 21.6 171.567 22.3 171.567 23.1C171.567 23.9 172.267 24.6 173.067 24.6C173.867 24.6 174.567 23.9 174.567 23.1C174.567 22.2 173.967 21.6 173.067 21.6ZM172.467 23.9H172.767V23.2H173.067C173.167 23.2 173.267 23.2 173.267 23.3L173.367 23.8H173.767C173.767 23.7 173.667 23.5 173.667 23.4C173.667 23.2 173.667 23 173.367 23C173.567 23 173.667 22.8 173.667 22.6C173.667 22.2 173.267 22.2 173.067 22.2H172.467V23.9ZM172.867 22.5H173.167C173.267 22.5 173.367 22.5 173.367 22.7C173.367 22.8 173.267 22.9 173.167 22.9H172.867V22.5Z"
                        fill="white"
                      ></path>
                    </svg>
                    <h2 className="text-white text-lg text-center">
                      Hier bestellen
                    </h2>
                  </Link>
                  <Link
                    target="_"
                    href={
                      "https://www.hugendubel.de/de/buch_gebunden/caroline_bono_hoerler-goliath_gegen_alle-46264481-produkt-details.html"
                    }
                    className="flex flex-col gap-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="221"
                      height="65"
                      viewBox="0 0 221 65"
                      fill="none"
                    >
                      <path
                        d="M33.3333 36.8V15H38.0333V23.2H46.7333V15H51.4333V36.8H46.7333V27.4H38.0333V36.8H33.3333Z"
                        fill="white"
                      ></path>
                      <path
                        d="M52.8333 21H57.1333V30.8C56.9333 32.1 57.9333 33.4 59.2333 33.6C59.4333 33.6 59.6333 33.6 59.8333 33.6C61.8333 33.6 63.0333 32 63.1333 30.1V21H67.3333V36.8H63.3333V34.6L62.9333 35C61.8333 36.5 60.0333 37.3 58.2333 37.2C56.9333 37.2 55.7333 36.8 54.6333 36.1C54.1333 35.7 53.7333 35.2 53.4333 34.7C52.9333 33.8 52.7333 33.1 52.7333 31L52.8333 21Z"
                        fill="white"
                      ></path>
                      <path
                        d="M89.2333 27.2H96.0333C96.0333 26.4 95.7333 25.6 95.3333 25C94.2333 23.6 92.2333 23.3 90.7333 24.4C90.4333 24.6 90.1333 24.9 89.9333 25.2C89.5332 25.8 89.3333 26.5 89.2333 27.2ZM84.9333 28.9C84.9333 24.4 87.9333 20.5 92.8333 20.6C93.9333 20.6 94.9333 20.8 95.9333 21.2C97.5332 21.9 98.7333 23.1 99.4333 24.7C99.6332 25.2 99.8333 25.7 99.9333 26.1C100.233 27.2 100.333 28.3 100.333 29.3V30H89.2333V30.3C89.3333 32 90.0333 34.1 92.7333 34.1C94.2333 34.2 95.5333 33.2 96.0333 31.8H100.133C100.133 31.9 100.033 32.1 100.033 32.2C99.1332 35.3 96.1333 37.4 92.9333 37.2C88.3333 37.2 84.9333 34.2 84.9333 28.9Z"
                        fill="white"
                      ></path>
                      <path
                        d="M101.633 21H105.633V23.2C106.733 21.5 108.633 20.5 110.633 20.6C111.533 20.6 112.333 20.8 113.233 21.1C114.033 21.4 114.733 22 115.233 22.8C115.833 23.6 116.033 24.3 116.033 26.9V36.8H111.833V27.8C111.833 27.4 111.833 27 111.833 26.6C111.833 26.3 111.733 25.9 111.633 25.6C111.133 24.7 110.233 24.1 109.133 24.3C107.933 24.3 106.833 25 106.233 26C105.833 26.9 105.733 27.8 105.833 28.8V36.9H101.633V21Z"
                        fill="white"
                      ></path>
                      <path
                        d="M121.933 28.9C121.933 31.8 123.433 33.8 125.633 33.8C127.833 33.8 129.333 32.1 129.333 28.9C129.333 28.2 129.233 27.4 129.033 26.8C128.633 25.1 127.233 24 125.533 24C123.333 24 121.933 25.7 121.933 28.9ZM117.633 28.8C117.533 26.8 118.133 24.8 119.333 23.2C121.233 20.6 124.833 19.9 127.633 21.5C128.233 21.9 128.833 22.4 129.233 23V15H133.433V36.8H129.433V34.8C129.233 35.1 129.033 35.4 128.733 35.7C127.633 36.8 126.133 37.4 124.633 37.3C120.033 37 117.633 33.7 117.633 28.8Z"
                        fill="white"
                      ></path>
                      <path
                        d="M134.933 21H139.233V30.8C139.033 32.1 140.033 33.4 141.333 33.6C141.533 33.6 141.733 33.6 141.933 33.6C143.933 33.6 145.133 32 145.233 30.1V21H149.433V36.8H145.333V34.6L145.033 35C143.933 36.5 142.133 37.3 140.333 37.2C139.033 37.2 137.833 36.8 136.733 36.1C136.233 35.7 135.833 35.2 135.533 34.7C135.033 33.8 134.833 33.1 134.833 31L134.933 21Z"
                        fill="white"
                      ></path>
                      <path
                        d="M155.033 28.7C154.933 31.5 156.233 33.7 158.633 33.7C159.833 33.8 160.933 33.1 161.533 32.1C162.133 31.1 162.433 29.9 162.333 28.7C162.333 27.4 162.033 26.2 161.233 25.2C160.533 24.4 159.633 24 158.633 24C157.633 24 156.633 24.5 155.933 25.3C155.333 26.3 154.933 27.5 155.033 28.7ZM150.933 36.8V15H155.133V22.9C155.433 22.5 155.733 22.1 156.233 21.8C157.433 20.9 158.933 20.5 160.433 20.6C162.133 20.7 163.733 21.6 164.833 22.9C165.933 24.3 166.533 25.9 166.633 28.7C166.733 30.8 166.133 32.8 165.033 34.5C163.133 37.2 159.533 38.1 156.633 36.5C155.933 36.1 155.433 35.5 154.933 34.8V36.8H150.933Z"
                        fill="white"
                      ></path>
                      <path
                        d="M171.833 27.2H178.633C178.633 26.4 178.333 25.6 177.933 25C176.833 23.6 174.833 23.3 173.333 24.4C173.033 24.6 172.733 24.9 172.533 25.2C172.233 25.8 171.933 26.5 171.833 27.2ZM167.533 28.9C167.533 24.4 170.533 20.5 175.433 20.6C176.533 20.6 177.533 20.8 178.533 21.2C180.033 21.9 181.333 23.1 182.033 24.7C182.233 25.2 182.433 25.7 182.533 26.1C182.833 27.2 182.933 28.3 182.933 29.3V30H171.833V30.3C171.933 32 172.633 34.1 175.333 34.1C176.833 34.2 178.133 33.2 178.533 31.8H182.633C182.633 31.9 182.533 32.1 182.533 32.2C181.633 35.3 178.633 37.4 175.433 37.2C170.933 37.2 167.533 34.2 167.533 28.9Z"
                        fill="white"
                      ></path>
                      <path
                        d="M188.033 15H183.833V36.8H188.033V15Z"
                        fill="white"
                      ></path>
                      <path
                        d="M72.5333 28.4C72.5333 29.3 72.6333 30.2 73.0333 31C73.5333 32.3 74.7332 33.1 76.1333 33.1C76.8333 33.1 77.5333 32.9 78.1333 32.5C79.2332 31.4 79.8333 29.9 79.7333 28.3C79.7333 27.5 79.5333 26.7 79.2333 26C78.7333 24.7 77.4333 23.9 76.1333 24C75.5333 24 74.8333 24.2 74.3333 24.5C73.0333 25.4 72.4333 26.9 72.5333 28.4ZM68.3333 28.4C68.2333 26.4 68.9333 24.4 70.1333 22.9C71.3333 21.5 73.1333 20.7 74.9333 20.7C75.9333 20.7 76.9333 20.9 77.8333 21.3C78.1333 21.5 78.3333 21.7 78.6333 21.9C79.0333 22.3 79.3333 22.7 79.6333 23.2V21H83.6333V35.7C83.6333 37.1 83.3333 38.5 82.6333 39.7C82.2332 40.3 81.7332 40.8 81.1333 41.3C78.8333 42.6 76.2332 43 73.6333 42.5C72.1333 42.3 70.7333 41.5 69.8333 40.3C69.4333 39.8 69.1333 39.2 68.9333 38.6C68.8333 38.3 68.8333 38 68.8333 37.7H73.0333C73.1333 38.2 73.3333 38.7 73.7333 39C74.4333 39.5 75.3333 39.8 76.1333 39.7C77.7332 39.9 79.1333 38.7 79.4333 37.2C79.5332 36.1 79.6333 35 79.5333 33.8L79.1333 34.4C78.0333 35.6 76.5333 36.3 74.8333 36.3C73.0333 36.4 71.2333 35.6 70.0333 34.2C68.8333 32.9 68.3333 31.1 68.3333 28.4Z"
                        fill="white"
                      ></path>
                      <path
                        d="M77.4333 44.9C76.9333 44.9 76.5332 45.2 76.4333 45.7H78.1333C78.1333 45.3 78.0332 44.9 77.4333 44.9Z"
                        fill="white"
                      ></path>
                      <path
                        d="M49.0333 44.9C48.5333 44.9 48.1333 45.2 48.0333 45.7H49.7333C49.7333 45.3 49.6333 44.9 49.0333 44.9Z"
                        fill="white"
                      ></path>
                      <path
                        d="M87.0333 45.7H85.9333L85.6333 47.1H87.0333C87.4333 47.2 87.8333 46.8 87.9333 46.4V46.3C87.9333 45.7 87.4333 45.7 87.0333 45.7Z"
                        fill="white"
                      ></path>
                      <path
                        d="M61.9333 44.9C61.4333 44.9 61.0333 45.2 60.9333 45.7H62.6333C62.6333 45.3 62.5333 44.9 61.9333 44.9Z"
                        fill="white"
                      ></path>
                      <path
                        d="M72.9333 44.9C72.1333 44.9 71.8333 45.8 71.8333 46.5C71.7333 46.9 72.0333 47.3 72.5333 47.3H72.6333C73.4333 47.3 73.7333 46.4 73.7333 45.7C73.8333 45.3 73.5333 44.9 73.1333 44.9C73.0333 44.9 72.9333 44.9 72.9333 44.9Z"
                        fill="white"
                      ></path>
                      <path
                        d="M87.5333 43.7H86.3333L86.0333 44.9H87.3333C87.7333 44.9 88.0333 44.7 88.1333 44.3C88.1333 44.3 88.1333 44.3 88.1333 44.2C88.1333 43.8 87.9333 43.7 87.5333 43.7Z"
                        fill="white"
                      ></path>
                      <path
                        d="M42.3333 43.7H41.4333L40.7333 47H41.6333C42.6333 47 43.4333 46.1 43.4333 45.1V45C43.4333 44.2 43.1333 43.7 42.3333 43.7Z"
                        fill="white"
                      ></path>
                      <path
                        d="M104.933 44.9C104.433 44.9 104.033 45.2 103.933 45.7H105.633C105.633 45.3 105.533 44.9 104.933 44.9Z"
                        fill="white"
                      ></path>
                      <path
                        d="M114.833 40.7H34.6333C33.9333 40.7 33.3333 41.2 33.3333 42V49.2C33.3333 49.9 33.9333 50.5 34.6333 50.5H114.833C115.533 50.5 116.133 49.9 116.133 49.2V42C116.133 41.2 115.533 40.7 114.833 40.7ZM92.7333 42.8H93.7333L93.5333 43.7H92.5333L92.7333 42.8ZM91.3333 42.8H92.3333L92.1333 43.7H91.1333L91.3333 42.8ZM41.6333 48H39.4333L40.5333 42.8H42.4333C43.9333 42.8 44.6333 43.6 44.6333 44.8C44.8333 46.4 43.6333 47.8 42.0333 48C41.9333 48 41.7333 48 41.6333 48ZM45.8333 48H44.8333L45.6333 44.2H46.6333L45.8333 48ZM45.7333 43.6L45.9333 42.7H47.0333L46.8333 43.6H45.7333ZM50.6333 46.4H47.8333V46.6C47.8333 47 48.1333 47.3 48.6333 47.3C48.9333 47.3 49.2333 47.1 49.4333 46.8H50.4333C50.1333 47.6 49.3333 48.2 48.4333 48.1C47.6333 48.2 46.8333 47.6 46.7333 46.7C46.7333 46.6 46.7333 46.5 46.7333 46.4C46.6333 45.2 47.5333 44.2 48.7333 44.1C48.7333 44.1 48.7333 44.1 48.8333 44.1C49.7333 44 50.4333 44.6 50.5333 45.5C50.5333 45.6 50.5333 45.7 50.5333 45.8C50.7333 45.9 50.7333 46.2 50.6333 46.4ZM56.9333 48L56.8333 44.3L55.1333 48H54.0333L53.6333 42.8H54.7333L54.8333 46.6L56.4333 42.8H57.5333L57.6333 46.6L59.2333 42.8H60.3333L58.0333 48H56.9333ZM63.6333 46.4H60.8333V46.6C60.8333 47 61.1333 47.3 61.6333 47.3C61.9333 47.3 62.2333 47.1 62.4333 46.8H63.4333C63.1333 47.6 62.3333 48.2 61.4333 48.1C60.6333 48.2 59.8333 47.6 59.7333 46.7C59.7333 46.6 59.7333 46.5 59.7333 46.4C59.6333 45.2 60.5333 44.2 61.7333 44.1C61.7333 44.1 61.7333 44.1 61.8333 44.1C62.7333 44 63.4333 44.6 63.5333 45.5C63.5333 45.6 63.5333 45.7 63.5333 45.8C63.6333 45.9 63.6333 46.2 63.6333 46.4ZM64.9333 48H63.9333L65.0333 42.8H66.0333L64.9333 48ZM68.5333 44.9H67.8333L67.3333 46.8C67.3333 46.9 67.3333 46.9 67.3333 47C67.3333 47.3 67.5333 47.3 67.6333 47.3C67.7332 47.3 67.8333 47.3 68.0333 47.3L67.9333 48C67.7332 48 67.5333 48 67.2333 48C66.7333 48 66.2333 47.8 66.2333 47.2C66.2333 47.1 66.2333 47 66.2333 46.8L66.6333 44.8H65.9333L66.1333 44.1H66.8333L67.0333 43H68.0333L67.8333 44.1H68.5333V44.9ZM73.2333 48L73.3333 47.5C73.1333 47.9 72.6333 48.1 72.2333 48.1C71.5333 48.1 70.8333 47.6 70.8333 46.8C70.8333 46.7 70.8333 46.7 70.8333 46.6C70.6333 45.4 71.5333 44.3 72.7333 44.1H72.8333C73.2333 44.1 73.7332 44.3 73.9333 44.7L74.3333 43.1H75.3333L74.2333 48H73.2333ZM79.0333 46.4H76.2333V46.6C76.2333 47 76.5333 47.3 77.0333 47.3C77.3333 47.3 77.6333 47.1 77.8333 46.8H78.8333C78.5333 47.6 77.7333 48.2 76.8333 48.1C76.0333 48.2 75.2332 47.6 75.1333 46.7C75.1333 46.6 75.1333 46.5 75.1333 46.4C75.0333 45.2 75.9333 44.2 77.1333 44.1C77.1333 44.1 77.1333 44.1 77.2333 44.1C78.1333 44 78.8333 44.6 78.9333 45.5C78.9333 45.6 78.9333 45.7 78.9333 45.8C79.1333 45.9 79.0333 46.2 79.0333 46.4ZM82.3333 45.1C82.2333 45.1 82.0332 45 81.9333 45C81.1333 45 80.8333 45.6 80.7333 46.2L80.3333 48H79.3333L80.1333 44.2H81.1333L80.9333 44.9C81.1333 44.4 81.6333 44.1 82.2333 44.1C82.3333 44.1 82.4333 44.1 82.5333 44.1L82.3333 45.1ZM89.1333 46.3C89.1333 47.3 88.3333 48.1 87.3333 48C87.2333 48 87.2332 48 87.1333 48H84.3333L85.4333 42.8H87.6333C88.6333 42.8 89.3333 43 89.3333 44C89.3333 44.6 88.9333 45.1 88.3333 45.2C88.7333 45.3 89.1333 45.8 89.1333 46.3ZM93.1333 48H92.1333L92.2333 47.5C91.9333 47.9 91.4333 48.1 90.9333 48.1C90.2332 48.1 89.8333 47.7 89.8333 47.1C89.8333 46.9 89.9333 46.7 89.9333 46.5L90.4333 44.3H91.4333L90.9333 46.5C90.9333 46.7 90.8333 46.8 90.8333 47C90.8333 47.2 91.1333 47.4 91.3333 47.4C91.9333 47.4 92.2332 46.9 92.4333 46.4L92.8333 44.4H93.8333L93.1333 48ZM95.9333 47.3C96.3333 47.3 96.7333 47 96.7333 46.6H97.7333C97.5333 47.5 96.6333 48.1 95.7333 48C94.9333 48.1 94.1333 47.6 94.0333 46.7C94.0333 46.6 94.0333 46.5 94.0333 46.3C93.9333 45.1 94.8333 44.1 95.9333 44C96.0332 44 96.0333 44 96.1333 44C97.0333 44 97.8333 44.4 97.8333 45.4H96.8333C96.8333 45 96.6333 44.8 96.1333 44.8C95.3333 44.8 95.0333 45.8 95.0333 46.4C95.2333 46.9 95.4333 47.3 95.9333 47.3ZM102.133 45.8L101.633 48H100.633L101.133 45.8C101.133 45.7 101.233 45.5 101.233 45.3C101.233 45.1 100.933 44.9 100.733 44.9C100.133 44.9 99.7333 45.4 99.6333 45.9L99.2333 47.9H98.2333L99.3333 42.7H100.333L99.9333 44.6C100.233 44.2 100.733 44 101.133 44.1C101.833 44.1 102.233 44.5 102.233 45.1C102.233 45.3 102.133 45.6 102.133 45.8ZM106.533 46.4H103.733C103.733 46.5 103.733 46.5 103.733 46.6C103.733 47 104.033 47.3 104.533 47.3C104.833 47.3 105.133 47.1 105.333 46.8H106.333C106.033 47.6 105.233 48.2 104.333 48.1C103.533 48.2 102.733 47.6 102.633 46.8C102.633 46.7 102.633 46.6 102.633 46.5C102.533 45.3 103.433 44.3 104.633 44.2C104.633 44.2 104.633 44.2 104.733 44.2C105.633 44.1 106.333 44.7 106.433 45.6C106.433 45.7 106.433 45.8 106.433 45.9C106.633 45.9 106.633 46.2 106.533 46.4ZM109.933 45.1C109.833 45.1 109.633 45 109.533 45C108.733 45 108.433 45.6 108.333 46.2L107.933 48H106.833L107.633 44.2H108.633L108.433 44.9C108.633 44.4 109.133 44.1 109.733 44.1C109.833 44.1 109.933 44.1 110.033 44.1L109.933 45.1Z"
                        fill="white"
                      ></path>
                    </svg>
                    <h2 className="text-white text-lg text-center">
                      Hier bestellen
                    </h2>
                  </Link>
                  <Link
                    target="_"
                    href={
                      "https://www.thalia.de/shop/home/suggestartikel/A1068998533?sq=Goliath%20gegen%20alle&stype=productName"
                    }
                    className="flex flex-col gap-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="220"
                      height="65"
                      viewBox="0 0 220 65"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M175.3 30.6V31.9C174 30.8 172.3 30.1 170.5 30.1C165.7 30.3 161.9 34.3 162.1 39.1C162.3 43.7 165.9 47.4 170.5 47.5C172.3 47.5 173.9 46.8 175.3 45.6V47.1H180V30.6H175.3ZM171 43C169.3 43 167.8 42 167.1 40.4C166.2 38.3 167.2 35.9 169.3 35C171.4 34.1 173.8 35.1 174.7 37.2C174.9 37.7 175 38.3 175 38.8C175 41 173.2 42.9 171 43C171.1 43 171.1 43 171 43Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M98.5999 27.9H91.5999V47.2H86.1999V27.9H79.1999V23H98.6999L98.5999 27.9Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M156.1 22.6C157.2 22.6 158.2 23.3 158.7 24.3C159.3 25.7 158.7 27.3 157.3 27.9C156.6 28.2 155.8 28.2 155.1 27.9C153.7 27.3 153 25.7 153.6 24.3C154 23.3 155 22.6 156.1 22.6Z"
                        fill="white"
                      ></path>
                      <path
                        d="M148.7 23H143.8V47.1H148.7V23Z"
                        fill="white"
                      ></path>
                      <path
                        d="M158.6 30.6H153.7V47.2H158.6V30.6Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M110.8 30.2C109.1 30.1 107.5 30.6 106.1 31.6V23.1H101.2V47.2H106.1V37.9C106.1 36.1 107.6 34.8 109.3 34.8C111 34.8 112.4 36.2 112.4 37.9V47.1H117.4V36.8C117.5 33.1 114.5 30.2 110.8 30.2Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M134.1 30.6V31.9C132.8 30.8 131.1 30.1 129.3 30.1C124.5 30 120.5 33.8 120.3 38.6C120.2 43.4 124 47.4 128.8 47.6C129 47.6 129.1 47.6 129.3 47.6C131.1 47.6 132.8 46.9 134.1 45.7V47.2H138.8V30.6H134.1ZM129.9 43C128.2 43 126.7 42 126 40.4C125.4 38.9 125.7 37.1 126.9 35.9C128.1 34.7 129.9 34.4 131.4 35C133 35.7 134 37.2 134 38.9C134 41.2 132.2 43 129.9 43Z"
                        fill="white"
                      ></path>
                      <path
                        d="M47.4999 30.5C50.9999 30.7 54.4999 30 57.7999 28.6C58.6999 28.2 59.6999 27.9 60.5999 27.6C63.7999 26.6 64.3999 26.9 64.3999 26.9C64.0999 26.1 63.0999 26.1 60.9999 26.6C58.8999 27 57.7999 27.6 55.6999 27.9C53.7999 28.2 52.0999 26.8 51.7999 24.9C51.7999 24.7 51.7999 24.4 51.7999 24.2C53.8999 24.8 56.0999 24.6 58.0999 23.6C56.8999 23.6 55.8999 23.1 56.2999 21.4C58.5999 23.7 61.1999 20.6 63.5999 18.7C63.8999 18.5 64.0999 18.3 64.3999 18.1C64.6999 18 64.9999 17.8 65.3999 17.7L65.6999 17.6C66.6999 17.2 67.7999 17 68.8999 17C69.3999 17 69.8999 17.1 70.2999 17.4C70.3999 17.5 70.4999 17.7 70.3999 17.9C71.4999 18 72.3999 19.6 72.3999 20.6C72.7999 21 73.1999 21.3 73.6999 21.6C73.6999 21.6 73.7999 21.7 73.6999 21.7C73.6999 22 73.4999 22.3 73.1999 22.4V22.5C73.5999 22.6 73.4999 23 73.1999 23.1C73.2999 23.1 73.3999 23.2 73.3999 23.3C73.3999 23.4 73.3999 23.5 73.2999 23.6C73.1999 23.7 73.1999 23.7 73.1999 23.8C73.1999 24 73.3999 24 73.4999 24.3C73.5999 24.6 73.4999 24.9 73.2999 25.1C73.0999 25.2 72.7999 25.3 72.5999 25.3C71.7999 25.3 70.8999 25.5 70.1999 26C69.7999 26.3 69.4999 26.7 69.2999 27.1C69.2999 27.3 69.1999 27.4 69.1999 27.6C69.0999 28.2 69.1999 28.9 69.3999 29.5C70.0999 31.5 68.9999 34.3 65.9999 36.9C64.3999 38.3 59.3999 42.4 60.3999 47.8C60.3999 47.8 49.0999 44 52.2999 39.5C53.1999 38.2 55.1999 37.4 57.3999 36.4L57.5999 36.3C59.9999 35.2 61.5999 33.2 60.6999 31.9C60.4999 31.6 60.1999 31.5 59.8999 31.6C57.4999 32.2 50.8999 32 47.1999 31.6C46.7999 31.5 46.4999 31.5 46.0999 31.5H45.8999C45.1999 31.5 44.4999 31.4 43.7999 31.1C43.2999 30.8 42.6999 30.7 42.1999 30.6C41.7999 30.5 41.2999 30.5 41.2999 30.2C41.3999 29.6 42.5999 30.2 43.2999 30.1C43.2999 30.1 43.2999 30 43.1999 30C41.8999 29.5 40.7999 28.6 39.9999 27.5C39.8999 27.3 40.0999 27.1 40.1999 27.2C41.7999 28.6 43.7999 29.6 45.8999 30C46.2999 30.3 46.9999 30.4 47.4999 30.5Z"
                        fill="white"
                      ></path>
                    </svg>
                    <h2 className="text-white text-lg text-center">
                      Hier bestellen
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="w-screen h-fit flex justify-center items-center flex-col gap-5">
          <h1
            className="text-5xl text-center"
            style={{ fontFamily: b_dancing_script.style.fontFamily }}
          >
            Schritte unserer Zusammenarbeit im Coaching
          </h1>
          <img
            loading="lazy"
            src="/schritte_der_zusammenarbeit_behappy_coaching.png"
            alt="Schritte der Zusammenarbeit"
            className="w-screen"
          />
          <Link
            className="text-xl bg-primary text-sand hover:bg-secondary hover:text-primary transition-all duration-300 px-3 py-2 rounded-xl"
            style={{ fontFamily: poppins.style.fontFamily }}
            href={"/contact"}
          >
            Hier klicken um Kennenlerntermin zu buchen
          </Link>
        </section>
        <section className="w-screen h-fit justify-center items-center">
          <img
            loading="lazy"
            src="/resultate_behappy_coaching.png"
            alt="Resultate"
            className="w-screen"
          />
        </section>
        <CalendlyWidget />
      </div>
    </main>
  );
}

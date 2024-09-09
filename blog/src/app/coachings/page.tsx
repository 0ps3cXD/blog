import CalendlyWidget from "@/components/CalendlyWidget";
import Star from "@/components/Star";
import { Dancing_Script, Poppins } from "next/font/google";
import Link from "next/link";
const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"] });
const b_dancing_script = Dancing_Script({ weight: "700", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Coachings() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 md:gap-12 xl:gap-30 pt-[50px] pb-6">
      <img
        loading="lazy"
        src="/hero5.png"
        alt="BeHappyCoaching Hero 5"
        className="w-screen"
      />
      <section className="w-screen flex flex-col gap-[50px] justify-center items-center transition-all">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h1
            style={{ fontFamily: b_dancing_script.style.fontFamily }}
            className="font-sans text-6xl md:text-7xl font-bold mx-8 text-center px-2"
          >
            Psychologische Beratung, die zu dir passt
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
              Dr. iur. Caroline Bono
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
          <ul
            className="list-disc px-2"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            <li><span className="text-primary">Stress</span> und Überforderung</li>
            <li><span className="text-primary">Depression</span> oder depressive Verstimmung</li>
            <li>Angstzustände oder <span className="text-primary">Panikattacken</span></li>
            <li>Erschöpfung oder <span className="text-primary">Burnout</span></li>
            <li>Schwierigkeiten bei der <span className="text-primary">Zielverwirklichung</span></li>
            <li>Mangel an <span className="text-primary">Motivation</span></li>
            <li><span className="text-primary">Unzufriedenheit</span> im Beruf</li>
            <li>Schwierigkeiten bei der <span className="text-primary">Zeitplanung</span></li>
            <li>Gefühl der <span className="text-primary">Stagnation</span></li>
            <li>Fehlende Klarheit über <span className="text-primary">Lebensziele</span></li>
            <li>Schwierigkeiten beim Umgang mit <span className="text-primary">Veränderungen</span></li>
            <li>Schwierigkeiten bei der <span className="text-primary">Entscheidungsfindung</span></li>
            <li>Niedriges <span className="text-primary">Selbstwertgefühl</span></li>
            <li>Beziehungskonflikte oder <span className="text-primary">Kommunikationsprobleme</span></li>
            <li><span className="text-primary">Überwältigung</span> durch Aufgaben</li>
            <li>Schlafstörungen oder <span className="text-primary">Müdigkeit</span></li>
          </ul>
        </div>
      </section>
      <section className="w-screen h-fit justify-center items-center">
        <img
          loading="lazy"
          src="/resultate_behappy_coaching.png"
          alt="Resultate"
          className="w-screen"
        />
      </section>
      <section className="w-screen h-fit flex justify-center items-center flex-col gap-7 bg-secondary py-5 text-center px-2">
        <h1 className="text-4xl" style={{ fontFamily: dancing_script.style.fontFamily}}>
          &quot;Psychologische Beratung mit Qualität und das ohne
          Wartezeit&quot;
        </h1>
        <h2 className="text-neutral-900">Dr. iur. Caroline Bono, Psychologische Beraterin am Zürichsee</h2>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video src="/video.mov" controls className=""></video>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline gap-6 text-center">
          <div className="max-w-[300px] flex flex-col gap-2">
            <div className="flex justify-center items-center gap-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-bold text-primary">Rudolf</h3>
              <p>Und das in der Schweiz!</p>
            </div>
          </div>
          <div className="max-w-[300px] flex flex-col gap-2">
            <div className="flex justify-center items-center gap-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-bold text-primary">Helge Rafael</h3>
              <p>Caroline Bono-Hörler schildert sehr spannend</p>
            </div>
          </div>
          <div className="max-w-[300px] flex flex-col gap-2">
            <div className="flex justify-center items-center gap-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-bold text-primary">Claudia Luft-Steinma</h3>
              <p>Das Buch spricht mir aus der Seele!</p>
            </div>
          </div>
          <div className="max-w-[300px] flex flex-col gap-2">
            <div className="flex justify-center items-center gap-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-bold text-primary">Pauline Sprengler</h3>
              <p>
                Nachdem ich das Buch gelesen hatte, kannte ich Carolines
                Geschichte
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen h-fit flex justify-center items-center flex-col gap-5">
        <h1
          className="text-5xl text-center"
          style={{ fontFamily: b_dancing_script.style.fontFamily }}
        >
          Schritte unserer Zusammenarbeit in der psychologischen Beratung
        </h1>
        <img
          loading="lazy"
          src="/schritte_der_zusammenarbeit_behappy_coaching.png"
          alt="Schritte der Zusammenarbeit"
          className="w-screen"
        />
        <Link
          className="text-xl text-center mx-1 text-pretty bg-primary text-sand hover:bg-secondary hover:text-primary transition-all duration-300 px-3 py-2 rounded-xl"
          style={{ fontFamily: poppins.style.fontFamily }}
          href={"/contact"}
        >
          Hier klicken um Kennenlerntermin zu buchen
        </Link>
      </section>
      <section className="w-screen h-fit flex justify-center items-center">
        <img
          loading="lazy"
          src="/termin_720.png"
          alt="Termin"
          className="w-fit"
        />
      </section>
      <CalendlyWidget />
    </main>
  );
}

import Head from "next/head";
import { Bebas_Neue, Dancing_Script, Poppins, Playfair_Display } from "next/font/google";
import { InfiniteMovingCards } from "@/components/InfiniteCards";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"]});
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const b_poppins = Poppins({ weight: "500", subsets: ["latin"] });
const playfair_display = Playfair_Display({ weight: "400", subsets: ["latin"]});

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
    <main className="flex min-h-screen flex-col items-center justify-start gap-5 md:gap-12 xl:gap-36 px-12 pb-6 md:px-24">
      <Head>
        <title>BeHappyCoaching</title>
      </Head>
      <section className="w-screen flex items-center justify-center gap-8 md:gap-12" aria-label="hero">
        <img loading="lazy" src="/hero.png" alt="Hero" className="w-[96%] h-fit block rounded-xl" />
      </section>
      <div className="flex flex-col translate-y-[-50px] md:translate-y-[-100px] xl:translate-y-[-200px] gap-5 md:gap-7 xl:gap-[100px]">
        <section className="w-screen flex justify-center items-center transition-all"  aria-label="welcome">
          <div className="w-[95%] px-4 py-10 flex justify-center items-center flex-col bg-secondary rounded-xl gap-3 xl:gap-7" style={{}}>
            <h2 className="text-xl md:text-3xl xl:text-4xl text-primary-accent" style={{ fontFamily: dancing_script.style.fontFamily}}>Dein Weg zu einem erfüllten Leben</h2>
            <h1 className="text-xl text-center text-pretty md:text-4xl xl:text-5xl text-primary" style={{ fontFamily: b_poppins.style.fontFamily, fontWeight: 900 }}>Willkommen bei BeHappyCoaching&copy;</h1>
            <p className="md:text-lg xl:text-2xl max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily }}>Wie wäre es, wenn du ohne großen Aufwand phänomenale Veränderungen in deinem Leben erreichen könntest, die bisher unerreichbar schienen? Bei BeHappyCoaching bieten wir dir genau diese Möglichkeit. Stell dir vor, du könntest beruflich und privat erfolgreich und erfüllt sein, unabhängig von den äußeren Umständen. Mit den richtigen Tools und Methoden kannst du dein Leben mit Anmut und Freude dorthin lenken, wo du es haben möchtest.</p>
          </div>
        </section>
        
        <section className="w-screen flex justify-center items-center transition-all">
          <div className="w-[95%] px-4 py-10 flex justify-center items-center flex-col bg-secondary rounded-xl gap-3 xl:gap-7">
            <h1 className="text-xl md:text-3xl xl:text-4xl text-primary flex justify-center items-center gap-3" style={{ fontFamily: poppins.style.fontFamily}}>
              Worum es sich dreht
              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-accent size-7" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.567 9.098c-.059-.058-.127-.108-.206-.138-.258-.101-1.35.603-1.515.256-.108-.231-.327.148-.578.008-.121-.067-.459-.52-.611-.465-.312.112.479.974.694 1.087.203-.154.86-.469 1.002-.039.271.812-.745 1.702-1.264 2.171-.775.702-.63-.454-1.159-.86-.277-.213-.274-.667-.555-.824-.125-.071-.7-.732-.694-.821l-.017.167c-.095.072-.297-.27-.319-.325 0 .298.485.772.646 1.011.273.409.42 1.005.756 1.339.179.18.866.923 1.045.908l.921-.437c.649.154-1.531 3.237-1.738 3.619-.171.321.139 1.112.114 1.49-.029.437-.374.579-.7.817-.35.255-.268.752-.562.934-.521.321-.897 1.366-1.639 1.361-.219-.001-1.151.364-1.273.007-.095-.258-.223-.455-.356-.71-.131-.25-.015-.51-.175-.731-.11-.154-.479-.502-.513-.684-.002-.157.118-.632.283-.715.231-.118.044-.462.016-.663-.048-.357-.27-.652-.535-.859-.393-.302-.189-.542-.098-.974 0-.206-.126-.476-.402-.396-.57.166-.396-.445-.812-.417-.299.021-.543.211-.821.295-.349.104-.707-.083-1.053-.126-1.421-.179-1.885-1.804-1.514-2.976.037-.192-.115-.547-.048-.696.159-.352.485-.752.768-1.021.16-.152.365-.113.553-.231.29-.182.294-.558.578-.789.404-.328.956-.321 1.482-.392.281-.037 1.35-.268 1.518-.06 0 .039.193.611-.019.578.438.023 1.061.756 1.476.585.213-.089.135-.744.573-.427.265.19 1.45.275 1.696.07.152-.125.236-.939.053-1.031.117.116-.618.125-.686.099-.122-.044-.235.115-.43.025.117.055-.651-.358-.22-.674-.181.132-.349-.037-.544.109-.135.109.062.181-.13.277-.305.155-.535-.53-.649-.607-.118-.077-1.024-.713-.777-.298l.797.793c-.04.026-.209-.289-.209-.059.053-.136.02.585-.105.35-.056-.09.091-.14.006-.271 0-.085-.23-.169-.275-.228-.126-.157-.462-.502-.644-.585-.05-.024-.771.088-.832.111-.071.099-.131.203-.181.314-.149.055-.29.127-.423.216l-.159.356c-.068.061-.772.294-.776.303.03-.076-.492-.172-.457-.324.038-.167.215-.687.169-.877-.048-.199 1.085.287 1.158-.238.029-.227.047-.492-.316-.531.069.008.702-.249.807-.364.148-.169.486-.447.731-.447.286 0 .225-.417.356-.622.133.053-.071.38.088.512-.01-.104.45.057.494.033.105-.056.691-.023.601-.299-.101-.28.052-.197.183-.255-.02.008.248-.458.363-.456-.104-.089-.398.112-.516.103-.308-.024-.177-.525-.061-.672.09-.116-.246-.258-.25-.036-.006.332-.314.633-.243 1.075.109.666-.743-.161-.816-.115-.283.172-.515-.216-.368-.449.149-.238.51-.226.659-.48.104-.179.227-.389.388-.524.541-.454.689-.091 1.229-.042.526.048.178.125.105.327-.07.192.289.261.413.1.071-.092.232-.326.301-.499.07-.175.578-.2.527-.365 2.72 1.148 4.827 3.465 5.694 6.318zm-11.113-3.779l.068-.087.073-.019c.042-.034.086-.118.151-.104.043.009.146.095.111.148-.037.054-.066-.049-.081.101-.018.169-.188.167-.313.222-.087.037-.175-.018-.09-.104l.088-.108-.007-.049zm.442.245c.046-.045.138-.008.151-.094.014-.084.078-.178-.008-.335-.022-.042.116-.082.051-.137l-.109.032s.155-.668.364-.366l-.089.103c.135.134.172.47.215.687.127.066.324.078.098.192.117-.02-.618.314-.715.178-.072-.083.317-.139.307-.173-.004-.011-.317-.02-.265-.087zm1.43-3.547l-.356.326c-.36.298-1.28.883-1.793.705-.524-.18-1.647.667-1.826.673-.067.003.002-.641.36-.689-.141.021.993-.575 1.185-.805.678-.146 1.381-.227 2.104-.227l.326.017zm-5.086 1.19c.07.082.278.092-.026.288-.183.11-.377.809-.548.809-.51.223-.542-.439-1.109.413-.078.115-.395.158-.644.236.685-.688 1.468-1.279 2.327-1.746zm-5.24 8.793c0-.541.055-1.068.139-1.586l.292.185c.113.135.113.719.169.911.139.482.484.751.748 1.19.155.261.414.923.332 1.197.109-.179 1.081.824 1.259 1.033.418.492.74 1.088.061 1.574-.219.158.334 1.14.049 1.382l-.365.094c-.225.138-.235.397-.166.631-1.562-1.765-2.518-4.076-2.518-6.611zm14.347-5.823c.083-.01-.107.167-.107.167.033.256.222.396.581.527.437.157.038.455-.213.385-.139-.039-.854-.255-.879.025 0 .167-.679.001-.573-.175.073-.119.05-.387.186-.562.193-.255.38-.116.386.032-.001.394.398-.373.619-.399z"/></svg>
            </h1>
            <p className="md:text-lg xl:text-2xl max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>In unseren Coachings lernst du, wie du mit allen Lebenssituationen – selbst schweren Schicksalsschlägen – umgehen kannst und stets in deiner Mitte findest. Entdecke und verwirkliche dein volles Potenzial, aktiviere deine Selbstheilungskräfte und erfahre das Optimum an möglicher Heilung. Dein Weg zu einem glücklichen, erfüllten Leben beginnt hier.</p>
          </div>
        </section>
        <section className="w-screen flex justify-center items-center transition-all">
          <div className="w-[95%] px-4 py-10 flex justify-center items-center flex-col bg-secondary rounded-xl gap-3 xl:gap-7">
            <h1 className="text-xl text-center text-pretty md:text-5xl xl:text-7xl text-primary font-semibold" style={{ fontFamily: dancing_script.style.fontFamily}}>Themen, die wir behandeln</h1>
            <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Bei BeHappy Coaching decken wir eine breite Palette an Themen ab, um dir umfassend zur Seite zu stehen:</p>
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
          <div className="w-[95%] px-4 py-10 flex justify-center items-center flex-col bg-secondary rounded-xl gap-3 xl:gap-7">
              <h2 className="text-xl md:text-3xl text-primary-accent" style={{ fontFamily: dancing_script.style.fontFamily}}>Dein Investment in dich selbst</h2>
              <h1 className="text-xl text-center text-pretty md:text-4xl text-primary" style={{ fontFamily: poppins.style.fontFamily}}>Unsere Coaching-Angebote</h1>
              <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Jede unserer Coaching Sessions fängt mit 45 Minuten an, kann aber je nach Ziel erweitert werden. Diese Investition in dich selbst kann dir helfen, die Veränderungen in deinem Leben herbeizuführen, die du dir schon immer gewünscht hast. Egal, ob du berufliche oder private Ziele erreichen, emotionale oder körperliche Blockaden lösen oder einfach mehr Zufriedenheit im Alltag finden möchtest – wir sind hier, um dich auf deinem Weg zu unterstützen.</p>
              <p className="md:text-lg max-w-[90%] md:max-w-[60%] text-center text-pretty" style={{ fontFamily: poppins.style.fontFamily}}>Buche jetzt deine Sitzung und starte noch heute auf deinem Weg zu einem erfüllten Leben.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

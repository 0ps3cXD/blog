import { Dancing_Script, Poppins } from "next/font/google";

const b_dancing_script = Dancing_Script({ weight: "700", subsets: ["latin"]});
const poppins = Poppins({ weight: "400", subsets: ["latin"] });


export default function Impressum() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-5 md:gap-12 xl:gap-36 px-12 pb-6 md:px-24">
            <section className="flex flex-col gap-2">
                <h1 className="text-5xl text-center" style={{ fontFamily: b_dancing_script.style.fontFamily }}>Impressum</h1>
                <p className="text-center text-xl" style={{ fontFamily: poppins.style.fontFamily}}>BeHappyCoaching</p>
                <p className="text-center text-xl" style={{ fontFamily: poppins.style.fontFamily}}>Caroline Bono-Hörler</p>
                <p className="text-center text-xl" style={{ fontFamily: poppins.style.fontFamily}}>Am Zürichsee</p>
                <p className="text-center text-xl" style={{ fontFamily: poppins.style.fontFamily}}>Engelplatz, 8640, Rapperswil</p>
                <p className="text-center text-xl" style={{ fontFamily: poppins.style.fontFamily}}>Schweiz</p>
                <p className="text-center text-xl" style={{ fontFamily: poppins.style.fontFamily}}>Telefon: +41 793036655</p>
            </section>
        </main>
    )
}
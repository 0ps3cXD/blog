import Link from "next/link";

export default function notfound() {
    return (
        <main className="flex min-h-screen flex-col items-center md:items-start justify-center p-8 md:p-24">
            <div className="flex justify-center items-start flex-col gap-2">
                <h1 className="text-primary text-lg md:text-xl font-semibold">Entschuldigung, aber diese Seite konnte leider nicht gefunden werden...</h1>
                <Link href={"/"} className="bg-primary text-secondary p-2 rounded-md hover:bg-primary-accent transition-colors font-medium">Zurück zur Hauptseite</Link>
            </div>
        </main>
    )
}
export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-5 md:gap-12 xl:gap-36 px-12 pb-6 md:px-24">
            <section aria-label="map" className="w-screen">
            <iframe width="600" height="450" className="w-full" loading="lazy"
                data-src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJtRYp32akmkcRzRD23IiNajY&key=...">
                </iframe> 
            </section>
        </main>
    )
}
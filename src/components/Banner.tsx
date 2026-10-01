export default function Banner() {
    return (
        <section
            className="px-6 py-24 text-center text-white"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/img/hero.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                minHeight: "430px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <h1 className="text-4xl font-bold">
                where every event finds its venue
            </h1>
            <p className="mt-3 text-base">
                Discover the perfect venue for every occasion.
            </p>
        </section>
    );
}

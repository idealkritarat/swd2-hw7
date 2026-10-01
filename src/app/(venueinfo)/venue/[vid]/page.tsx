import { notFound } from "next/navigation";
import { venueById } from "@/data/venues";

export default async function VenuePage({ params }: { params: Promise<{ vid: string }> }) {
  const venue = venueById.get((await params).vid);

  if (!venue) notFound();

  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center bg-slate-100 px-5 py-12 text-slate-900 sm:px-8">
      <section className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-300/60">
        <img src={venue.imgSrc} alt={venue.venueName} className="h-72 w-full object-cover sm:h-[430px]" />
        <div className="p-7 sm:p-10">
          <p className="text-base text-slate-600">Venue {venue.vid}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">{venue.venueName}</h1>
        </div>
      </section>
    </main>
  );
}

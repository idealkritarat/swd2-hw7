import { notFound } from "next/navigation";
import { venueById } from "@/data/venues";

export default async function VenuePage({ params }: { params: Promise<{ vid: string }> }) {
  const venue = venueById.get((await params).vid);

  if (!venue) notFound();

  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <section className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow">
        <img src={venue.imgSrc} alt={venue.venueName} className="h-80 w-full object-cover" />
        <h1 className="p-6 text-3xl font-bold">{venue.venueName}</h1>
      </section>
    </main>
  );
}

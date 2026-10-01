"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <section className="relative h-[430px] overflow-hidden text-center text-white">
      <img
        src={covers[index]}
        alt="Venue banner"
        className="h-full w-full cursor-pointer object-cover brightness-50"
        onClick={() => setIndex((index + 1) % covers.length)}
      />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold">where every event finds its venue</h1>
        <p className="mt-3">Discover the perfect venue for every occasion.</p>
      </div>
      <button
        type="button"
        className="absolute bottom-6 right-6 rounded bg-blue-700 px-5 py-3 font-semibold"
        onClick={() => router.push("/venue")}
      >
        Select Venue
      </button>
    </section>
  );
}

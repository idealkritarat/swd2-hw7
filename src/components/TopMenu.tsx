import TopMenuItem from "./TopMenuItem";
import Link from "next/link";

export default function TopMenu() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-center border-b border-slate-800 bg-slate-950 px-5 text-white">
      <div className="w-full flex justify-around items-center gap-8">
        <Link href="/" className="text-base font-bold tracking-wide">
          Venue Explorer
        </Link>
        <nav className="flex items-center gap-1">
          <TopMenuItem title="Venues" pageRef="/venue" />
          <TopMenuItem title="Booking" pageRef="/booking" />
        </nav>
      </div>
    </header>
  );
}

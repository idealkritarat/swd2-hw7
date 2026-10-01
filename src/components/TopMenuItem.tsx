import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  pageRef: string;
};

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      className="rounded px-3 py-2 text-base font-bold text-blue-700 hover:bg-slate-100"
      style={{ color: "#1d4ed8", fontWeight: "700" }}
    >
      {title}
    </Link>
  );
}

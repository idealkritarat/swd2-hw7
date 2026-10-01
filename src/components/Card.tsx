import Rating from "@mui/material/Rating";
import Link from "next/link";
import InteractiveCard from "./InteractiveCard";

type CardProps = {
  vid: string;
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (rating: number) => void;
};

export default function Card({
  vid,
  venueName,
  imgSrc,
  rating,
  onRatingChange,
}: CardProps) {
  return (
    <InteractiveCard>
      <Link href={`/venue/${vid}`} className="block">
        <img
          src={imgSrc}
          alt={venueName}
          width={480}
          height={320}
          className="h-52 w-full object-cover"
        />
        <h2 className="px-4 pt-4 text-lg font-bold text-blue-700 underline">
          {venueName}
        </h2>
      </Link>
      <div className="p-4">
        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={(_event, newValue) => {
            onRatingChange(newValue ?? 0);
          }}
        />
      </div>
    </InteractiveCard>
  );
}

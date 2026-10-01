import Rating from "@mui/material/Rating";
import InteractiveCard from "./InteractiveCard";

type CardProps = {
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (rating: number) => void;
};

export default function Card({
  venueName,
  imgSrc,
  rating,
  onRatingChange,
}: CardProps) {
  return (
    <InteractiveCard>
      <img
        src={imgSrc}
        alt={venueName}
        width={480}
        height={320}
        className="h-52 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-blue-700 underline">
          {venueName}
        </h2>
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

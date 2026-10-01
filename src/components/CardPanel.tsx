"use client";

import { useReducer } from "react";
import Card from "@/components/Card";

type Venue = {
  vid: string;
  venueName: string;
  imgSrc: string;
};

const venues: Venue[] = [
  { vid: "001", venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  { vid: "002", venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
  { vid: "003", venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" },
];

type RatingsMap = Map<string, number>;

type RatingAction =
  | { type: "SET_RATING"; venueName: string; rating: number }
  | { type: "REMOVE_VENUE"; venueName: string };

function ratingsReducer(state: RatingsMap, action: RatingAction): RatingsMap {
  const next = new Map(state);
  switch (action.type) {
    case "SET_RATING":
      next.set(action.venueName, action.rating);
      return next;
    case "REMOVE_VENUE":
      next.delete(action.venueName);
      return next;
    default:
      return state;
  }
}

function initRatings(venueList: Venue[]): RatingsMap {
  return new Map(venueList.map((venue) => [venue.venueName, 0]));
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, venues, initRatings);

  return (
    <section className="mx-auto max-w-5xl px-5 pt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {venues.map((venue) => (
          <Card
            key={venue.vid}
            vid={venue.vid}
            venueName={venue.venueName}
            imgSrc={venue.imgSrc}
            rating={ratings.get(venue.venueName) ?? 0}
            onRatingChange={(rating) =>
              dispatch({ type: "SET_RATING", venueName: venue.venueName, rating })
            }
          />
        ))}
      </div>

      <div className="mt-8 pb-10">
        <h3 className="text-lg font-bold text-slate-900">
          Venue List with Ratings : {ratings.size}
        </h3>
        <ul>
          {Array.from(ratings.entries()).map(([venueName, rating]) => (
            <li
              key={venueName}
              data-testid={venueName}
              onClick={() => dispatch({ type: "REMOVE_VENUE", venueName })}
              className="cursor-pointer py-1 text-slate-700 hover:text-blue-700"
            >
              {venueName} Rating : {rating}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

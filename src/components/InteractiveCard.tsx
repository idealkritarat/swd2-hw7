"use client";

import { ReactNode, useState } from "react";

type InteractiveCardProps = {
  children: ReactNode;
};

export default function InteractiveCard({ children }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-lg transition-shadow duration-200 ${
        isHovered ? "bg-neutral-200 shadow-2xl" : "bg-white shadow-lg"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}

"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  function handleClick() {
    setLikes((prev) => prev + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="w-fit rounded border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-100"
    >
      ❤ {likes}
    </button>
  );
}

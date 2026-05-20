import { useState } from "react";

//icons
import { SmallCat } from "../../assets/social-images/SmallCat.tsx";
import { BigCat } from "../../assets/social-images/BigCat.tsx";

export function SocialsMiddle() {
  const [middleSize, setMiddleSize] = useState<"big" | "small">("big");

  const handleMiddleSize = () => {
    setMiddleSize((prev) => (prev === "big" ? "small" : "big"));
  };

  return (
    <>
      <li
        className="cat-container aspect-square cursor-pointer select-none flex items-center justify-center"
        onClick={handleMiddleSize}
        aria-label="interactive cat that has no purpose other than to just be clicked"
      >
        {middleSize === "big" ? (
          <BigCat aria-label="big cat" />
        ) : (
          <SmallCat aria-label="small cat" />
        )}
      </li>
    </>
  );
}

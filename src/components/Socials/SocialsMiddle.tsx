import { useState } from 'react';

//icons
import { SmallCat } from '../../assets/social-images/SmallCat.tsx';
import { BigCat } from '../../assets/social-images/BigCat.tsx';

export function SocialsMiddle() {
  const [middleSize, setMiddleSize] = useState<'big' | 'small'>('small');

  const handleMiddleSize = () => {
    setMiddleSize((prev) => (prev === 'big' ? 'small' : 'big'));
  };

  return (
    <>
      <li
        className="cat-container aspect-square cursor-pointer select-none flex items-center justify-center"
        onClick={handleMiddleSize}
      >
        {middleSize === 'big' ? <BigCat /> : <SmallCat />}
      </li>
    </>
  );
}

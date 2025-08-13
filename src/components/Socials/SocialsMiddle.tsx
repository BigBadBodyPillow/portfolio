import { useState } from 'react';

//icons
import { SmallCat } from '../../assets/SmallCat.tsx';
import { BigCat } from '../../assets/BigCat.tsx';

export function SocialsMiddle() {
  const [middleSize, setMiddleSize] = useState<'big' | 'small'>('small');

  const handleMiddleSize = () => {
    setMiddleSize((prev) => (prev === 'big' ? 'small' : 'big'));
  };

  return (
    <>
      <li
        className="aspect-square cursor-pointer select-none flex items-center justify-center"
        onClick={handleMiddleSize}
      >
        {middleSize === 'big' ? <BigCat /> : <SmallCat />}
      </li>
    </>
  );
}

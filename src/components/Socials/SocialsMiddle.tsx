import { useState } from 'react';

export function SocialsMiddle() {
  const [middleSize, setMiddleSize] = useState<'big' | 'small'>('big');

  const handleMiddleSize = () => {
    setMiddleSize((prev) => (prev === 'big' ? 'small' : 'big'));
  };

  return (
    <>
      <li
        className="aspect-square cursor-pointer select-none"
        onClick={handleMiddleSize}
      >
        {middleSize === 'big' ? 'MIDLE' : 'midle'}
      </li>
    </>
  );
}

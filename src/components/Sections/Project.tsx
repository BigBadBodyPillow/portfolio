import { useRef, useEffect, useState } from 'react';

interface ProjectProps {
  image: string;
  lightImage: string;
  title: string;
  link: string;
  description: string;
}

export function Project({
  image,
  lightImage,
  title,
  link,
  description,
}: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y - rect.height / 2) / 10;
      const rotateY = (rect.width / 2 - x) / 10;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(0)
      `;

      // Add parallax effect to inner elements
      const elements = card.querySelectorAll('img, a, p');
      elements.forEach((element, index) => {
        const zHeight = [20, 10, 7][index] || 0;
        (element as HTMLElement).style.transform = `translateZ(${zHeight}px)`;
      });
    };

    const handleMouseLeave = () => {
      card.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';

      const elements = card.querySelectorAll('img, a, p');
      elements.forEach((el) => {
        (el as HTMLElement).style.transform = '';
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={cardRef}
      className="project p-2 pb-4 border border-[var(--border-colour)] rounded-lg cursor-grab"
      data-reduced-motion={prefersReducedMotion}
    >
      <picture>
        <source srcSet={lightImage} media="(prefers-color-scheme:light)" />
        <img
          src={image}
          alt={`preview of ${title}`}
          className="object-cover w-full aspect-[16/9] bg-[var(--border-colour)] border-1 border-[var(--border-colour)] rounded-sm mb-4 select-none"
          draggable="false"
        />
      </picture>
      <a
        className="font-semibold w-full"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <p className="text-sm font-[Roboto_mono]">{description}</p>
    </div>
  );
}

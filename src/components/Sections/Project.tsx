import { useRef, useEffect, useState } from "react";

// svg
import ExternalLink from "../../assets/ExternalLink.svg?react";

interface ProjectProps {
  image: string;
  lightImage?: string;
  title: string;
  link: string;
  demo?: string;
  description: string;
}

export function Project({
  image,
  lightImage,
  title,
  link,
  demo,
  description,
}: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // distance on z axis for elements
  const titleHeight = 10;
  const paragraphHeight = 7;

  // check for reduced motion status and touch device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touchQuery = window.matchMedia("(hover: none)");
    setPrefersReducedMotion(mediaQuery.matches);
    setIsTouchDevice(touchQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    const handleTouchChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    touchQuery.addEventListener("change", handleTouchChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      touchQuery.removeEventListener("change", handleTouchChange);
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    // stop if user has prefers reduced motion or is on a touch device
    if (!card || prefersReducedMotion || isTouchDevice) return;

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
      const elements = card.querySelectorAll("a, p");

      elements.forEach((element, index) => {
        const zHeight = [titleHeight, paragraphHeight][index] || 0;
        (element as HTMLElement).style.transform = `translateZ(${zHeight}px)`;
      });
    };

    const handleMouseLeave = () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";

      const elements = card.querySelectorAll("a, p");

      elements.forEach((element) => {
        (element as HTMLElement).style.transform = "";
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion, isTouchDevice]);

  return (
    <div
      ref={cardRef}
      className="project p-2 pb-4 border border-[var(--border-colour)] rounded-lg cursor-grab"
      data-reduced-motion={prefersReducedMotion}
    >
      <div className="image-wrapper relative">
        <picture>
          <source srcSet={lightImage} media="(prefers-color-scheme:light)" />
          <img
            src={image}
            alt={`preview of ${title}`}
            // 960/493 is the lowest denomination of 1920/986 which is the image dimesnions
            className="object-contain w-full aspect-[960/493] bg-[var(--border-colour)] border-1 border-[var(--border-colour)] rounded-sm mb-4 select-none"
            draggable="false"
          />
          <a
            aria-label="demo link"
            className="demo-link rounded-lg bg-white absolute right-[10px] bottom-[10px] p-1 shadow-md  transform hover:scale-[1.2] transition-transform duration-200 ease-out"
            target="_blank"
            rel="noopener noreferrer"
            href={demo}
          >
            <ExternalLink />
          </a>
        </picture>
      </div>
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

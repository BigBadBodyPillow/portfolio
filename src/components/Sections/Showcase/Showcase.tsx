import { useRef, useEffect, useState } from "react";

// svg
import ExternalLink from "../../../assets/ExternalLink.svg?react";

import "./Showcase.css";

type tag =
  | "JavaScript"
  | "HTML"
  | "CSS"
  | "Tailwind"
  | "Vue"
  | "React"
  | "Svelt"
  | "Angular";

type tags = tag[];

interface Props {
  image: string;
  lightImage?: string;
  title: string;
  link: string;
  demo?: string;
  description: string;
  tags?: tags;
}

export function Showcase({
  image,
  lightImage,
  title,
  link,
  demo,
  description,
  tags,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // distance on z axis for elements
  const titleHeight = 20;
  const externalLinkHeight = 0; /* fix not working? */
  const paragraphHeight = 15;
  const tagsHeight = 20;

  // Add parallax effect to inner elements
  function addElementParrallax(parent: HTMLDivElement) {
    const titleElement = parent.querySelector(".title");
    const descriptionElement = parent.querySelector(".description");
    const demoLinkElement = parent.querySelector(".demo-link");
    const tagsElement = parent.querySelector(".tags");

    if (titleElement) {
      (titleElement as HTMLElement).style.transform =
        `translateZ(${titleHeight}px)`;
    }

    if (demoLinkElement) {
      (demoLinkElement as HTMLElement).style.transform =
        `translateZ(${externalLinkHeight}px)`;
    }

    if (descriptionElement) {
      (descriptionElement as HTMLElement).style.transform =
        `translateZ(${paragraphHeight}px)`;
    }
    if (tagsElement) {
      (tagsElement as HTMLElement).style.transform =
        `translateZ(${tagsHeight}px)`;
    }
  }

  // remove parallax effect from inner elements
  function removeElementParrallax(parent: HTMLDivElement) {
    const titleElement = parent.querySelector(".title");
    const descriptionElement = parent.querySelector(".description");
    const demoLinkElement = parent.querySelector(".demo-link");
    const tagsElement = parent.querySelector(".tags");

    if (titleElement) {
      (titleElement as HTMLElement).style.transform = "";
    }

    if (demoLinkElement) {
      (demoLinkElement as HTMLElement).style.transform = "";
    }

    if (descriptionElement) {
      (descriptionElement as HTMLElement).style.transform = "";
    }

    if (tagsElement) {
      (tagsElement as HTMLElement).style.transform = "";
    }
  }

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

      addElementParrallax(card);
    };

    const handleMouseLeave = () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";

      removeElementParrallax(card);
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
      className="showcase p-2 pb-4 border border-(--border-colour) rounded-lg cursor-grab flex flex-col justify-between"
      data-reduced-motion={prefersReducedMotion}
    >
      <div className="image-title-and-description">
        <div className="image-wrapper relative">
          <picture>
            <source srcSet={lightImage} media="(prefers-color-scheme:light)" />
            <img
              src={image}
              alt={`preview of ${title}`}
              // aspect ratio is my browser without the top bar
              className="object-cover  w-full aspect-[1.90193164933] bg-(--border-colour) border-2 border-(--border-colour) rounded-sm mb-4 select-none"
              draggable="false"
            />
          </picture>
          {demo && (
            <a
              aria-label={`link to demo of ${title}`}
              className="demo-link  rounded-lg bg-white hover:bg-(--accent-colour) absolute right-2.5 bottom-2.5 p-1 shadow-md  transform hover:scale-[1.2] transition-transform duration-200 ease-out"
              target="_blank"
              rel="noopener noreferrer"
              href={demo}
            >
              <ExternalLink aria-label={`image for link to demo of ${title}`} />
            </a>
          )}
          {/* <a
            aria-label={`link to demo of ${title}`}
            className="demo-link  rounded-lg bg-white hover:bg-(--accent-colour) absolute right-2.5 bottom-2.5 p-1 shadow-md  transform hover:scale-[1.2] transition-transform duration-200 ease-out"
            target="_blank"
            rel="noopener noreferrer"
            href={demo}
          >
            <ExternalLink aria-label={`image for link to demo of ${title}`} />
          </a> */}
        </div>
        <div className="title-and-description">
          <a
            className="title font-semibold w-full "
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
          <p className="description text-sm font-[Roboto_mono] text-pretty ">
            {description}
          </p>
        </div>
      </div>

      {tags && (
        <div className="tags text-xs font-[Roboto_mono] flex gap-2.5 mt-2">
          {tags.map((tag) => (
            <div key={tag} className={`tag ${tag} px-3 py-1 rounded-full `}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

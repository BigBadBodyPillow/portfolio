//components
import { Showcase } from "./Showcase/Showcase.tsx";
// import More from "../More.tsx";

//public images
import eCommerce1 from "/template-images/eCommerce1.webp";
// import Buttons from "/template-images/Buttons.webp";
// import ButtonsLight from "/template-images/ButtonsLight.webp";
import Template2 from "/template-images/Template2.webp";
import Template2Light from "/template-images/Template2Light.webp";
import Aetherfield from "/template-images/Aetherfield.webp";
import Application from "/template-images/Application.webp";

//types
import type { tags } from "../../types";

const showcases = [
  {
    image: Aetherfield,
    lightImage: undefined,
    title: "Modern, Clean SaaS Company",
    link: "https://github.com/BigBadBodyPillow/template-3",
    demo: "https://bigbadbodypillow.github.io/template-3/",
    description: "Built from a figma file.",
    tags: ["React", "Tailwind"] as tags,
  },
  {
    image: Template2,
    lightImage: Template2Light,
    title: "Corporate Home Page",
    link: "https://github.com/BigBadBodyPillow/Template-2",
    demo: "https://bigbadbodypillow.github.io/template-2/",
    description: "A corporate home page, inspired by Microsofts .NET.",
    tags: ["React", "Tailwind"] as tags,
  },
  {
    image: eCommerce1,
    lightImage: undefined,
    title: "eCommerce Website 1",
    link: "https://github.com/BigBadBodyPillow/eCommerce-Template-1",
    demo: "https://bigbadbodypillow.github.io/eCommerce-Template-1",
    description: "Simple eCommerce template.",
    tags: ["Vue", "CSS"] as tags,
  },
  {
    image: Application,
    lightImage: undefined,
    title: "Application Showcase Landing Page",
    link: "https://github.com/BigBadBodyPillow/app-landing-page",
    demo: "https://bigbadbodypillow.github.io/app-landing-page/",
    description: "Simple eCommerce template.",
    tags: ["Svelte", "CSS"] as tags,
  },
];

export function Templates() {
  return (
    <>
      <div className="templates-content  text-container">
        <h2 className="text-4xl font-bold mb-4 pl-1">Templates</h2>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* tag options: JavaScript, HTML, CSS, Vue, React, Svelt, Angular */}
          {showcases.map((showcase) => {
            return (
              <Showcase
                image={showcase.image}
                lightImage={showcase.lightImage}
                title={showcase.title}
                link={showcase.link}
                demo={showcase.demo}
                description={showcase.description}
                tags={showcase.tags}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

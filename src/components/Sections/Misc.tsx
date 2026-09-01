import { Showcase } from "./Showcase/Showcase";

const showcases = [
  {
    title: "Snippets",
    link: "https://github.com/BigBadBodyPillow/snippets",
    demo: "https://bigbadbodypillow.github.io/snippets/",
    description:
      "A collection of components or snippets that i would prefer to not forget about",
  },
  {
    title: "Drawing",
    link: "https://github.com/BigBadBodyPillow/Drawing",
    demo: "https://bigbadbodypillow.github.io/Drawing/",
    description:
      "Images / svgs / graphics created solely in html and css for fun",
  },
  {
    title: "Draggable",
    link: "https://github.com/BigBadBodyPillow/draggable",
    demo: "https://bigbadbodypillow.github.io/draggable/",
    description:
      "A challenge to create a draggable element without looking at a reference",
  },
];

export function Misc() {
  return (
    <>
      <div className="projects-content  text-container">
        <h2 className="text-4xl font-bold mb-4 pl-1">Misc</h2>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {showcases.map((showcase) => {
            return (
              <Showcase
                title={showcase.title}
                link={showcase.link}
                demo={showcase.demo}
                description={showcase.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

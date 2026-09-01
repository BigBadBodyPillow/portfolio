//components
import { Showcase } from "./Showcase/Showcase.tsx";
// import More from "../More.tsx";

// images
// import Portfolio from "/project-images/Portfolio.webp";
// import PortfolioLight from "/project-images/PortfolioLight.webp";
import iTunesMediaCatalogue from "/project-images/iTunesMediaCatalogue.webp";
import MaintenanceManager from "/project-images/MaintenanceManager.webp";
import ToDo from "/project-images/ToDo.webp";
import EventManager from "/project-images/EventManager.webp";
import Sudoku from "/project-images/Sudoku.webp";
import SudokuLight from "/project-images/SudokuLight.webp";
import Notes from "/project-images/Notes.webp";
import NotesLight from "/project-images/NotesLight.webp";

const showcases = [
  {
    image: Notes,
    lightImage: NotesLight,
    title: "Notes",
    link: "https://github.com/BigBadBodyPillow/Notes",
    demo: "https://bigbadbodypillow.github.io/Notes/",
    description:
      'An "all in one" Notes, Calculator, Timer, and Clock application built to resolve personal minor  inconveniences. leverage Lexical for the rich text editor and react-draggable for the movable calculator. Built with react. Supports dark and light themes and is mobile friendly',
  },

  {
    image: Sudoku,
    lightImage: SudokuLight,
    title: "Sudoku Clone",
    link: "https://github.com/BigBadBodyPillow/sudoku-clone",
    demo: "https://bigbadbodypillow.github.io/sudoku-clone/",
    description:
      "A fully interactive Sudoku game built with React and TypeScript, featuring advanced gameplay enhancements; Players can add notes for strategic solving, switch between custom fonts, and toggle light/dark themes for a personalised experience.",
  },
  {
    image: iTunesMediaCatalogue,
    lightImage: undefined,
    title: "iTunes Media Catalogue",
    link: "https://github.com/BigBadBodyPillow/Media-catalogue",
    demo: "https://itunesmedia.onrender.com/",
    description:
      "Built to utilise the itunes API, this project allows users to search for media and view details about it. It is  built with React, Tailwind, Express.",
  },
  {
    image: MaintenanceManager,
    lightImage: undefined,
    title: "Maintenance Manager",
    link: "https://github.com/BigBadBodyPillow/maintenance-manager",
    demo: undefined,
    description:
      "A web application designed to help users manage and track maintenance tasks. Its features include user authentication and task management. It is built with React, Tailwind, Express, and MongoDB.",
  },
  {
    image: ToDo,
    lightImage: undefined,
    title: "To-Do list",
    link: "https://github.com/BigBadBodyPillow/todo-list",
    demo: undefined,
    description:
      "A Full-Stack web application that allows users to manage their tasks efficiently. Users can perform basic CRUD opperations as well as log-in, and register. The Front end is built with React, Formik and Axios, while the backend is built with Express and mongoose.",
  },
  {
    image: EventManager,
    lightImage: undefined,
    title: "Event Planner",
    link: "https://github.com/BigBadBodyPillow/event-manager",
    demo: undefined,
    description:
      "A web application designed to help users manage and track events. Its features include user authentication, event management, and a calendar view. It is built with React, Tailwind, Express, and MongoDB.",
  },
];
export function Projects() {
  return (
    <>
      <div className="projects-content  text-container">
        <h2 className="text-4xl font-bold mb-4 pl-1">Projects</h2>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {showcases.map((showcase) => {
            return (
              <Showcase
                image={showcase.image}
                lightImage={showcase.lightImage}
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

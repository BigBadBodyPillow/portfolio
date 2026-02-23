//components
import { Project } from "./Project.tsx";

//css
import "./Projects.css";

// images
import Portfolio from "/project-images/Portfolio.webp";
import PortfolioLight from "/project-images/PortfolioLight.webp";
import iTunesMediaCatalogue from "/project-images/iTunesMediaCatalogue.webp";
import MaintenanceManager from "/project-images/MaintenanceManager.webp";
import ToDo from "/project-images/ToDo.webp";
import EventManager from "/project-images/EventManager.webp";
import Sudoku from "/project-images/Sudoku.webp";
import SudokuLight from "/project-images/SudokuLight.webp";
// import Utility from "/project-images/Utility.webp";

export function Projects() {
  return (
    <>
      <div className="projects-content  text-container">
        <h2 className="text-4xl font-bold mb-4 pl-1">Projects</h2>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* Sudoku clone */}
          <Project
            image={Sudoku}
            lightImage={SudokuLight}
            title="Sudoku Clone"
            link="https://github.com/BigBadBodyPillow/sudoku-clone"
            demo="https://bigbadbodypillow.github.io/sudoku-clone/"
            description="A sudoku  game built with react. Additonally allows note taking ,changing theme colours, changing font, and font size. "
          ></Project>
          {/* Portfolio */}
          <Project
            image={Portfolio}
            lightImage={PortfolioLight}
            title="Portfolio"
            link="https://github.com/BigBadBodyPillow/portfolio"
            description="This Portfolio, built with Typescript React and Tailwind."
          ></Project>
          {/* iTunes Media Catalogue */}
          <Project
            image={iTunesMediaCatalogue}
            title="iTunes Media Catalogue"
            link="https://github.com/BigBadBodyPillow/Media-catalogue"
            demo="https://itunesmedia.onrender.com/"
            description="Built to utilise the itunes API, this project allows users to search for media and view details about it. It is  built with React, Tailwind, Express."
          ></Project>
          {/* Maintenance Manager */}
          <Project
            image={MaintenanceManager}
            title="Maintenance Manager"
            link="https://github.com/BigBadBodyPillow/maintenance-manager"
            description="A web application designed to help users manage and track maintenance tasks. Its features include user authentication and task management. It is built with React, Tailwind, Express, and MongoDB."
          ></Project>
          {/* todo */}
          <Project
            image={ToDo}
            title="To-Do list"
            link="https://github.com/BigBadBodyPillow/todo-list"
            description="A Full-Stack web application that allows users to manage their tasks efficiently. Users can perform basic CRUD opperations as well as log-in, and register. The Front end is built with React, Formik and Axios, while the backend is built with Express and mongoose"
          ></Project>
          {/* Event managerEventManager */}
          <Project
            image={EventManager}
            title="Event Manager"
            link="https://github.com/BigBadBodyPillow/event-manager"
            description="A web application designed to help users manage and track events. Its features include user authentication, event management, and a calendar view. It is built with React, Tailwind, Express, and MongoDB."
          ></Project>
          {/* utility */}
          {/* <Project
            image={Utility}
            lightImage=""
            title="Utility(Work in Progress)"
            link="https://github.com/BigBadBodyPillow/utility"
            description="A personal utility app that combines many of my personal commonly used tools into one. Specifically the purpose is just because it gets kinda annoying opening google sheets / a calculaotor and then other websites"
          ></Project> */}

          {/* more */}
          <div className="border border-[var(--border-colour)] rounded-lg flex justify-center items-center  bg-[rgb(235,235,235)] dark:bg-[rgb(20,20,20)] select-none cursor-not-allowed h-[200px] z-1">
            <h3 className="dark:text-[rgb(91,91,91)] text-[#858585] ">
              more
              <span className="dots">.</span>
              <span className="dots">.</span>
              <span className="dots">.</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

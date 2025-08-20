//components
import { Project } from './Project.tsx';
//css
import './Projects.css';

// webp
import portfolio from '../../assets/project-images/reduced/Portfolio.webp';
import portfolio_light from '../../assets/project-images/reduced/Portfolio_light.webp';
import iTunesMediaCatalogue from '../../assets/project-images/reduced/iTunesMediaCatalogue.webp';
import maintenanceManager from '../../assets/project-images/reduced/MaintenanceManager.webp';
import todo from '../../assets/project-images/reduced/ToDo.webp';
import eventManager from '../../assets/project-images/reduced/EventManager.webp';

export function Projects() {
  return (
    <>
      <div className="projects-content  text-container">
        <h2 className="text-4xl font-bold mb-4 pl-1">Projects</h2>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* Portfolio */}
          <Project
            image={portfolio}
            lightImage={portfolio_light}
            title="Portfolio"
            link="https://github.com/BigBadBodyPillow/portfolio"
            description="Portfolio description"
          ></Project>
          {/* iTunes Media Catalogue */}
          <Project
            image={iTunesMediaCatalogue}
            lightImage=""
            title="iTunes Media Catalogue"
            link="https://github.com/BigBadBodyPillow/Media-catalogue"
            description="Description of iTunes Media Catalogue"
          ></Project>
          {/* Maintenance Manager */}
          <Project
            image={maintenanceManager}
            lightImage=""
            title="Maintenance Manager"
            link="https://github.com/BigBadBodyPillow/maintenance-manager"
            description="Description of Maintenance Manager "
          ></Project>
          {/* todo */}
          <Project
            image={todo}
            lightImage=""
            title="To-Do list"
            link="https://github.com/BigBadBodyPillow/todo-list"
            description="Description of To-Do "
          ></Project>
          {/* Event managerEventManager */}
          <Project
            image={eventManager}
            lightImage=""
            title="Event Manager"
            link="https://github.com/BigBadBodyPillow/event-manager"
            description="Event Manager"
          ></Project>

          {/* more */}
          <div className="border border-[var(--border-colour)] rounded-lg flex justify-center items-center  bg-[rgb(235,235,235)] dark:bg-[rgb(20,20,20)] select-none cursor-not-allowed min-h-[200px] z-1">
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

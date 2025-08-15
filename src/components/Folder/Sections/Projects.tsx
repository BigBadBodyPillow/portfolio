//components
import { Project } from './Project/Project.tsx';
//css
import './Projects.css';

export function Projects() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {/* <div className="p-4 border border-[var(--border-colour)] rounded-lg">
          <h3 className="font-semibold ">Portfolio Website</h3>
          <p className="text-sm ">
            A modern, responsive portfolio built with React and TypeScript
          </p>
        </div> */}
        {/* <div className="p-4 border border-[var(--border-colour)] rounded-lg">
          <h3 className="font-semibold ">Project 2</h3>
          <p className="text-sm ">Description of second project</p>
        </div> */}
        <Project
          image="https://plus.unsplash.com/premium_photo-1749751600727-3fb5c8af5c29?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Portfolio Website"
          description="A modern, responsive portfolio built with React and TypeScript"
        ></Project>
        <Project
          image="https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Project 2"
          description="Description of second project"
        ></Project>
        <Project
          image="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Project 3"
          description="Description of 3rd project. Description of 3rd project. Description of 3rd project. Description of 3rd project. Description of 3rd project. Description of 3rd project. Description of 3rd project. Description of 3rd project. Description of 3rd project. Description of 3rd project. Description of 3rd project. Description of 3rd project. "
        ></Project>

        <div className="p-4 border border-[var(--border-colour)] rounded-lg flex justify-center items-center h-[200px] bg-[var(--border-colour)] select-none">
          <h3 className="dark:text-[rgb(91,91,91)] text-[#858585] ">more...</h3>
        </div>
      </div>
    </>
  );
}

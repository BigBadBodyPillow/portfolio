export function Projects() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 border border-[var(--border-colour)] rounded-lg">
          <h3 className="font-semibold ">Portfolio Website</h3>
          <p className="text-sm ">
            A modern, responsive portfolio built with React and TypeScript
          </p>
        </div>
        <div className="p-4 border border-[var(--border-colour)] rounded-lg">
          <h3 className="font-semibold ">Project 2</h3>
          <p className="text-sm ">Description of your second project</p>
        </div>
      </div>
    </>
  );
}

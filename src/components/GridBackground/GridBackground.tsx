// import { cn } from '../../lib/utils';

//css
import './GridBackground.css';

interface GridBackgroundProps {
  children?: React.ReactNode;
}

// https://ui.aceternity.com/components/grid-and-dot-backgrounds
export function GridBackground({ children }: GridBackgroundProps) {
  return (
    <div className="gird-background relative flex h-full w-full items-center justify-center dark:bg-black bg-[#f4f4f4] ">
      <div
        className={'grid-lines absolute inset-0 [background-size:40px_40px]'}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#f4f4f4] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {children}
    </div>
  );
}

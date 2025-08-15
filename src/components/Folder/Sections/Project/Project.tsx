//css
import './Project.css';

interface ProjectProps {
  // children?: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export function Project({ image, title, description }: ProjectProps) {
  return (
    <>
      <div className="p-2 pb-4 border border-[var(--border-colour)] bg-[var(--background-colour)] rounded-lg">
        <img
          src={image}
          alt={`preview of ${title}`}
          className="object-cover w-full aspect-[16/9] bg-[var(--border-colour)] rounded-lg mb-4 select-none"
        />
        <h3 className="font-semibold ">{title}</h3>
        <p className="text-sm font-[Roboto_mono]">{description}</p>
      </div>
    </>
  );
}

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
      <div className="p-4 border border-[var(--border-colour)] rounded-lg">
        <img
          src={image}
          className="object-cover w-full aspect-[16/9] border border-[var(--border-colour)] bg-[var(--border-colour)] rounded-lg mb-4"
        />
        <h3 className="font-semibold ">{title}</h3>
        <p className="text-sm ">{description}</p>
      </div>
    </>
  );
}

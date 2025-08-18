interface SkillsProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  link: string;
}

export function Skill({ Icon, text, link }: SkillsProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="skill-icon-container flex flex-col justify-center  items-center md:px-4 sm:px-1 py-3 pb-1 w-fit border-1 border-[var(--border-colour)] rounded-lg dark:bg-[#111] bg-[rgb(244,244,244)] gap-1"
    >
      <Icon width="40px" height="40px" />
      <p className="text-sm">{text}</p>
    </a>
  );
}

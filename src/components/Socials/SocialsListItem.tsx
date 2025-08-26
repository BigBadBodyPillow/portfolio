type SocialsListItemProp = {
  url: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
};

export function SocialsListItem({ url, Icon, label }: SocialsListItemProp) {
  return (
    <>
      <li className="socials-icon-container aspect-square flex items-center justify-center ">
        <a
          href={url}
          target="_blank"
          className="socials-icon"
          aria-label={label}
        >
          <Icon />
        </a>
      </li>
    </>
  );
}

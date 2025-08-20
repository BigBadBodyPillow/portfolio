type SocialsListItemProp = {
  url: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export function SocialsListItem({ url, Icon }: SocialsListItemProp) {
  return (
    <>
      <li className="socials-icon-container aspect-square flex items-center justify-center ">
        <a href={url} target="_blank" className="socials-icon">
          <Icon />
        </a>
      </li>
    </>
  );
}

type SocialsListItemProp = {
  url: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export function SocialsListItem({ url, Icon }: SocialsListItemProp) {
  return (
    <>
      <li className="aspect-square flex items-center justify-center ">
        <a href={url} target="_blank">
          <Icon className="" />
        </a>
      </li>
    </>
  );
}

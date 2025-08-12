type SocialsListItemProp = {
  url: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export function SocialsListItem({ url, Icon }: SocialsListItemProp) {
  return (
    <>
      <li className="aspect-square">
        <a href={url} target="_blank">
          <Icon className="w-10 h-10 sm:w-15 sm:h-15" />
        </a>
      </li>
    </>
  );
}

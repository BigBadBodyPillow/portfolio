//components
import { SocialsListItem } from './SocialsListItem.tsx';
import { SocialsMiddle } from './SocialsMiddle.tsx';
//svg
import { GitHub } from '../../assets/GitHub';
import { Discord } from '../../assets/Discord.tsx';
import { Youtube } from '../../assets/Youtube';
import { YoutubeMusic } from '../../assets/YoutubeMusic';

//css
import './Socials.css';

export function Socials() {
  return (
    <>
      <div className="socials-container relative z-20 w-full h-15 sm:h-20  rounded-xl ">
        <ul className="flex justify-evenly h-full ">
          <SocialsListItem
            Icon={GitHub}
            url="https://github.com/BigBadBodyPillow"
          />
          <SocialsListItem Icon={Youtube} url="" />
          <SocialsMiddle />
          <SocialsListItem Icon={Discord} url="" />
          <SocialsListItem Icon={YoutubeMusic} url="" />
        </ul>
      </div>
    </>
  );
}

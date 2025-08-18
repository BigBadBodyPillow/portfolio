//components
import { SocialsListItem } from './SocialsListItem.tsx';
import { SocialsMiddle } from './SocialsMiddle.tsx';
//svg
import { GitHub } from '../../assets/social-images/GitHub.tsx';
import { Discord } from '../../assets/social-images/Discord.tsx';
import { Youtube } from '../../assets/social-images/Youtube.tsx';
import { YoutubeMusic } from '../../assets/social-images/YoutubeMusic.tsx';

//css
import './Socials.css';

export function Socials() {
  return (
    <>
      <div className="socials-container relative z-20 w-full h-18 p-2 rounded-xl  bg-[#ffffff26] border-1 backdrop-blur-[2px] border-[#ffffff79]">
        <ul className="flex items-center justify-around h-full ">
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

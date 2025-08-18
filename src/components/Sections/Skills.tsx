// images
import { Html } from '../../assets/skill-images/Html.tsx';
import { Css } from '../../assets/skill-images/Css.tsx';
import { Tailwind } from '../../assets/skill-images/Tailwind.tsx';
import { Bootstrap } from '../../assets/skill-images/Bootstrap.tsx';
import { JavaScript } from '../../assets/skill-images/JavaScript.tsx';
import { TypeScript } from '../../assets/skill-images/TypeScript.tsx';
import { MongoDB } from '../../assets/skill-images/MongoDB.tsx';
import { Express } from '../../assets/skill-images/Express.tsx';
import { ReactSVG } from '../../assets/skill-images/React.tsx';
import { Node } from '../../assets/skill-images/Node.tsx';
import { Git } from '../../assets/skill-images/Git.tsx';

//components
import { Skill } from './Skill.tsx';

//css
import './skills.css';

export function Skills() {
  return (
    <>
      <div className="skills-content flex flex-col">
        <h2 className="text-4xl font-bold mb-4 pl-1">Skills</h2>
        <div className="skills-grid-container font-[Roboto_mono] text-[var(--text-colour)] ">
          <Skill
            Icon={Html}
            text="Html"
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
          />
          <Skill
            Icon={Css}
            text="Css"
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />
          <Skill
            Icon={JavaScript}
            text="JavaScript"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <Skill
            Icon={TypeScript}
            text="TypeScript"
            link="https://www.typescriptlang.org/docs/"
          />
          <Skill
            Icon={Tailwind}
            text="Tailwind"
            link="https://tailwindcss.com/docs"
          />
          <Skill
            Icon={Bootstrap}
            text="Bootstrap"
            link="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
          />
          <Skill
            Icon={MongoDB}
            text="MongoDB"
            link="https://www.mongodb.com/docs/"
          />
          <Skill
            Icon={Express}
            text="Express"
            link="https://expressjs.com/en/guide/routing.html"
          />
          <Skill
            Icon={ReactSVG}
            text="React"
            link="https://react.dev/reference/react"
          />
          <Skill
            Icon={Node}
            text="Node.js"
            link="https://nodejs.org/docs/latest/api/"
          />
          <Skill Icon={Git} text="Git" link="https://git-scm.com/doc/" />
        </div>
      </div>
    </>
  );
}

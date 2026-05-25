//components
import { Showcase } from "./Showcase/Showcase.tsx";
// import More from "../More.tsx";

//public images
import eCommerce1 from "/template-images/eCommerce1.webp";
// import Buttons from "/template-images/Buttons.webp";
// import ButtonsLight from "/template-images/ButtonsLight.webp";
import Template2 from "/template-images/Template2.webp";
import Template2Light from "/template-images/Template2Light.webp";
import Aetherfield from "/template-images/Aetherfield.webp";

export function Templates() {
  return (
    <>
      <div className="templates-content  text-container">
        <h2 className="text-4xl font-bold mb-4 pl-1">Templates</h2>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* case sensitive */}
          {/* tag options: JavaScript, HTML, CSS, Vue, React, Svelt, Angular */}
          <Showcase
            image={Aetherfield}
            title="Modern, Clean SaaS Company "
            link="https://github.com/BigBadBodyPillow/template-3"
            demo="https://bigbadbodypillow.github.io/template-3/"
            description="Built from a figma file"
            tags={["React", "Tailwind"]}
          />
          <Showcase
            image={Template2}
            lightImage={Template2Light}
            title="Corporate Home Page"
            link="https://github.com/BigBadBodyPillow/Template-2"
            demo="https://bigbadbodypillow.github.io/template-2/"
            description="A corporate home page, inspired by Microsofts .NET"
            tags={["React", "Tailwind"]}
          />
          <Showcase
            image={eCommerce1}
            title="eCommerce Website 1"
            link="https://github.com/BigBadBodyPillow/eCommerce-Template-1"
            demo="https://bigbadbodypillow.github.io/eCommerce-Template-1/"
            description="Simple eCommerce template."
            tags={["Vue", "CSS"]}
          />
          {/* <Template
            image={Buttons}
            lightImage={ButtonsLight}
            title="Buttons"
            link="https://github.com/BigBadBodyPillow/buttons"
            demo="https://bigbadbodypillow.github.io/buttons/"
            description="A compilation of differnt buttons."
            tags={["HTML", "CSS", "JavaScript"]}
          ></Template> */}
          {/* more */}
          {/* <More /> */}
        </div>
      </div>
    </>
  );
}

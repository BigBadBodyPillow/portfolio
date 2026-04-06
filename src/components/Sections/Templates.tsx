//components
import { Template } from "./Template.tsx";
//css
import "./Templates.css";

//public images
import eCommerce1 from "/template-images/eCommerce1.webp";
// import Buttons from "/template-images/Buttons.webp";
// import ButtonsLight from "/template-images/ButtonsLight.webp";
import Template2 from "/template-images/Template2.webp";
import Template2Light from "/template-images/Template2Light.webp";

export function Templates() {
  return (
    <>
      <div className="templates-content  text-container">
        <h2 className="text-4xl font-bold mb-4 pl-1">Templates</h2>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* case sensitive */}
          {/* tag options: JavaScript, HTML, CSS, Vue, React, Svelt, Angular */}
          <Template
            image={Template2}
            lightImage={Template2Light}
            title="Template 2"
            link="https://github.com/BigBadBodyPillow/Template-2"
            demo="https://bigbadbodypillow.github.io/template-2/"
            description="Simple eCommerce Template."
            tags={["React"]}
          ></Template>
          <Template
            image={eCommerce1}
            title="eCommerce Website 1"
            link="https://github.com/BigBadBodyPillow/eCommerce-Template-1"
            demo="https://bigbadbodypillow.github.io/eCommerce-Template-1/"
            description="Simple eCommerce Template."
            tags={["Vue"]}
          ></Template>
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
          <div className="border border-(--border-colour) rounded-lg flex justify-center items-center  bg-[rgb(235,235,235)] dark:bg-[rgb(20,20,20)] min-h-60 select-none cursor-not-allowed  z-1">
            <h3 className="dark:text-[rgb(91,91,91)] text-[#858585] ">
              more
              <span className="dots">.</span>
              <span className="dots">.</span>
              <span className="dots">.</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

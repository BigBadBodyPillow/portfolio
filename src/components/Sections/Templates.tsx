//components
import { Template } from './Template.tsx';
//css
import './Templates.css';

//public images
import eCommerce1 from '/template-images/eCommerce1.webp';

export function Templates() {
  return (
    <>
      <div className="templates-content  text-container">
        <h2 className="text-4xl font-bold mb-4 pl-1">Templates</h2>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          <Template
            image={eCommerce1}
            lightImage={''}
            title="eCommerce Website 1"
            link="https://github.com/BigBadBodyPillow/eCommerce-Template-1"
            description="Simple eCommerce Template."
            tags={['Vue']}
          ></Template>
        </div>
      </div>
    </>
  );
}

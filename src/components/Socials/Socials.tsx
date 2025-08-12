//css
import './Socials.css';

export function Socials() {
  return (
    <>
      <div className="socials-container relative z-20 w-full h-20  rounded-xl ">
        <ul className="flex justify-evenly h-full ">
          <li className="aspect-square">GitHub</li>
          <li className="aspect-square">Youtube</li>
          <li className="aspect-square">Middle</li>
          <li className="aspect-square">Discord</li>
          <li className="aspect-square">Music</li>
        </ul>
      </div>
    </>
  );
}

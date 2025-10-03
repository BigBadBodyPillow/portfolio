// image
import scrajj from '../../assets/scrajj.gif';

export function About() {
  return (
    <>
      <div className="about-content flex flex-col text-container">
        <h2 className="text-4xl font-bold mb-4 pl-1">About</h2>
        <p className="font-[Roboto_mono] text-[var(--text-colour-main)]">
          Hi! I'm Shiv.
        </p>
        <p className="font-[Roboto_mono] text-[var(--text-colour-main)]">
          Idk what to add here. I don't usually have a lot to say about
          anything. I like Dota, and PoE and uhh the colour red.
          <img
            src={scrajj}
            alt=" Scrajj"
            draggable="false"
            className="inline-block w-[32px] ml-1 relative -top-1"
          />
        </p>
      </div>
    </>
  );
}

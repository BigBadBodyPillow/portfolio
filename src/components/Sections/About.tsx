// image
import scrajj from "../../assets/scrajj.gif";

export function About() {
  return (
    <>
      <div className="about-content flex flex-col text-container">
        <h2 className="text-4xl font-bold mb-4 pl-1">About</h2>
        <p className="font-[Roboto_mono] text-(--text-colour-main)">
          Hi! I'm Shiv.
        </p>
        <p className="font-[Roboto_mono] text-(--text-colour-main)">
          i dont like writing stuff or talking about myself
          <img
            src={scrajj}
            alt=" Scrajj"
            draggable="false"
            className="inline-block w-8 ml-1 relative -top-1"
          />
        </p>
      </div>
    </>
  );
}

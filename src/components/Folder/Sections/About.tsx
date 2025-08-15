// image
import scrajj from '/src/assets/scrajj.avif';

export function About() {
  return (
    <>
      <div className="about-content flex flex-col">
        <h2 className="text-4xl font-bold mb-4 pl-2">About</h2>
        <p className="font-[Roboto_mono]">Hi! I'm Shiv.</p>
        <p className="font-[Roboto_mono]">
          Idk what to add here. I don't usually have a lot to say about
          anything. I like Dota, and PoE and uhh the colour red.
          <img
            src={scrajj}
            alt="Scrajj"
            className="inline-block w-[32px] ml-1 relative -top-1"
          />
        </p>
      </div>
    </>
  );
}

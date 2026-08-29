//css
import "./EmailFooter.css";

export function EmailFooter() {
  return (
    <>
      <footer className="w-screen h-screen flex items-center justify-center dark:bg-black bg-white">
        <a
          className="email"
          href="mailto:ItsShivJagath@gmail.com"
          draggable="false"
        >
          ItsShivJagath@gmail.com
        </a>
      </footer>
    </>
  );
}

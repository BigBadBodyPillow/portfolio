import './App.css';

//components
import RainbowLine from './components/RainbowLine/RainbowLine.tsx';
import { GridBackground } from './components/GridBackground/GridBackground.tsx';
import { Socials } from './components/Socials/Socials.tsx';
import { BackgroundBlur } from './components/BackgroundBlur/BackgroundBlur.tsx';
// import { About } from './components/Sections/About.tsx';
import { Projects } from './components/Sections/Projects.tsx';
import { Skills } from './components/Sections/Skills.tsx';
import { EmailFooter } from './components/EmailFooter/EmailFooter.tsx';

// stuff todo later
// testing
// 1. start
//
// features
// 1.
//
// fix
// 1. shadow on cat not work

function App() {
  return (
    <>
      <RainbowLine />
      <div className="hero min-h-[600px] h-[80vh] overflow-y-clip">
        <GridBackground>
          <div className="flex flex-col z-20 text-center ">
            <BackgroundBlur />
            <h1 className="name  relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  my-6 text-transparent rounded-xl  px-2">
              Shiv Jagath
            </h1>
            <Socials />
          </div>
        </GridBackground>
      </div>
      <main className="flex flex-col justify-center items-center bg-stone-100 dark:bg-[var(--background-colour)] py-5 md:py-2 ">
        {/* <About /> */}
        <Projects />
        <Skills />
      </main>
      <EmailFooter />
    </>
  );
}

export default App;

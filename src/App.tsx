import './App.css';

//components
import RainbowLine from './components/RainbowLine/RainbowLine.tsx';
import { GridBackground } from './components/GridBackground/GridBackground.tsx';
import { Socials } from './components/Socials/Socials.tsx';
import { BackgroundBlur } from './components/BackgroundBlur/BackgroundBlur.tsx';
import { Folder, FolderSection } from './components/Folder/Folder.tsx';
import { About } from './components/Folder/Sections/About.tsx';
import { Projects } from './components/Folder/Sections/Projects.tsx';
import { Other } from './components/Folder/Sections/Other.tsx';
import { EmailFooter } from './components/EmailFooter/EmailFooter.tsx';

// stuff todo later
// features
//
// fix
// 1. shadow on cat not work
// 2. filing cabinate section thing shifts/moves when nothing is active

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
      <main className="flex justify-center  bg-stone-100 dark:bg-[var(--background-colour)]">
        <Folder>
          <FolderSection title="Projects">
            <Projects />
          </FolderSection>

          <FolderSection title="About">
            <About />
          </FolderSection>

          <FolderSection title="Other">
            <Other />
          </FolderSection>
        </Folder>
      </main>
      <EmailFooter />
    </>
  );
}

export default App;

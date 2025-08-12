import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

//components
import RainbowLine from './components/RainbowLine/RainbowLine.tsx';
import { GridBackground } from './components/GridBackground/GridBackground.tsx';
import { Socials } from './components/Socials/Socials.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RainbowLine />
      <main>
        <GridBackground>
          <div className="flex flex-col z-20 text-center">
            <p className="name relative  bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  font-bold text-transparent  text-6xl sm:text-9xl ">
              .sadness
            </p>
            {/* <p className="pb-2 tracking-widest z-20">
              - Welcome to my portfolio -
            </p> */}
            <Socials />
          </div>
        </GridBackground>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </>
  );
}

export default App;

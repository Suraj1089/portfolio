import { useState } from 'react';
import './App.css';
import About from './components/About';
import Profile from './components/Profile';
import Resume from './components/Resume';

function App() {
  const [showResume, setShowResume] = useState(false);
  const [showAbout, setShowAbout] = useState(true)
  return (
    <div className="container">
      {showResume && (
        <>
          <div className="left">
            <Profile setShowAbout={setShowAbout} setShowResume={setShowResume} />
          </div>
          <div className="right">
            <Resume />
          </div>
        </>
      ) }
      {showAbout && (
        <About
         setShowResume={setShowResume}
         setShowAbout={setShowAbout}/>
      )}
    </div>
  );
}

export default App;

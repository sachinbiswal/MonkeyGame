import * as React from 'react';
import { useState } from 'react';
import StartPage from './Components/StartPage';
import GamePage from './Components/GamePage';
import Page3 from './Components/Page3';
import "./App.css"
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleStartClick = () => {
    setCurrentPage(2);
  };

  const handleNextClick = () => {
    setCurrentPage(3);
  };

  const handleBackClick = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleYesClick = () => {
    setCurrentPage(4); 
  };

  const handlePlayClick = () => {
    setCurrentPage(5);
  };

  return (
    <div className="app-container" style={{ backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/fa56/bd65/60c51db815c7b8d80cfda1a8921ca84f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lw39HTr2u2MxWPPvvXcdYfhDL4Ek3ti1Ud0aharlkIiU88EP0jCBjF7qNfPIdSVwxKw22~bMOHMCPaIXWZ0ZtCewxpKdmngT5d0wenpx0hltuMSmq9kCdQBH6g0hGjPMn9RFjqsj-IGWsW1-UbjQZ4HMdj0oXKOUjqLyEgVJTUoIoNyMF5-aQuDz91gloMSjCKL5BfOisiEqGgqMXnRWvN2AjUpu8-0i4J2D9Drx39XDJo5v8EVEshJQ6INGdL7EOF58E0r0l-h6uttCG8P2MPw5JK0pV9GFVtNJDfpZ0zVY1G1GTaZBrX516eMDFJnag7egCe~ZSkW5jrGW2DEq~Q__")' }}>
      {currentPage === 1 && <StartPage onStart={handleStartClick} />}
      {currentPage === 2 && <GamePage onNext={handleNextClick} onBack={handleBackClick} />}
      {currentPage === 3 && <Page3 onBack={handleBackClick} onYesClick={handleYesClick}/>}
      {currentPage === 4 && <Page4 onBack={handleBackClick} onPlay={handlePlayClick} />}
      {currentPage === 5 && <Page5  onBack={handleBackClick} />}
    </div>
  );
};

export default App;

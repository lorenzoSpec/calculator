import React from 'react';
import './App.css';
import Display from './components/display';
import LeftButtons from './components/leftButtons';
import RightButtons from './components/right-buttons';


function App() {
  return (
    <main id="calculator">
      <Display />
      <div id="buttons">
      <LeftButtons />
      <RightButtons />
      </div>
    </main>
  );
}

export default App;
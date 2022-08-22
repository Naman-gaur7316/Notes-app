import React from 'react';
import './App.css';
import Notes from './components/Notes/Notes';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Notes />
    </div>
  );
}

export default App;

import React, { useCallback } from 'react';
// import Notes from './components/Notes/Notes';
import NoteContainer from './components/NoteContainer/NoteContainer';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import { useNotes } from './misc/custom-hook';

const App = () => {

  const [notes, setNotes] = useNotes();

  const createNote = useCallback((color) => {
    // const date = new Date();
    const note = {
      id: Math.floor(Math.random() * 10000),
      title: "",
      text: "",
      color: color,
      date: Date.now()
    };

    setNotes(prev => [note, ...prev]);

  }, [setNotes])

  console.log(notes);

  return (
    <div className="App">
      <Sidebar createNote={createNote}/>
      <NoteContainer notes={notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;

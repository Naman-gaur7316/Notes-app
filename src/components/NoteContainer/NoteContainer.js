import React from "react";
// import { useNotes } from "../../misc/custom-hook";
import Notes from "../Notes/Notes";
import "./note-container.css";

const NoteContainer = ({ notes, setNotes }) => {


  const onStarClick = (id, title, text) => {
    setNotes(prev => {
      return prev.map(note => {
        if(note.id === id) {
          note.title = title;
          note.text = text;
        }

        return note;
      })
    })
  };

  const onDeleteClick = id => {
    setNotes(prev => {
      return prev.filter(note => note.id !== id);
    })
  };


  return (
    <div className="container">
      <h1>Notes</h1>
      <div className="notes-container custom-scroll">
        {notes.length === 0 && <h2>No notes here...</h2>}
        {
            notes.map((note) => <Notes 
            key={note.id}
            id={note.id}
            color={note.color}
            title={note.title}
            text={note.text}
            date={note.date}
            onStarClick={onStarClick}
            onDeleteClick={onDeleteClick}
            />)
        }
      </div>
    </div>
  );
};

export default NoteContainer;

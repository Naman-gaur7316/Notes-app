import React, { useRef } from 'react';
import './notes.css';
import { Star } from './Notes.Styled';
import bin from '../../images/bin.png';


const noteData = {
  title: '',
  text: ''
}

const Notes = ({ id, color, title, text, date, onDeleteClick }) => {

  const formatDate = dateInMs => {

    if (!dateInMs) {
      return "";
    }

    const date = new Date(dateInMs);
    const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let hrs = date.getHours();
    let isAm = hrs > 12 ? "PM": 'AM';
    hrs = hrs < 10 ? `0${hrs}` : hrs > 12 ? hrs - 12 : hrs;
    let min = date.getMinutes();
    min = min < 10 ? `0${min}` : min;

    let day = date.getDay() - 1;

    let dateString = `${hrs}:${min} ${isAm}  ${DAYS[day]}`;

    return dateString;
  };

  const onTitleChange = e => {
    noteData.title = e.target.value;
  };

  const onTextChange = e => {
    noteData.text = e.target.value;
  };

  console.log(noteData);

  return (
    <div className='note' style={{backgroundColor: color}} >
        <input 
        type="text" 
        className='note__title' 
        placeholder='Add title'
        onChange={ e => onTitleChange(e)}
        />
        <textarea 
        className='note__text' 
        placeholder='Add text' 
        onChange={ e => onTextChange(e)}
        />
        <div className="note__footer">
          <p>{formatDate(date)}</p>

          <div className="note__footer-btn-group"  >
          <button>
            <Star />
          </button>
          <button onClick={() => onDeleteClick(id)}>
            <img src={bin} alt="delete-icon" />
          </button>

          </div>

        </div>
    </div>
  )
}

export default Notes;
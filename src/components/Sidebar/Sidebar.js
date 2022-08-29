import React, { useState } from 'react';
import add from '../../images/add.png';
import './sidebar.css';

const COLORS = ['#9FC131', '#0FC2C0', '#F2CB05', '#BF84BB', '#F2ACBF', '#A3AABF']

const Sidebar = ({ createNote }) => {

    const [isOpen, setIsOpen] = useState(false);


    const onClickButton = () => {
        setIsOpen(!isOpen);
    }


  return (
    <div className='sidebar'>
        <button className='sidebar__button' onClick={onClickButton}>
            <img src={add} alt="add" />
        </button>

        <ul className={`sidebar__list ${isOpen ? 'active' : 'close'}`}>
            {
                COLORS.map((color, index) => <li key={index} style={{backgroundColor: color}} className='sidebar__color-dots'  onClick={() => createNote(color)} />)
            }
        </ul>
    </div>
  )
}

export default Sidebar;
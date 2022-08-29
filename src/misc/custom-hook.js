import { useReducer, useEffect, useState } from 'react';


function notesReducer(prevState, action) {
    switch(action.type) {
        case 'ADD': {
            return [...prevState, action.note]
        }

        case 'UPDATE' : {
            return prevState.map(note => {
                if(note.id === action.id) {
                    note.text = action.text;
                    note.title = action.title;
                }
                return note;
            })
        }

        case 'REMOVE': {
            return prevState.filter(note => note.id !== action.id);
        }

        default: return prevState
    }
}

function usePersistedReducer(initialState, key) {

    const [state, dispatch] = useState(initialState, initial => {
        const persisted = localStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : initial;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, dispatch];
}

export function useNotes(key = 'NotesList') {
    return usePersistedReducer([], key);
}
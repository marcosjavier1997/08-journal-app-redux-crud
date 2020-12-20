import React from 'react'
import { NoteScreen } from '../notes/NoteScreen';
import { Sidebar } from './Sidebar';
import { NothingSelected } from './NothingSelected';

import {useSelector} from 'react-redux'



export const JournalScreen = () => {

    const {active} = useSelector( state => state.notes );
    //console.log(active)
    return (
        <div className="journal__main-content">
            <Sidebar/>
            <main>
                {
                    (active)
                        ? (<NoteScreen/>)
                        : (<NothingSelected/>)
                }
            
            </main>
        </div>
    )
}

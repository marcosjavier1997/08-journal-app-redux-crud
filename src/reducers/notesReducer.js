import { types } from '../types/types';
/*

{
    notes:[],
    active: null,
    active: {
        id: 'ASD',
        title: '',
        body: '',
        imageUrl: ''.
        date: 123456
    }
}

*/

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state= initialState, action)=>{
    switch (action.type) {
        
        case types.noteActive:
            return{
                ...state,
                active: {...action.payload}
                
            }
        case types.notesLoad:
            return{
                ...state,
                notes:[...action.payload]
            }
        default:
            return state;
    }
}
    
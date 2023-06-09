import React, {useReducer} from 'react';
import Homepage from './Homepage';
import  BookingPage  from './BookingPage';
import { Routes, Route } from 'react-router-dom';


export function initializeTimes() {
    return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];
}

export function updateTimes(state, action) {
    console.log(action)
    switch (action.type) {
        case 'update_times':
            return initializeTimes();
        default:
            return state;
    }
}

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        </Routes>
    );
}

export default Main;
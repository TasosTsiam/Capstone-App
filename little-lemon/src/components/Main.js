import React, {useReducer} from 'react';
import Homepage from './Homepage';
import  BookingPage  from './BookingPage';
import { Routes, Route } from 'react-router-dom';


function Main() {

    function initializeTimes() {
        return [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00'
        ];
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    function updateTimes(state, action) {
        console.log(action)
        switch (action.type) {
            case 'update_times':
                return initializeTimes();
            default:
                return state;
        }
    }

    return (
        <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        </Routes>
    );
}

export default Main;
/* eslint-disable no-undef */

import React, {useReducer} from 'react';
import Homepage from './Homepage';
import  BookingPage  from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './Api';


export function initializeTimes() {
    const today = new Date(); // Get today's date
    return fetchAPI(today); // Use fetchAPI function from the API library to fetch available times for today's date
}

export function updateTimes(state, action) {
    console.log(action)
    switch (action.type) {
        case 'update_times':
            return fetchAPI(action.date); // Use fetchAPI function from the API library to fetch available times for the selected date
        default:
            return state;
    }
}

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

  const submitForm = (formData) => {
    const isBookingSubmitted = submitAPI(formData);
    if (isBookingSubmitted) {
      navigate('/confirmed');
    } else {
      // Handle submission error
    }
  };

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
    );
}

export default Main;

/* eslint-enable no-undef */
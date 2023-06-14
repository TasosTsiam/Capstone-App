import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({availableTimes, dispatch, submitForm}) {
    return (
        <div className="booking-page-container">
            <h1>Table Booking</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </div>
    );
}

export default BookingPage;
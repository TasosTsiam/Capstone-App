import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({availableTimes, dispatch}) {
    return (
        <div className="booking-page-container">
            <h1>Table Booking</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
    );
}

export default BookingPage;
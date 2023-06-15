import React, {useState} from 'react';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const [initialDate] = useState(new Date());

    const handleFormSubmit = (event) => {
        event.preventDefault();
        submitForm({ date, time, guests, occasion }); // Call the submitForm function and pass the form data
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value); // Convert the value to a Date object
        if (selectedDate > initialDate || selectedDate.toDateString() === initialDate.toDateString()) {
            setDate(selectedDate);
            setDate(selectedDate);
            dispatch({ type: 'update_times', date: selectedDate });
        } // Dispatch the selected date to update available times
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <form className="container" style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleFormSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    required
                    value={date.toISOString().split('T')[0]}
                    onChange={handleDateChange}
                    aria-label="Choose date"
                    aria-required="true"
                    aria-describedby="date-error"
                />

                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    required
                    value={time}
                    aria-label="Choose time"
                    aria-required="true"
                    onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
                        </option>
                    ))}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    required
                    aria-label="Number of guests"
                    aria-required="true"
                    value={guests}
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        if (!isNaN(inputValue)) {
                            setGuests(inputValue);
                        }
                    }}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    required
                    value={occasion}
                    aria-label="Occasion"
                    aria-required="true"
                    onChange={(e) => setOccasion(e.target.value)}>
                    <option disabled hidden value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input
                    type="submit"
                    value="Make Your reservation"
                />
            </form>
        </div>
        
    );
}

export default BookingForm;
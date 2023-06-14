import React, {useState} from 'react';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        submitForm({ date, time, guests, occasion }); // Call the submitForm function and pass the form data
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value); // Convert the value to a Date object
        setDate(selectedDate);
        dispatch({ type: 'update_times', date: selectedDate }); // Dispatch the selected date to update available times
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleFormSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date.toISOString().split('T')[0]} onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;
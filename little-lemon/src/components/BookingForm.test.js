import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the first label of the BookingForm form', () => {
    render(<BookingForm />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
})

describe('BookingForm', () => {
    it('should have the correct attributes for the date input field', () => {
        render(<BookingForm />);

        const dateInput = screen.getByLabelText('Choose date');
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toBeRequired();
        // Add more assertions for other attributes if necessary
    });

    it('should have the correct attributes for the time select field', () => {
        render(<BookingForm />);

        const timeSelect = screen.getByLabelText('Choose time');
        expect(timeSelect).toHaveAttribute('required');
        // Add more assertions for other attributes if necessary
    });
});

test('valid state of input field', () => {
        render(<BookingForm />);

        const inputField = screen.getByLabelText('Choose date');

        // Simulate valid user input
        fireEvent.change(inputField, { target: { value: '2023-06-15' } });

        // Assert that the input field is now in a valid state
        expect(inputField.validity.valid).toBe(true);
  });

it('invalid state of input field', () => {
    render(<BookingForm />);

    const inputField = screen.getByLabelText('Number of guests');
    fireEvent.change(inputField, { target: { value: 'abc' } });

    expect(inputField.validity.valid).toBe(false);
});
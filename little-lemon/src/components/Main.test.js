import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from './Api';

jest.mock('./Api');

test('initializeTimes returns the correct expected value', async () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  fetchAPI.mockReturnValue(expectedTimes);

  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the same value as provided in the state', () => {
  const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const selectedDate = new Date('2023-06-14'); // Modify the date according to your test scenario
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  fetchAPI.mockReturnValue(expectedTimes);
  const action = { type: 'update_times', date: selectedDate };

  const result = updateTimes(state, action);
  expect(result).toEqual(expectedTimes);
});
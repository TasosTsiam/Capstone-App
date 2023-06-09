import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the correct expected value', () => {
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];

  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the same value as provided in the state', () => {
  const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'update_times' };

  const result = updateTimes(state, action);
  expect(result).toEqual(state);
});
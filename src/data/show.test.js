import { test, expect } from 'bun:test';
import { showDetails } from './show';

test('the show lasts 70 minutes', () => {
  expect(showDetails.durationMinutes).toBe(70);
});
test('the live band includes all seven specified instruments', () => {
  expect(showDetails.instruments).toEqual(['bandoneon', 'violin', 'piano', 'double bass', 'drums', 'guitar', 'voice']);
});
test('aerial performance uses straps, hoop and harness', () => {
  expect(showDetails.aerialApparatus).toEqual(['straps', 'hoop', 'harness']);
});
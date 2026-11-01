import { test, expect } from 'bun:test';
import { companyFacts } from './company';

test('the brothers began training at five', () => {
  expect(companyFacts.trainingAge).toBe(5);
});
test('both brothers made their international debut at 17', () => {
  expect(companyFacts.internationalDebutAge).toBe(17);
});
test('Tango – La Muerte del Ángel has not premiered yet', () => {
  expect(companyFacts.hasPremiered).toBe(false);
});
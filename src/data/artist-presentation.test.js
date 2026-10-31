import { test, expect } from 'bun:test';
import { artists } from './artists';
import { artistGroups } from './artist-presentation';

test('Direction includes only the two brothers', () => {
  expect(artistGroups[0].members.map(artist => artist.slug)).toEqual(['leonardo-luizaga', 'edgar-luizaga']);
});
test('every current artist appears once in the grouped cast', () => {
  const slugs = artistGroups.flatMap(group => group.members.map(artist => artist.slug));
  expect(slugs.length).toBe(16);
  expect(new Set(slugs).size).toBe(16);
  expect([...slugs].sort()).toEqual(artists.map(artist => artist.slug).sort());
});
test('grouping preserves each original photo and full biography', () => {
  for (const original of artists) {
    const presented = artistGroups.flatMap(group => group.members).find(artist => artist.slug === original.slug);
    expect(presented?.image).toBe(original.image);
    expect(presented?.bio).toEqual(original.bio);
  }
});
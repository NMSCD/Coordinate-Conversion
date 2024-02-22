import { describe, expect, test } from 'vitest';

import { coords2Glyphs } from './coords2Glyphs';

describe('Galactic to Glyphs', () => {
  describe('output', () => {
    test('output is exactly 12 chars', () => {
      const coords = coords2Glyphs('0C55:00D5:0922:0234');
      expect(coords.split('').length).toBe(12);
    });
    test('output contains only valid chars', () => {
      const coords = coords2Glyphs('0C55:00D5:0922:0234');
      const validChars = '1234567890abcdef';
      for (const coord of coords.split('')) {
        expect(validChars.includes(coord.toLocaleLowerCase())).toBe(true);
      }
    });
    test('invalid input', () => {
      const badCoords = '00000C55:00D5:0922:0234';
      const coords = coords2Glyphs(badCoords);
      expect(coords).toBe(badCoords);
    });
  });

  describe('conversions', () => {
    test.each([
      ['0C55:00D5:0922:0234', '023456123456'],
      ['0A32:00D5:0F44:0234', '023456745233'],
      ['0847:0083:0022:0823', '082304823048'],
      ['2323:3333:2222:1222', ''], // invalid address
    ])('convert %s to glyphs', (c, g) => {
      const coords = coords2Glyphs(c);
      expect(coords).toBe(g);
    });
  });
});

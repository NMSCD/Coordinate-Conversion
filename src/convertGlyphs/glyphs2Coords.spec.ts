import { describe, expect, test } from 'vitest';

import { glyphs2Coords } from './glyphs2Coords';

describe('Glyphs to Galactic', () => {
  describe('output', () => {
    test('output is exactly 19 chars', () => {
      const coords = glyphs2Coords('123456123456');
      expect(coords.split('').length).toBe(19);
    });
    test('output is exactly 16 chars without sperators', () => {
      const coords = glyphs2Coords('123456123456');
      const coordsWithoutSemiColons = coords.split('').filter((c) => c !== ':');
      expect(coordsWithoutSemiColons.length).toBe(16);
    });
    test('output contains 3 semicolon seperators', () => {
      const coords = glyphs2Coords('123456123456');
      const numSemiColons = coords.split('').filter((c) => c === ':').length;
      expect(numSemiColons).toBe(3);
    });
    test('invalid input', () => {
      const badGlyphs = '000123456123456';
      const coords = glyphs2Coords(badGlyphs);
      expect(coords).toBe('');
    });
  });

  describe('conversions', () => {
    test.each([
      ['023456123456', '0C55:00D5:0922:0234'],
      ['023456745233', '0A32:00D5:0F44:0234'],
      ['082304823048', '0847:0083:0022:0823'],
    ])('convert %s to galactic coord', (g, c) => {
      const coords = glyphs2Coords(g);
      expect(coords).toBe(c);
    });
  });
});

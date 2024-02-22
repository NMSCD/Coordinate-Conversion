import { describe, expect, test } from 'vitest';

import { glyphs2XYZ } from './glyphs2XYZ';

describe('Glyphs to XYZ', () => {
  describe('output', () => {
    test('output is not null', () => {
      const coords = glyphs2XYZ('023456123456');
      expect(coords != null).toBeTruthy();
    });
    test('output is the correct format', () => {
      const coords = glyphs2XYZ('023456123456');
      expect(coords!.voxelX).toBe(1110);
      expect(coords!.voxelY).toBe(86);
      expect(coords!.voxelZ).toBe(291);
      expect(coords!.planetIndex).toBe(0);
      expect(coords!.solarSystemIndex).toBe(564);
    });
    test('invalid input', () => {
      const coords = glyphs2XYZ('00000023456123456');
      expect(coords).toStrictEqual({});
    });
  });

  describe('conversions', () => {
    test.each([
      ['023456123456', 1110, 86, 291, 0, 564],
      ['023456745233', 563, 86, 1861, 0, 564],
      ['082304823048', 72, 4, -2013, 0, 2083],
    ])('convert %s to XYZ', (g, x, y, z, pi, ssi) => {
      const coords = glyphs2XYZ(g);
      expect(coords!.voxelX).toBe(x);
      expect(coords!.voxelY).toBe(y);
      expect(coords!.voxelZ).toBe(z);
      expect(coords!.planetIndex).toBe(pi);
      expect(coords!.solarSystemIndex).toBe(ssi);
    });
  });
});

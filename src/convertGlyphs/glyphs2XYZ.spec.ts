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
      expect(coords!.VoxelX).toBe(1110);
      expect(coords!.VoxelY).toBe(86);
      expect(coords!.VoxelZ).toBe(291);
      expect(coords!.PlanetIndex).toBe(0);
      expect(coords!.SolarSystemIndex).toBe(564);
    });
    test('invalid input', () => {
      const coords = glyphs2XYZ('00000023456123456');
      expect(coords).toBe(undefined);
    });
  });

  describe('conversions', () => {
    test.each([
      ['023456123456', 1110, 86, 291, 0, 564],
      ['023456745233', 563, 86, 1861, 0, 564],
      ['082304823048', 72, 4, -2013, 0, 2083],
    ])('convert %s to XYZ', (g, x, y, z, pi, ssi) => {
      const coords = glyphs2XYZ(g);
      expect(coords!.VoxelX).toBe(x);
      expect(coords!.VoxelY).toBe(y);
      expect(coords!.VoxelZ).toBe(z);
      expect(coords!.PlanetIndex).toBe(pi);
      expect(coords!.SolarSystemIndex).toBe(ssi);
    });
  });
});

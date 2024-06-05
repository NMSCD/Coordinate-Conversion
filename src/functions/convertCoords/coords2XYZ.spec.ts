import { describe, expect, test } from 'vitest';

import { coords2XYZ } from './coords2XYZ';

describe('Galactic to XYZ', () => {
  describe('output', () => {
    test('output is not null', () => {
      const coords = coords2XYZ('0C55:00D5:0922:0234');
      expect(coords != null).toBeTruthy();
    });
    test('output is the correct format', () => {
      const coords = coords2XYZ('0C55:00D5:0922:0234');
      expect(coords.VoxelX).toBe(1110);
      expect(coords.VoxelY).toBe(86);
      expect(coords.VoxelZ).toBe(291);
      expect(coords.PlanetIndex).toBe(0);
      expect(coords.SolarSystemIndex).toBe(564);
    });
    test('invalid input', () => {
      const coords = coords2XYZ('00000C55:00D5:0922:0234');
      expect(coords).toStrictEqual({});
    });
  });

  describe('conversions', () => {
    test.each([
      ['0C55:00D5:0922:0234', 1110, 86, 291, 0, 564],
      ['0A32:00D5:0F44:0234', 563, 86, 1861, 0, 564],
      ['0847:0083:0022:0823', 72, 4, -2013, 0, 2083],
    ])('convert %s to XYZ', (c, x, y, z, pi, ssi) => {
      const coords = coords2XYZ(c);
      expect(coords!.VoxelX).toBe(x);
      expect(coords!.VoxelY).toBe(y);
      expect(coords!.VoxelZ).toBe(z);
      expect(coords!.PlanetIndex).toBe(pi);
      expect(coords!.SolarSystemIndex).toBe(ssi);
    });
  });
});

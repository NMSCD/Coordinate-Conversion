import { describe, expect, test } from 'vitest';

import { xyz2Glyphs } from './xyz2Glyphs';
import type { VoxelCoordinates } from '@/types/voxelTypes';

describe('XYZ to Glyphs', () => {
  describe('output', () => {
    const xyz: VoxelCoordinates = {
      VoxelX: 1110,
      VoxelY: 86,
      VoxelZ: 291,
      PlanetIndex: 0,
      SolarSystemIndex: 564,
    };
    test('output is exactly 12 chars', () => {
      const coords = xyz2Glyphs(xyz);
      expect(coords.split('').length).toBe(12);
    });
    test('output contains only valid chars', () => {
      const coords = xyz2Glyphs(xyz);
      const validChars = '1234567890abcdef';
      for (const coord of coords.split('')) {
        expect(validChars.includes(coord.toLocaleLowerCase())).toBe(true);
      }
    });
  });

  describe('conversions', () => {
    test.each([
      [1110, 86, 291, 0, 564, '023456123456'],
      [563, 86, 1861, 0, 564, '023456745233'],
      [72, 4, -2013, 0, 2083, '082304823048'],
    ])('convert { x:%s, y:%s, z:%s, pi:%s, ssi:%s } to glyphs', (x, y, z, pi, ssi, g) => {
      const xyz: VoxelCoordinates = {
        VoxelX: x,
        VoxelY: y,
        VoxelZ: z,
        PlanetIndex: pi,
        SolarSystemIndex: ssi,
      };
      const coords = xyz2Glyphs(xyz);
      expect(coords).toBe(g);
    });
  });
});

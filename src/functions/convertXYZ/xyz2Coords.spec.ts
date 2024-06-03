import { describe, expect, test } from 'vitest';

import { maxGalacticCoordLength, minGalacticCoordLength } from '@/constants/restrictions';
import type { VoxelCoordinates } from '@/types/voxelTypes';
import { xyz2Coords } from './xyz2Coords';

describe('XYZ to Galactic', () => {
  describe('output', () => {
    const xyz: VoxelCoordinates = {
      VoxelX: 1110,
      VoxelY: 86,
      VoxelZ: 291,
      PlanetIndex: 0,
      SolarSystemIndex: 564,
    };
    test(`output is exactly ${maxGalacticCoordLength} chars`, () => {
      const coords = xyz2Coords(xyz);
      expect(coords.split('').length).toBe(maxGalacticCoordLength);
    });
    test(`output is exactly ${minGalacticCoordLength} chars without sperators`, () => {
      const coords = xyz2Coords(xyz);
      const coordsWithoutSemiColons = coords.split('').filter((c) => c !== ':');
      expect(coordsWithoutSemiColons.length).toBe(minGalacticCoordLength);
    });
    test('output contains 3 semicolon seperators', () => {
      const coords = xyz2Coords(xyz);
      const numSemiColons = coords.split('').filter((c) => c === ':').length;
      expect(numSemiColons).toBe(3);
    });
  });

  describe('conversions', () => {
    test.each([
      [1110, 86, 291, 0, 564, '0C55:00D5:0922:0234'],
      [563, 86, 1861, 0, 564, '0A32:00D5:0F44:0234'],
      [72, 4, -2013, 0, 2083, '0847:0083:0022:0823'],
    ])('convert { x:%s, y:%s, z:%s, pi:%s, ssi:%s } to coords', (x, y, z, pi, ssi, gc) => {
      const xyz: VoxelCoordinates = {
        VoxelX: x,
        VoxelY: y,
        VoxelZ: z,
        PlanetIndex: pi,
        SolarSystemIndex: ssi,
      };
      const coords = xyz2Coords(xyz);
      expect(coords).toBe(gc);
    });
  });
});

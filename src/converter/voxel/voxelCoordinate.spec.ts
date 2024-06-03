import { describe, expect, test } from 'vitest';

import { VoxelCoordinate } from './voxelCoordinate';
import type { VoxelCoordinates } from '@/types/voxelTypes';

describe('Voxel Coordinate Converter', () => {
  const validCoords: VoxelCoordinates = {
    VoxelX: -1781,
    VoxelY: 3,
    VoxelZ: 197,
    PlanetIndex: 1,
    SolarSystemIndex: 228,
  };
  const inValidCoords: VoxelCoordinates = {
    ...validCoords,
    VoxelX: 10000000,
  };

  describe('toGlyph', () => {
    test('with valid coordinate', () => {
      const result = VoxelCoordinate(validCoords).toGlyph();
      expect(result.isSuccess).toBeTruthy();
      expect(result.value.code).toBe('10E4030C590B');
    });
    test('with invalid coordinate', () => {
      const result = VoxelCoordinate(inValidCoords).toGlyph();
      expect(result.isSuccess).toBeFalsy();
    });
  });

  describe('toGalacticCoordinates', () => {
    test('with valid coordinate', () => {
      const result = VoxelCoordinate(validCoords).toGalacticCoordinates();
      expect(result.isSuccess).toBeTruthy();
      expect(result.value.code).toBe('010A:0082:08C4:00E4');
    });
    test('with invalid coordinate', () => {
      const result = VoxelCoordinate(inValidCoords).toGalacticCoordinates();
      expect(result.isSuccess).toBeFalsy();
    });
  });
});

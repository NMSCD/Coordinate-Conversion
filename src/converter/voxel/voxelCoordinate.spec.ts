import { describe, expect, test } from 'vitest';

import { VoxelCoordinate } from './voxelCoordinate';
import type { VoxelCoordinates } from '@/types/voxelTypes';

describe('Voxel Coordinate Converter', () => {
  const validCoords: VoxelCoordinates = {
    VoxelX: 110,
    VoxelY: 86,
    VoxelZ: 291,
    PlanetIndex: 1,
    SolarSystemIndex: 212,
  };
  const inValidCoords: VoxelCoordinates = {
    ...validCoords,
    VoxelX: 10000000,
  };

  describe('toGlyph', () => {
    test('with valid coordinate', () => {
      const result = VoxelCoordinate(validCoords).toGlyph();
      expect(result.isSuccess).toBeTruthy();
      expect(result.value.code).toBe('10D45612306E');
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
      expect(result.value.code).toBe('086D:00D5:0922:00D4');
    });
    test('with invalid coordinate', () => {
      const result = VoxelCoordinate(inValidCoords).toGalacticCoordinates();
      expect(result.isSuccess).toBeFalsy();
    });
  });
});

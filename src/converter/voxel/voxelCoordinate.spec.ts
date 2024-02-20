import { describe, expect, test } from 'vitest';

import { VoxelCoordinate } from './voxelCoordinate';
import type { VoxelCoordinates } from '@/types/voxelTypes';

describe('Voxel Coordinate Converter', () => {
  const validCoords: VoxelCoordinates = {
    voxelX: 1110,
    voxelY: 86,
    voxelZ: 291,
    planetIndex: 1,
    solarSystemIndex: 2,
  };
  const inValidCoords: VoxelCoordinates = {
    ...validCoords,
    voxelX: 10000000,
  };

  describe('toGlyph', () => {
    test('with valid coordinate', () => {
      const result = VoxelCoordinate(validCoords).toGlyph();
      expect(result.isSuccess).toBeTruthy();
      expect(result.value.code).toBe('100256123456');
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
      expect(result.value.code).toBe('0C55:00D5:0922:0002');
    });
    test('with invalid coordinate', () => {
      const result = VoxelCoordinate(inValidCoords).toGalacticCoordinates();
      expect(result.isSuccess).toBeFalsy();
    });
  });
});

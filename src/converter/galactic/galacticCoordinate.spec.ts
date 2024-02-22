import { describe, expect, test } from 'vitest';

import { GalacticCoordinate } from './galacticCoordinate';

describe('Galactic Coordinate Converter', () => {
  describe('toGlyph', () => {
    test('with valid coordinate', () => {
      const result = GalacticCoordinate({ code: '0C55:00D5:0922:0234' }).toGlyph();
      expect(result.isSuccess).toBeTruthy();
      expect(result.value.code).toBe('023456123456');
    });
    test('with invalid coordinate', () => {
      const result = GalacticCoordinate({ code: '0000C55:00D5:0922:0234' }).toGlyph();
      expect(result.isSuccess).toBeFalsy();
    });
  });

  describe('toVoxel', () => {
    test('with valid coordinate', () => {
      const result = GalacticCoordinate({ code: '0C55:00D5:0922:0234' }).toVoxel();
      expect(result.isSuccess).toBeTruthy();
      expect(result.value.voxelX).toBe(1110);
      expect(result.value.voxelY).toBe(86);
      expect(result.value.voxelZ).toBe(291);
    });
    test('with invalid coordinate', () => {
      const result = GalacticCoordinate({ code: '0000C55:00D5:0922:0234' }).toVoxel();
      expect(result.isSuccess).toBeFalsy();
    });
  });
});

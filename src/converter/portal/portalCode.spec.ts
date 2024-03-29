import { describe, expect, test } from 'vitest';

import { PortalCode } from './portalCode';

describe('Portal Coordinate Converter', () => {
  describe('toGalacticCoordinates', () => {
    test('with valid coordinate', () => {
      const result = PortalCode({ code: '023456123456' }).toGalacticCoordinates();
      expect(result.isSuccess).toBeTruthy();
      expect(result.value.code).toBe('0C55:00D5:0922:0234');
    });
    test('with invalid coordinate', () => {
      const result = PortalCode({ code: '0000023456123456' }).toGalacticCoordinates();
      expect(result.isSuccess).toBeFalsy();
    });
  });

  describe('toVoxel', () => {
    test('with valid coordinate', () => {
      const result = PortalCode({ code: '023456123456' }).toVoxel();
      expect(result.isSuccess).toBeTruthy();
      expect(result.value.voxelX).toBe(1110);
      expect(result.value.voxelY).toBe(86);
      expect(result.value.voxelZ).toBe(291);
    });
    test('with invalid coordinate', () => {
      const result = PortalCode({ code: '0000023456123456' }).toVoxel();
      expect(result.isSuccess).toBeFalsy();
    });
  });
});

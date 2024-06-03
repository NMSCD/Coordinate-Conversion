import { describe, expect, test } from 'vitest';

import { PortalCode } from './portalCode';

describe('Portal Coordinate Converter', () => {
  describe('toGalacticCoordinates', () => {
    test('with valid coordinate', () => {
      const result = PortalCode({ code: '023456123456' }).toGalacticCoordinates();
      expect(result.isSuccess).toBeTruthy();
      expect(result.value.code).toBe('0C55:00D5:0922:0234');
    });

    test('with valid coordinate and last expected digit being a character', () => {
      const result = PortalCode({ code: '405EA21107FF' }).toGalacticCoordinates();
      expect(result.isSuccess).toBeTruthy();
      expect(result.value.code).toBe('0FFE:0021:090F:005E');
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
      expect(result.value.VoxelX).toBe(1110);
      expect(result.value.VoxelY).toBe(86);
      expect(result.value.VoxelZ).toBe(291);
    });
    test('with invalid coordinate', () => {
      const result = PortalCode({ code: '0000023456123456' }).toVoxel();
      expect(result.isSuccess).toBeFalsy();
    });
  });
});

import { describe, expect, test } from 'vitest';

import { VoxelInputValidator } from './voxelInputValidation';
import type { VoxelCoordinates } from '@/types/voxelTypes';
import {
  planetIndexMax,
  planetIndexMin,
  solarSystemIndexMax,
  solarSystemIndexMin,
  voxelMax,
  voxelMin,
} from '@/constants/restrictions';

describe('Voxel Validation', () => {
  const baseCoords: VoxelCoordinates = {
    VoxelX: 1110,
    VoxelY: 86,
    VoxelZ: 291,
    PlanetIndex: 0,
    SolarSystemIndex: 564,
  };
  test('on null', () => {
    const coords: any = null;
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too small VoxelX coordinate', () => {
    const coords = { ...baseCoords, VoxelX: voxelMin - 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too big VoxelX coordinate', () => {
    const coords = { ...baseCoords, VoxelX: voxelMax + 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });

  test('on too small VoxelY coordinate', () => {
    const coords = { ...baseCoords, VoxelY: voxelMin - 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too big VoxelY coordinate', () => {
    const coords = { ...baseCoords, VoxelY: voxelMax + 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });

  test('on too small VoxelZ coordinate', () => {
    const coords = { ...baseCoords, VoxelZ: voxelMin - 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too big VoxelZ coordinate', () => {
    const coords = { ...baseCoords, VoxelZ: voxelMax + 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });

  test('on too small PlanetIndex coordinate', () => {
    const coords = { ...baseCoords, PlanetIndex: planetIndexMin - 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too big PlanetIndex coordinate', () => {
    const coords = { ...baseCoords, PlanetIndex: planetIndexMax + 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });

  test('on too small SolarSystemIndex coordinate', () => {
    const coords = { ...baseCoords, SolarSystemIndex: solarSystemIndexMin - 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too big SolarSystemIndex coordinate', () => {
    const coords = { ...baseCoords, SolarSystemIndex: solarSystemIndexMax + 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
});

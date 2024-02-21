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
    voxelX: 1110,
    voxelY: 86,
    voxelZ: 291,
    planetIndex: 0,
    solarSystemIndex: 564,
  };
  test('on null', () => {
    const coords: any = null;
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too small voxelX coordinate', () => {
    const coords = { ...baseCoords, voxelX: voxelMin - 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too big voxelX coordinate', () => {
    const coords = { ...baseCoords, voxelX: voxelMax + 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });

  test('on too small voxelY coordinate', () => {
    const coords = { ...baseCoords, voxelY: voxelMin - 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too big voxelY coordinate', () => {
    const coords = { ...baseCoords, voxelY: voxelMax + 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });

  test('on too small voxelZ coordinate', () => {
    const coords = { ...baseCoords, voxelZ: voxelMin - 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too big voxelZ coordinate', () => {
    const coords = { ...baseCoords, voxelZ: voxelMax + 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });

  test('on too small planetIndex coordinate', () => {
    const coords = { ...baseCoords, planetIndex: planetIndexMin - 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too big planetIndex coordinate', () => {
    const coords = { ...baseCoords, planetIndex: planetIndexMax + 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });

  test('on too small solarSystemIndex coordinate', () => {
    const coords = { ...baseCoords, solarSystemIndex: solarSystemIndexMin - 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
  test('on too big solarSystemIndex coordinate', () => {
    const coords = { ...baseCoords, solarSystemIndex: solarSystemIndexMax + 1 };
    expect(VoxelInputValidator(coords).isValid).toBeFalsy();
  });
});

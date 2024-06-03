import {
  planetIndexMax,
  planetIndexMin,
  solarSystemIndexMax,
  solarSystemIndexMin,
  voxelMax,
  voxelMin,
} from '@/constants/restrictions';
import type { ValidationResult } from '@/contracts/validationResult';
import type { Validator } from '@/types/validator';
import type { VoxelInput } from '@/types/voxelTypes';
import { maxValue, minValue } from './numberValidation';
import { notNull } from './baseValidation';
import { validationMessage } from '@/constants/validationMessages';

export const VoxelInputValidator: Validator<VoxelInput> = (inputProps: VoxelInput) => {
  const mainObjValidationResult = notNull(validationMessage.cannotBeNull('voxelInput'))(inputProps);
  if (mainObjValidationResult.isValid === false) {
    return mainObjValidationResult;
  }

  const validations: Array<() => ValidationResult> = [
    () => notNull(validationMessage.cannotBeNull('VoxelX'))(inputProps.VoxelX),
    () => minValue(voxelMin, 'VoxelX')(inputProps.VoxelX),
    () => maxValue(voxelMax, 'VoxelX')(inputProps.VoxelX),
    //
    () => notNull(validationMessage.cannotBeNull('VoxelY'))(inputProps.VoxelY),
    () => minValue(voxelMin, 'VoxelY')(inputProps.VoxelY),
    () => maxValue(voxelMax, 'VoxelY')(inputProps.VoxelY),
    //
    () => notNull(validationMessage.cannotBeNull('VoxelZ'))(inputProps.VoxelZ),
    () => minValue(voxelMin, 'VoxelZ')(inputProps.VoxelZ),
    () => maxValue(voxelMax, 'VoxelZ')(inputProps.VoxelZ),
    //
    () => notNull(validationMessage.cannotBeNull('SolarSystemIndex'))(inputProps.SolarSystemIndex),
    () => minValue(solarSystemIndexMin, 'SolarSystemIndex')(inputProps.SolarSystemIndex),
    () => maxValue(solarSystemIndexMax, 'SolarSystemIndex')(inputProps.SolarSystemIndex),
    //
    () => notNull(validationMessage.cannotBeNull('PlanetIndex'))(inputProps.PlanetIndex),
    () => minValue(planetIndexMin, 'PlanetIndex')(inputProps.PlanetIndex),
    () => maxValue(planetIndexMax, 'PlanetIndex')(inputProps.PlanetIndex),
  ];
  for (const validation of validations) {
    const result = validation();
    if (result.isValid === true) continue;

    return result;
  }
  return { isValid: true };
};

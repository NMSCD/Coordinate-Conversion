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
    () => notNull(validationMessage.cannotBeNull('voxelX'))(inputProps.voxelX),
    () => minValue(voxelMin, 'voxelX')(inputProps.voxelX),
    () => maxValue(voxelMax, 'voxelX')(inputProps.voxelX),
    //
    () => notNull(validationMessage.cannotBeNull('voxelY'))(inputProps.voxelY),
    () => minValue(voxelMin, 'voxelY')(inputProps.voxelY),
    () => maxValue(voxelMax, 'voxelY')(inputProps.voxelY),
    //
    () => notNull(validationMessage.cannotBeNull('voxelZ'))(inputProps.voxelZ),
    () => minValue(voxelMin, 'voxelZ')(inputProps.voxelZ),
    () => maxValue(voxelMax, 'voxelZ')(inputProps.voxelZ),
    //
    () => notNull(validationMessage.cannotBeNull('solarSystemIndex'))(inputProps.solarSystemIndex),
    () => minValue(solarSystemIndexMin, 'solarSystemIndex')(inputProps.solarSystemIndex),
    () => maxValue(solarSystemIndexMax, 'solarSystemIndex')(inputProps.solarSystemIndex),
    //
    () => notNull(validationMessage.cannotBeNull('planetIndex'))(inputProps.planetIndex),
    () => minValue(planetIndexMin, 'planetIndex')(inputProps.planetIndex),
    () => maxValue(planetIndexMax, 'planetIndex')(inputProps.planetIndex),
  ];
  for (const validation of validations) {
    const result = validation();
    if (result.isValid === true) continue;

    return result;
  }
  return { isValid: true };
};

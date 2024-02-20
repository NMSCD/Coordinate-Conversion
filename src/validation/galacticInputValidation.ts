import { CoordinateType } from '@/constants/coordinateType';
import { maxGalacticCoordLength, minGalacticCoordLength } from '@/constants/restrictions';
import { validationMessage } from '@/constants/validationMessages';
import type { GalacticCodeInput, GalacticInput } from '@/types/galacticTypes';
import type { Validator } from '@/types/validator';
import { multiValidation, notNull } from './baseValidation';
import { lengthIsEqualTo } from './textValidation';

export const GalacticCodeInputValidator: Validator<GalacticCodeInput> = (code: GalacticCodeInput) => {
  const validator = multiValidation(
    notNull(validationMessage.cannotBeNull(CoordinateType.GalacticCoordinates.toString())), //
    lengthIsEqualTo(minGalacticCoordLength, maxGalacticCoordLength)
  );
  return validator(code);
};

export const GalacticInputValidator: Validator<GalacticInput> = (inputProps: GalacticInput) => {
  if (inputProps.code == null && inputProps.groups == null) {
    return {
      isValid: false,
      errorMessage: validationMessage.atleast1InputIsRequired,
    };
  }

  if (inputProps.code != null) {
    return GalacticCodeInputValidator(inputProps.code);
  }

  return { isValid: true };
};

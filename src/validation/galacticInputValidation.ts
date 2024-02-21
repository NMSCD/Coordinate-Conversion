import { CoordinateType } from '@/constants/coordinateType';
import { maxGalacticCoordLength, minGalacticCoordLength } from '@/constants/restrictions';
import { validationMessage } from '@/constants/validationMessages';
import type { GalacticCodeInput, GalacticInput } from '@/types/galacticTypes';
import type { Validator } from '@/types/validator';
import { multiValidation, notNull } from './baseValidation';
import { lengthIsEqualTo, onlyAllowedChars } from './textValidation';
import type { ValidationResult } from '@/contracts/validationResult';

export const GalacticCodeInputValidator: Validator<GalacticCodeInput> = (code: GalacticCodeInput) => {
  const validator = multiValidation(
    notNull(validationMessage.cannotBeNull(CoordinateType.GalacticCoordinates.toString())), //
    lengthIsEqualTo(minGalacticCoordLength, maxGalacticCoordLength),
    onlyAllowedChars(':1234567890abcdefABCDEF')
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

export const galacticCodePattern = (value: string): ValidationResult => {
  const safeValue = value ?? '';
  const unexpectedPatternResult = {
    isValid: false,
    errorMessage: validationMessage.unexpectedPattern('Galactic', safeValue),
  };

  if (safeValue.length === minGalacticCoordLength) {
    if (safeValue.includes(':')) return unexpectedPatternResult;
    return { isValid: true };
  }

  if (safeValue.includes(':') == false) return unexpectedPatternResult;

  const semiColonIndexes = [5, 10, 15];
  for (const semiColonIndex of semiColonIndexes) {
    if (safeValue.length < semiColonIndex || safeValue[semiColonIndex - 1] !== ':') {
      return unexpectedPatternResult;
    }
  }

  return { isValid: true };
};

import { CoordinateType } from '@/constants/coordinateType';
import { validationMessage } from '@/constants/validationMessages';
import type { GlyphCodeInput, GlyphHexArrayInput, GlyphInput, GlyphNumberArrayInput } from '@/types/glyphTypes';
import type { Validator } from '@/types/validator';
import { multiValidation, notNull } from './baseValidation';
import { lengthIsEqualTo, onlyAllowedChars } from './textValidation';
import { maxItems, minItems } from './arrayValidation';

export const GlyphCodeInputValidator: Validator<GlyphCodeInput> = (code: GlyphCodeInput) => {
  const validator = multiValidation(
    notNull(validationMessage.cannotBeNull(CoordinateType.Glyphs.toString())), //
    onlyAllowedChars('1234567890abcdefABCDEF'),
    lengthIsEqualTo(12)
  );
  return validator(code);
};

export const GlyphHexArrayInputValidator: Validator<GlyphHexArrayInput> = (array: GlyphHexArrayInput) => {
  const validator = multiValidation<GlyphHexArrayInput>(
    notNull(validationMessage.cannotBeNull(CoordinateType.Glyphs.toString())), //
    (arr) => onlyAllowedChars('1234567890abcdefABCDEF')(arr.join('')),
    minItems(12),
    maxItems(12)
  );
  return validator(array);
};

export const GlyphNumberArrayInputValidator: Validator<GlyphNumberArrayInput> = (numArray: GlyphNumberArrayInput) => {
  const validator = multiValidation<GlyphNumberArrayInput>(
    notNull(validationMessage.cannotBeNull(CoordinateType.Glyphs.toString())), //
    (arr) => onlyAllowedChars('1234567890abcdefABCDEF')(arr.map((num) => num.toString(16)).join('')),
    minItems(12),
    maxItems(12)
  );
  return validator(numArray);
};

export const GlyphInputValidator: Validator<GlyphInput> = (inputProps: GlyphInput) => {
  if (inputProps.code == null && inputProps.hexArray == null && inputProps.numberArray == null) {
    return {
      isValid: false,
      errorMessage: validationMessage.atleast1InputIsRequired,
    };
  }

  if (inputProps.code != null) {
    return GlyphCodeInputValidator(inputProps.code);
  }
  if (inputProps.hexArray != null) {
    return GlyphHexArrayInputValidator(inputProps.hexArray);
  }
  if (inputProps.numberArray != null) {
    return GlyphNumberArrayInputValidator(inputProps.numberArray);
  }

  return { isValid: true };
};

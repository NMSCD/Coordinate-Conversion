import { CoordinateType } from '@/constants/coordinateType';
import { validationMessage } from '@/constants/validationMessages';
import type { GlyphCodeInput, GlyphInput } from '@/types/glyphTypes';
import type { Validator } from '@/types/validator';
import { multiValidation, notNull } from './baseValidation';
import { lengthIsEqualTo } from './textValidation';

export const GlyphCodeInputValidator: Validator<GlyphCodeInput> = (code: GlyphCodeInput) => {
  const validator = multiValidation(
    notNull(validationMessage.cannotBeNull(CoordinateType.Glyphs.toString())), //
    lengthIsEqualTo(12)
  );
  return validator(code);
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

  return { isValid: true };
};

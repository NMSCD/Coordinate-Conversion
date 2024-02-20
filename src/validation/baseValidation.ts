import type { ValidationResult } from '@/contracts/validationResult';

export const noValidation = <T>(_: T): ValidationResult => ({ isValid: true });

export const notNull =
  (customErrMsg?: string) =>
  <T>(value: T): ValidationResult => {
    if (value != null) {
      return { isValid: true };
    }

    return {
      isValid: false,
      errorMessage: customErrMsg ?? `Field shouldn't be empty`,
    };
  };

export const multiValidation =
  <T>(...validations: Array<(validationVal: T) => ValidationResult>) =>
  (value: T): ValidationResult => {
    for (const validation of validations) {
      const result = validation(value);
      if (result.isValid === false) return result;
    }

    return { isValid: true };
  };

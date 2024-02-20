import { validationMessage } from '@/constants/validationMessages';
import type { ValidationResult } from '@/contracts/validationResult';

export const minLength =
  (minLength: number) =>
  (value: string): ValidationResult => {
    if ((value?.length ?? 0) >= minLength) {
      return { isValid: true };
    }

    return {
      isValid: false,
      errorMessage: validationMessage.minLength(minLength),
    };
  };

export const maxLength =
  (maxLength: number) =>
  (value: string): ValidationResult => {
    if ((value?.length ?? 0) <= maxLength) {
      return { isValid: true };
    }

    return {
      isValid: false,
      errorMessage: validationMessage.maxLength(maxLength),
    };
  };

export const lengthIsEqualTo =
  (...lengths: Array<number>) =>
  (value: string): ValidationResult => {
    const valueLength = value?.length ?? 0;
    if (lengths.includes(valueLength)) {
      return { isValid: true };
    }

    return {
      isValid: false,
      errorMessage: validationMessage.unexpectedValue('Length', valueLength, lengths),
    };
  };

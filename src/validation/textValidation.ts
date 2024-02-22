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

export const onlyAllowedChars =
  (allowedChars: string, propName?: string) =>
  (value: string): ValidationResult => {
    const safeValue = value ?? '';
    const charArr = allowedChars.split('');
    for (const char of safeValue) {
      if (charArr.includes(char) === false) {
        return {
          isValid: false,
          errorMessage: validationMessage.unexpectedValue(propName ?? 'Character', char, charArr),
        };
      }
    }

    return { isValid: true };
  };

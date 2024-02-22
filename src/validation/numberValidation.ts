import { validationMessage } from '@/constants/validationMessages';
import type { ValidationResult } from '@/contracts/validationResult';

export const minValue =
  (min: number, propName?: string) =>
  (value: number): ValidationResult => {
    if ((value ?? 0) >= min) {
      return { isValid: true };
    }

    return {
      isValid: false,
      errorMessage: validationMessage.minValue(propName ?? 'property', min),
    };
  };

export const maxValue =
  (max: number, propName?: string) =>
  (value: number): ValidationResult => {
    if ((value ?? 0) < max) {
      return { isValid: true };
    }

    return {
      isValid: false,
      errorMessage: validationMessage.maxValue(propName ?? 'property', max),
    };
  };

export const valueIsEqualTo =
  (...values: Array<number>) =>
  (value: number): ValidationResult => {
    const safeValue = value ?? 0;
    if (values.includes(safeValue)) {
      return { isValid: true };
    }

    return {
      isValid: false,
      errorMessage: validationMessage.unexpectedValue('value', safeValue, values),
    };
  };

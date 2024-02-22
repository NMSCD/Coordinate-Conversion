import { makeArrayOrDefault } from '@/helper/arrayHelper';
import type { ValidationResult } from '@/contracts/validationResult';
import { validationMessage } from '@/constants/validationMessages';

export const minItems =
  (minLength: number, itemName?: string) =>
  <T>(values: Array<T>): ValidationResult => {
    const safeArr = makeArrayOrDefault(values);
    if (safeArr.length >= minLength) {
      return { isValid: true };
    }

    return {
      isValid: false,
      errorMessage: validationMessage.minNumItems(itemName ?? 'item', minLength),
    };
  };

export const maxItems =
  (maxLength: number, itemName?: string) =>
  <T>(values: Array<T>): ValidationResult => {
    const safeArr = makeArrayOrDefault(values);
    if (safeArr.length < maxLength) {
      return { isValid: true };
    }

    return {
      isValid: false,
      errorMessage: validationMessage.maxNumItems(itemName ?? 'item', maxLength),
    };
  };

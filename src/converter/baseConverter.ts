import { validationMessage } from '@/constants/validationMessages';
import type { ResultWithValue } from '@/contracts/result';
import type { ValidationResult } from '@/contracts/validationResult';

interface IBaseConverter<TI, TO> {
  input: TI;
  converter: (input: TI) => TO;
  inputValidator: (input: TI) => ValidationResult;
}

export const baseConverter =
  <TI, TO extends {}>(props: IBaseConverter<TI, TO>) =>
  (): ResultWithValue<TO> => {
    const validationResult = props.inputValidator(props.input);
    if (validationResult.isValid === false) {
      return {
        isSuccess: false,
        value: {} as TO,
        errorMessage: validationResult.errorMessage ?? validationMessage.generic,
      };
    }

    try {
      const conversionResult = props.converter(props.input);
      return {
        isSuccess: true,
        errorMessage: '',
        value: conversionResult,
      };
    } catch (ex) {
      return {
        isSuccess: false,
        value: {} as TO,
        errorMessage: ex?.toString?.() ?? 'Unknown exception occurred during conversion',
      };
    }
  };

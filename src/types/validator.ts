import type { ValidationResult } from '@/contracts/validationResult';

export type Validator<TI> = (inputProps: TI) => ValidationResult;

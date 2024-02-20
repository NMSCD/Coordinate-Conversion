export const validationMessage = {
  generic: 'Validation failed',
  atleast1InputIsRequired: 'You need to pass in at least 1 input',
  cannotBeNull: (propName: string) => `${propName} cannot be null`,
  unexpectedValue: (propName: string, length: number, expectedLengths: Array<number>) =>
    `${propName} is an unexpected value (${length}), expected values ${expectedLengths.join(', ')}`,
  minLength: (minLength: number) => `Minimum length required is ${minLength}`,
  maxLength: (maxLength: number) => `Text is too long! Maximum length allowed is ${maxLength}`,
  minValue: (propName: string, min: number) => `Minimum value for ${propName} is ${min}`,
  maxValue: (propName: string, max: number) => `Maximum value for ${propName} allowed is ${max}`,
};

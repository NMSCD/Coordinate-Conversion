export const validationMessage = {
  generic: 'Validation failed',
  atleast1InputIsRequired: 'You need to pass in at least 1 input',
  cannotBeNull: (propName: string) => `${propName} cannot be null`,
  unexpectedValue: (propName: string, value: number | string, expectedValues: Array<number> | Array<string>) =>
    `${propName} is an unexpected value (${value}), expected values ${expectedValues.join(', ')}`,
  minLength: (minLength: number) => `Minimum length required is ${minLength}`,
  maxLength: (maxLength: number) => `Text is too long! Maximum length allowed is ${maxLength}`,
  minValue: (propName: string, min: number) => `Minimum value for ${propName} is ${min}`,
  maxValue: (propName: string, max: number) => `Maximum value for ${propName} allowed is ${max}`,
  unexpectedPattern: (propName: string, value: string) =>
    `${propName} has a value (${value}) which does not match the expected pattern`,
  minNumItems: (itemName: string, minLength: number) =>
    `Minimum number of ${itemName} that need to be provided is ${minLength}`,
  maxNumItems: (itemName: string, maxLength: number) =>
    `Maximum number of ${itemName} allowed to be provided is ${maxLength}`,
};

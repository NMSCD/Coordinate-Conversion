import { describe, expect, test } from 'vitest';

import { multiValidation, noValidation, notNull } from './baseValidation';

describe('Base Validation', () => {
  test('noValidation always valid', () => {
    expect(noValidation({}).isValid).toBeTruthy();
  });
  test('notNullValidator on notNull', () => {
    const arr: any = {};
    const validator = notNull();
    expect(validator(arr).isValid).toBeTruthy();
  });
  test('notNullValidator on null', () => {
    const arr: any = null;
    const validator = notNull();
    expect(validator(arr).isValid).toBeFalsy();
  });
  test('notNullValidator custom error message', () => {
    const arr: any = null;
    const err = 'tester test test';
    const validator = notNull(err);
    expect(validator(arr).isValid).toBeFalsy();
    expect(validator(arr).errorMessage).toBe(err);
  });

  describe('Multi Validation ', () => {
    test('multiple validators exec each validator', () => {
      let count = 0;
      const fakeValidator = () => {
        count++;
        return { isValid: true };
      };
      const valArr = [fakeValidator, fakeValidator, fakeValidator];
      const validator = multiValidation(...valArr);
      validator({});
      expect(count).toBe(valArr.length);
    });
    test('multiple validators exec each validator until failure', () => {
      let count = 0;
      const fakeValidator = () => {
        count++;
        return { isValid: false };
      };
      const validator = multiValidation(fakeValidator, fakeValidator, fakeValidator);
      validator({});
      expect(count).toBe(1);
    });
  });
});

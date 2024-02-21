import { describe, expect, test } from 'vitest';

import { minValue, maxValue, valueIsEqualTo } from './numberValidation';

describe('Number Validation', () => {
  describe('minValue', () => {
    test('on null', () => {
      const num: any = null;
      const validator = minValue(5);
      expect(validator(num).isValid).toBeFalsy();
    });
    test('with low value', () => {
      const num = 1;
      const validator = minValue(5);
      expect(validator(num).isValid).toBeFalsy();
    });
    test('with high value', () => {
      const num = 20;
      const validator = minValue(5);
      expect(validator(num).isValid).toBeTruthy();
    });
  });

  describe('maxValue', () => {
    test('on null', () => {
      const num: any = null;
      const validator = maxValue(5);
      expect(validator(num).isValid).toBeTruthy();
    });
    test('with low value', () => {
      const num = 1;
      const validator = maxValue(5);
      expect(validator(num).isValid).toBeTruthy();
    });
    test('with high value', () => {
      const num = 20;
      const validator = maxValue(5);
      expect(validator(num).isValid).toBeFalsy();
    });
  });

  describe('valueIsEqualTo', () => {
    test('on null', () => {
      const num: any = null;
      const validator = valueIsEqualTo(5, 12, 15);
      expect(validator(num).isValid).toBeFalsy();
    });
    test('with value not in list', () => {
      const num = 11;
      const validator = valueIsEqualTo(5, 12, 15);
      expect(validator(num).isValid).toBeFalsy();
    });
    test('with value in list', () => {
      const num = 12;
      const validator = valueIsEqualTo(5, 12, 15);
      expect(validator(num).isValid).toBeTruthy();
    });
    test('with no options', () => {
      const num = 12;
      const validator = valueIsEqualTo();
      expect(validator(num).isValid).toBeFalsy();
    });
  });
});

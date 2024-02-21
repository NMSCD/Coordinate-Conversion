import { describe, expect, test } from 'vitest';

import { lengthIsEqualTo, maxLength, minLength, onlyAllowedChars } from './textValidation';

describe('Text Validation', () => {
  describe('minItems', () => {
    test('on null', () => {
      const text: any = null;
      const validator = minLength(5);
      expect(validator(text).isValid).toBeFalsy();
    });
    test('on empty string', () => {
      const text = '';
      const validator = minLength(5);
      expect(validator(text).isValid).toBeFalsy();
    });
    test('with too few characters', () => {
      const text = 'abc';
      const validator = minLength(5);
      expect(validator(text).isValid).toBeFalsy();
    });
    test('with enough characters', () => {
      const text = 'testerString';
      const validator = minLength(5);
      expect(validator(text).isValid).toBeTruthy();
    });
  });

  describe('maxLength', () => {
    test('on null', () => {
      const text: any = null;
      const validator = maxLength(5);
      expect(validator(text).isValid).toBeTruthy();
    });
    test('on empty string', () => {
      const text = '';
      const validator = maxLength(5);
      expect(validator(text).isValid).toBeTruthy();
    });
    test('with too many characters', () => {
      const text = 'testerString';
      const validator = maxLength(5);
      expect(validator(text).isValid).toBeFalsy();
    });
    test('with correct number of characters', () => {
      const text = 'abc';
      const validator = maxLength(5);
      expect(validator(text).isValid).toBeTruthy();
    });
  });

  describe('lengthIsEqualTo', () => {
    test('on null', () => {
      const text: any = null;
      const validator = lengthIsEqualTo(5);
      expect(validator(text).isValid).toBeFalsy();
    });
    test('on empty string', () => {
      const text = '';
      const validator = lengthIsEqualTo(5);
      expect(validator(text).isValid).toBeFalsy();
    });
    test('with too many characters', () => {
      const text = 'testerString';
      const validator = lengthIsEqualTo(5);
      expect(validator(text).isValid).toBeFalsy();
    });
    test('with correct number of characters', () => {
      const text = 'abc';
      const validator = lengthIsEqualTo(3, 5);
      expect(validator(text).isValid).toBeTruthy();
    });
    test('with incorrect length options', () => {
      const text = 'abc';
      const validator = lengthIsEqualTo(1, 5, 7);
      expect(validator(text).isValid).toBeFalsy();
    });
  });

  describe('onlyAllowedChars', () => {
    test('on null', () => {
      const text: any = null;
      const validator = onlyAllowedChars('a');
      expect(validator(text).isValid).toBeTruthy();
    });
    test('on empty string', () => {
      const text = '';
      const validator = onlyAllowedChars('a');
      expect(validator(text).isValid).toBeTruthy();
    });
    test('with invalid characters', () => {
      const text = 'testerString';
      const validator = onlyAllowedChars('b');
      expect(validator(text).isValid).toBeFalsy();
    });
    test('with valid characters', () => {
      const text = 'abc';
      const validator = onlyAllowedChars('abcd');
      expect(validator(text).isValid).toBeTruthy();
    });
  });
});

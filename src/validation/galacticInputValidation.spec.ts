import { describe, expect, test } from 'vitest';

import { GalacticInputValidator, GalacticCodeInputValidator, galacticCodePattern } from './galacticInputValidation';
import type { GlyphInput } from '@/types/glyphTypes';

describe('Galactic Input Validation', () => {
  describe('general input validation', () => {
    test('nothing provided is invalid', () => {
      const inputProps: GlyphInput = {};
      expect(GalacticInputValidator(inputProps).isValid).toBeFalsy();
    });
  });

  describe('galactic code validation', () => {
    test('null code is not valid', () => {
      const code: any = null;
      expect(GalacticCodeInputValidator(code).isValid).toBeFalsy();
    });
    test('empty string code is not valid', () => {
      const code = '';
      expect(GalacticCodeInputValidator(code).isValid).toBeFalsy();
    });
    test('too short code is not valid', () => {
      const code = '1234:';
      expect(GalacticCodeInputValidator(code).isValid).toBeFalsy();
    });
    test('invalid in the middle length code is not valid', () => {
      const code = '1234:1234:1234:14';
      expect(GalacticCodeInputValidator(code).isValid).toBeFalsy();
    });
    test('too long code is not valid', () => {
      const code = '1234:1234:1234:1234:0000';
      expect(GalacticCodeInputValidator(code).isValid).toBeFalsy();
    });
    test('contains valid characters', () => {
      const code = '1234:ABCD:1234:CDEF';
      expect(GalacticCodeInputValidator(code).isValid).toBeTruthy();
    });
    test('contains invalid characters', () => {
      const code = '1234:test:1234:fred';
      expect(GalacticCodeInputValidator(code).isValid).toBeFalsy();
    });
  });

  describe('galactic code pattern validation', () => {
    test('contains valid characters, semicolons', () => {
      const code = '1234:1234:1234:1234';
      expect(galacticCodePattern(code).isValid).toBeTruthy();
    });
    test('contains valid characters, no semicolons', () => {
      const code = '1234123412341234';
      expect(galacticCodePattern(code).isValid).toBeTruthy();
    });
    test('short coords contains invalid semicolon position', () => {
      const code = '123412341234:234';
      expect(galacticCodePattern(code).isValid).toBeFalsy();
    });
    test('contains invalid semicolon position', () => {
      const code = '12345:234:1234:1234';
      expect(galacticCodePattern(code).isValid).toBeFalsy();
    });
    test('contains missing semicolon position', () => {
      const code = '123451234:1234:1234';
      expect(galacticCodePattern(code).isValid).toBeFalsy();
    });
  });
});

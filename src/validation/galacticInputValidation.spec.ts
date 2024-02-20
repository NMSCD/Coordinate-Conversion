import { describe, expect, test } from 'vitest';

import { GalacticInputValidator, GalacticCodeInputValidator } from './galacticInputValidation';
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
  });
});

import { describe, expect, test } from 'vitest';

import { GlyphCodeInputValidator, GlyphInputValidator } from './glyphInputValidation';
import type { GlyphInput } from '@/types/glyphTypes';

describe('Glyph Input Validation', () => {
  describe('general input validation', () => {
    test('nothing provided is invalid', () => {
      const inputProps: GlyphInput = {};
      expect(GlyphInputValidator(inputProps).isValid).toBeFalsy();
    });
  });

  describe('glyph code validation', () => {
    test('null code is not valid', () => {
      const code: any = null;
      expect(GlyphCodeInputValidator(code).isValid).toBeFalsy();
    });
    test('empty string code is not valid', () => {
      const code = '';
      expect(GlyphCodeInputValidator(code).isValid).toBeFalsy();
    });
    test('too short code is not valid', () => {
      const code = '1234';
      expect(GlyphCodeInputValidator(code).isValid).toBeFalsy();
    });
    test('too long code is not valid', () => {
      const code = '12345678901234567890';
      expect(GlyphCodeInputValidator(code).isValid).toBeFalsy();
    });
    test('correct code length is valid', () => {
      const code = '123456789012';
      const result = GlyphCodeInputValidator(code);
      expect(result.isValid).toBeTruthy();
    });
  });
});

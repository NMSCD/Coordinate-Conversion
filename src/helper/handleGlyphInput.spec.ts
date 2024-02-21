import { describe, expect, test } from 'vitest';

import { handleGlyphCode } from './handleGlyphInput';

describe('Glyph Input handler', () => {
  test('valid portal code is returned', () => {
    const portalCode = '123456789012';
    const result = handleGlyphCode({
      code: portalCode,
    });
    expect(result).toBe(portalCode);
  });

  test('valid portal code with uppercase to lower', () => {
    const portalCode = '123abc789012';
    const result = handleGlyphCode({
      code: portalCode.toUpperCase(),
    });
    expect(result).toBe(portalCode);
  });

  test('valid portal hexArray returns portal code', () => {
    const portalCode = '123abc789012';
    const result = handleGlyphCode({
      hexArray: portalCode.split(''),
    });
    expect(result).toBe(portalCode);
  });

  test('valid portal number array returns portal code', () => {
    const numberArray = [1, 2, 3, 11, 12, 13, 7, 8, 9, 0, 1, 2];
    const portalCode = numberArray
      .map((na) => na.toString(16))
      .join('')
      .toLocaleLowerCase();
    const result = handleGlyphCode({
      numberArray,
    });
    expect(result).toBe(portalCode);
  });
});

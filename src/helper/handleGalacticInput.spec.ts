import { describe, expect, test } from 'vitest';

import { handleGalacticCoordinate } from './handleGalacticInput';

describe('Galactic Input handler', () => {
  test('valid galactic code is returned', () => {
    const galacticCode = '0C55:00D5:0922:0234';
    const result = handleGalacticCoordinate({
      code: galacticCode,
    });
    expect(result).toBe(galacticCode);
  });

  test('valid galactic code with semicolons', () => {
    const galacticCode = '0C55:00D5:0922:0234';
    const result = handleGalacticCoordinate({
      code: galacticCode,
    });
    expect(result).toBe(galacticCode);
  });

  test('valid galactic code without semicolons', () => {
    const galacticCode = '0C55:00D5:0922:0234';
    const result = handleGalacticCoordinate({
      code: galacticCode.replaceAll(':', ''),
    });
    expect(result).toBe(galacticCode);
  });

  test('valid portal group is returned', () => {
    const galacticCode = '0C55:00D5:0922:0234';
    const result = handleGalacticCoordinate({
      groups: ['0C55', '00D5', '0922', '0234'],
    });
    expect(result).toBe(galacticCode);
  });
});

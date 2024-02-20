import { describe, expect, test, vi } from 'vitest';

import { baseConverter } from './baseConverter';

describe('Base Converter', () => {
  describe('calls functions passed in', () => {
    const mockValidator = vi.fn().mockReturnValue({ isValid: true });
    const mockConverter = vi.fn().mockReturnValue('test');
    const fakeConverter = baseConverter<number, string>({
      input: 123,
      converter: (_) => mockConverter(),
      inputValidator: (_) => mockValidator(),
    });

    test('validation runs', () => {
      fakeConverter();
      expect(mockValidator).toHaveBeenCalled();
    });
    test('converter runs', () => {
      fakeConverter();
      expect(mockConverter).toHaveBeenCalled();
    });
  });

  describe('if validation fails', () => {
    const mockConverter = vi.fn().mockReturnValue('test');
    const fakeConverter = baseConverter<number, string>({
      input: 123,
      converter: (_) => mockConverter(),
      inputValidator: (_) => vi.fn().mockReturnValue({ isValid: false })(),
    });

    test('should not run converter', () => {
      fakeConverter();
      expect(mockConverter).toHaveBeenCalledTimes(0);
    });

    test('should return an error result', () => {
      const result = fakeConverter();
      expect(result.isSuccess).toBeFalsy();
    });
  });

  describe('if conversion fails', () => {
    const mockConverter = vi.fn().mockReturnValue('test');
    const fakeConverter = baseConverter<number, string>({
      input: 123,
      converter: (_) => mockConverter(),
      inputValidator: (_) => vi.fn().mockReturnValue({ isValid: true })(),
    });

    test('should run converter', () => {
      fakeConverter();
      expect(mockConverter).toHaveBeenCalledTimes(1);
    });

    test('should return an error result', () => {
      const fakeConverterWithBadConversion = baseConverter<number, string>({
        input: 123,
        converter: (_) => {
          throw 'mock';
        },
        inputValidator: (_) => vi.fn().mockReturnValue({ isValid: true })(),
      });
      const result = fakeConverterWithBadConversion();
      expect(result.isSuccess).toBeFalsy();
    });
  });
});

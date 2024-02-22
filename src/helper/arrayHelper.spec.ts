import { test, describe, expect } from 'vitest';

import { makeArrayOrDefault } from './arrayHelper';

describe('Helper tests', () => {
  describe('Make array or default', () => {
    test('makeArrayOrDefault on undefined', () => {
      const arr: any = undefined;
      const arrVal = makeArrayOrDefault(arr);
      expect(Array.isArray(arrVal)).toBeTruthy();
    });
    test('makeArrayOrDefault on null', () => {
      const arr: any = null;
      const arrVal = makeArrayOrDefault(arr);
      expect(Array.isArray(arrVal)).toBeTruthy();
    });
    test('makeArrayOrDefault on null with defined value', () => {
      const arr: any = null;
      const defaultArr = ['test1', 'test2'];
      const arrVal = makeArrayOrDefault(arr, defaultArr);
      expect(Array.isArray(arrVal)).toBeTruthy();
      expect(arrVal.length).toBe(defaultArr.length);
    });
  });
});

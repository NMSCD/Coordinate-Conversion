import type { GlyphInput } from '@/types/glyphTypes';

export const handleGlyphCode = (input: GlyphInput): string => {
  let inputCoords = '';
  if (input.code != null) {
    inputCoords = input.code;
  } else if (input.hexArray != null) {
    inputCoords = input.hexArray.join('');
  } else if (input.numberArray != null) {
    inputCoords = input.numberArray.map((n) => n.toString(16)).join('');
  }

  return inputCoords;
};

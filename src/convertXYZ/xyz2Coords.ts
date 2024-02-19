import type { XYZ } from '../types';
import { xyz2Glyphs } from './xyz2Glyphs';
import { glyphs2Coords } from '../convertGlyphs/glyphs2Coords';

export function xyz2Coords(xyz: XYZ) {
  const glyphs = xyz2Glyphs(xyz);
  const coords = glyphs2Coords(glyphs);
  return coords;
}

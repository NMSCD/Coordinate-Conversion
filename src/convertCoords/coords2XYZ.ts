import { glyphs2XYZ } from '../convertGlyphs/glyphs2XYZ';
import { coords2Glyphs } from './coords2Glyphs';

export function coords2XYZ(coords: string) {
  if (coords.length !== maxCoordLength) return;
  const glyphs = coords2Glyphs(coords);
  const xyz = glyphs2XYZ(glyphs);
  return xyz;
}

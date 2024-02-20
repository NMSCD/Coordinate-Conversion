import type { VoxelCoordinates } from '@/types/voxelTypes';
import { xyz2Glyphs } from './xyz2Glyphs';
import { glyphs2Coords } from '@/functions/convertGlyphs/glyphs2Coords';

export function xyz2Coords(xyz: VoxelCoordinates) {
  const glyphs = xyz2Glyphs(xyz);
  const coords = glyphs2Coords(glyphs);
  return coords;
}

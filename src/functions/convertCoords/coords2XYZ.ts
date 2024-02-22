import { maxGalacticCoordLength } from '@/constants/restrictions';
import { glyphs2XYZ } from '@/functions/convertGlyphs/glyphs2XYZ';
import { coords2Glyphs } from './coords2Glyphs';
import type { VoxelOutput } from '@/types/voxelTypes';

export function coords2XYZ(coords: string): VoxelOutput {
  if (coords.length !== maxGalacticCoordLength) return {} as VoxelOutput;
  const glyphs = coords2Glyphs(coords);
  const xyz = glyphs2XYZ(glyphs);
  return xyz;
}

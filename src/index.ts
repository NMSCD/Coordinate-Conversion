import { GalacticCoordinate } from './converter/galactic/galacticCoordinate';
import { coords2Glyphs } from './functions/convertCoords/coords2Glyphs';
import { coords2XYZ } from './functions/convertCoords/coords2XYZ';
import { glyphs2Coords } from './functions/convertGlyphs/glyphs2Coords';
import { glyphs2XYZ } from './functions/convertGlyphs/glyphs2XYZ';
import { xyz2Coords } from './functions/convertXYZ/xyz2Coords';
import { xyz2Glyphs } from './functions/convertXYZ/xyz2Glyphs';
import { PortalCode } from './converter/portal/portalCode';
import { VoxelCoordinate } from './converter/voxel/voxelCoordinate';
import type { GalacticCodeGroupsInput, GalacticCodeInput, GalacticInput, GalacticOutput } from './types/galacticTypes';
import type { GlyphInput, GlyphOutput } from './types/glyphTypes';
import type { VoxelCoordinates, VoxelInput, VoxelOutput } from './types/voxelTypes';

export {
  // Converters
  GalacticCoordinate,
  PortalCode,
  VoxelCoordinate,
  // internal methods - we should probably remove this from public access
  coords2Glyphs,
  coords2XYZ,
  glyphs2Coords,
  glyphs2XYZ,
  xyz2Coords,
  xyz2Glyphs,
  // types
  type GalacticCodeGroupsInput,
  type GalacticCodeInput,
  type GalacticInput,
  type GalacticOutput,
  type GlyphInput,
  type GlyphOutput,
  type VoxelCoordinates,
  type VoxelInput,
  type VoxelOutput,
};

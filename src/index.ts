import { GalacticCoordinate } from './converter/galactic/galacticCoordinate';
import { PortalCode } from './converter/portal/portalCode';
import { VoxelCoordinate } from './converter/voxel/voxelCoordinate';
import type { GalacticCodeGroupsInput, GalacticCodeInput, GalacticInput, GalacticOutput } from './types/galacticTypes';
import type { GlyphInput, GlyphOutput } from './types/glyphTypes';
import type { VoxelCoordinates, VoxelInput, VoxelOutput } from './types/voxelTypes';

const getPackageVersion = () => PACKAGE_VERSION;

export {
  // Converters
  GalacticCoordinate,
  PortalCode,
  VoxelCoordinate,
  // misc
  getPackageVersion,
  // types
  type GalacticCodeGroupsInput,
  type GalacticCodeInput,
  type GalacticInput,
  type GalacticOutput,
  type GlyphInput,
  type GlyphOutput,
  type VoxelCoordinates,
  type VoxelInput,
  type VoxelOutput
};


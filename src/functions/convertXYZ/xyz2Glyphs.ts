import type { VoxelCoordinates } from '@/types/voxelTypes';

export function xyz2Glyphs({
  VoxelX,
  VoxelY,
  VoxelZ,
  SolarSystemIndex,
  PlanetIndex,
}: VoxelCoordinates): string {
  let x_glyphs, y_glyphs, z_glyphs;
  if (VoxelX < 0) {
    x_glyphs = VoxelX + 4096;
  } else {
    x_glyphs = VoxelX;
  }
  if (VoxelZ < 0) {
    z_glyphs = VoxelZ + 4096;
  } else {
    z_glyphs = VoxelZ;
  }
  if (VoxelY < 0) {
    y_glyphs = VoxelY + 256;
  } else {
    y_glyphs = VoxelY;
  }

  const hexAddress = [SolarSystemIndex, y_glyphs, z_glyphs, x_glyphs];
  const address = hexAddress.map((coord) => coord.toString(16).toUpperCase());
  const glyphY = address.splice(1, 1)[0].padStart(2, '0');
  const paddedAddress = address.map((coord) => coord.padStart(3, '0'));
  paddedAddress.splice(1, 0, glyphY);

  return `${PlanetIndex}${paddedAddress.join('')}`;
}

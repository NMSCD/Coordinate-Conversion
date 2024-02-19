import type { XYZ } from "../types";

function splitGlyphs(glyphs: string) {
  const x_glyphs = glyphs.substring(9, 12);
  const y_glyphs = glyphs.substring(4, 6);
  const z_glyphs = glyphs.substring(6, 9);
  const system_idx = glyphs.substring(1, 4);
  const planet_idx = glyphs.substring(0, 1);

  return [x_glyphs, y_glyphs, z_glyphs, system_idx, planet_idx];
}

export function glyphs2XYZ(glyphs: string): XYZ | undefined {
  if (glyphs.length !== maxGlyphLength) return;

  const coordinates = splitGlyphs(glyphs);
  const numberCoords = coordinates.map((coordinate) => parseInt(coordinate, 16));

  const x_glyphs = numberCoords[0];
  const y_glyphs = numberCoords[1];
  const z_glyphs = numberCoords[2]; // NoSonar this is stupid indexing
  const system_idx = numberCoords[3]; // NoSonar this is stupid indexing
  const planet_idx = numberCoords[4]; // NoSonar this is stupid indexing

  let VoxelX, VoxelY, VoxelZ;
  if (x_glyphs > 2047) {
    VoxelX = x_glyphs - 4096;
  } else {
    VoxelX = x_glyphs;
  }
  if (z_glyphs > 2047) {
    VoxelZ = z_glyphs - 4096;
  } else {
    VoxelZ = z_glyphs;
  }
  if (y_glyphs > 127) {
    VoxelY = y_glyphs - 256;
  } else {
    VoxelY = y_glyphs;
  }

  return {
    VoxelX,
    VoxelY,
    VoxelZ,
    SolarSystemIndex: system_idx,
    PlanetIndex: planet_idx,
  };
}

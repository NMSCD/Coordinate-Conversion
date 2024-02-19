export function glyphs2Coords(glyphs: string) {
  if (glyphs.length !== maxGlyphLength) return '';

  const X_Z_POS_SHIFT = 2049;
  const X_Z_NEG_SHIFT = 2047;
  const Y_POS_SHIFT = 129;
  const Y_NEG_SHIFT = 127;

  const x_glyphs = parseInt(glyphs.substring(9, 12), 16); // NoSonar X coordinate part
  const y_glyphs = parseInt(glyphs.substring(4, 6), 16); // NoSonar Y coordinate part
  const z_glyphs = parseInt(glyphs.substring(6, 9), 16); // NoSonar Z coordinate part
  const system_idx = glyphs.substring(1, 4); // NoSonar system index part

  let coords_x = 0;
  let coords_y = 0;
  let coords_z = 0;

  if (x_glyphs >= X_Z_POS_SHIFT) {
    coords_x = x_glyphs - X_Z_POS_SHIFT;
  } else {
    coords_x = x_glyphs + X_Z_NEG_SHIFT;
  }

  if (z_glyphs >= X_Z_POS_SHIFT) {
    coords_z = z_glyphs - X_Z_POS_SHIFT;
  } else {
    coords_z = z_glyphs + X_Z_NEG_SHIFT;
  }

  if (y_glyphs >= Y_POS_SHIFT) {
    coords_y = y_glyphs - Y_POS_SHIFT;
  } else {
    coords_y = y_glyphs + Y_NEG_SHIFT;
  }

  const coordData = [coords_x, coords_y, coords_z];
  const coordinates = coordData.map((coord) => coord.toString(16).toUpperCase().padStart(4, '0'));

  coordinates[3] = system_idx.padStart(4, '0'); // NoSonar the 4 is to bump it to a length of 4

  return coordinates.join(':');
}

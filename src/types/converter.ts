import type { ResultWithValue } from '@/contracts/result';
import type { GlyphOutput } from '@/types/glyphTypes';
import type { GalacticOutput } from '@/types/galacticTypes';
import type { VoxelOutput } from '@/types/voxelTypes';

export type Converter<TI, TO> = (inputProps: TI) => ResultWithValue<TO>;

export interface IConverterMethods {
  /** Converts to glyphs (e.g. { code: '03894AC8D91F', hexArray: ['0', '3', '8', '9', '4', 'A', 'C', '8', 'D', '9', '1', 'F']} ) */
  toGlyph: () => ResultWithValue<GlyphOutput>;

  /** Converts to galactic coordinates (e.g. { code: '0C55:00D5:0922:0234', hexArray: ['0C55', '00D5', '0922', '0234']}) */
  toGalacticCoordinates: () => ResultWithValue<GalacticOutput>;

  /** Converts to voxel coordinates (e.g. { VoxelX: 1, VoxelY: 2, VoxelZ: 3, SolarSystemIndex: 0, PlanetIndex: 1 }) */
  toVoxel: () => ResultWithValue<VoxelOutput>;
}

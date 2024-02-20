import type { ResultWithValue } from '@/contracts/result';
import type { GlyphOutput } from '@/types/glyphTypes';
import type { GalacticOutput } from '@/types/galacticTypes';
import type { VoxelOutput } from '@/types/voxelTypes';

export type Converter<TI, TO> = (inputProps: TI) => ResultWithValue<TO>;

export interface IConverterMethods {
  /** Converts to glyphs (e.g. 03894AC8D91F) */
  toGlyph: () => ResultWithValue<GlyphOutput>;

  /** Converts to galactic coordinates (e.g. 0C55:00D5:0922:0234) */
  toGalacticCoordinates: () => ResultWithValue<GalacticOutput>;

  /** Converts to voxel coordinates (e.g. 03894AC8D91F) */
  toVoxel: () => ResultWithValue<VoxelOutput>;
}

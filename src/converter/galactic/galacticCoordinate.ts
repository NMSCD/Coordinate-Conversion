import { baseConverter } from '@/converter/baseConverter';
import { coords2Glyphs } from '@/functions/convertCoords/coords2Glyphs';
import { coords2XYZ } from '@/functions/convertCoords/coords2XYZ';
import { handleGalacticCoordinate } from '@/helper/handleGalacticInput';
import type { IConverterMethods } from '@/types/converter';
import type { GalacticInput } from '@/types/galacticTypes';
import type { GlyphOutput } from '@/types/glyphTypes';
import type { VoxelOutput } from '@/types/voxelTypes';
import { GalacticInputValidator } from '@/validation/galacticInputValidation';

/**
 * A converter that takes a Galactic coordinate and returns functions to convert to other portal types.
 * @param input multiple ways to input Galactic coordinates, see {@link GalacticInput| GalacticInput}
 * @returns functions defined in {@link IConverterMethods| IConverterMethods}
 */
export const GalacticCoordinate = (input: GalacticInput): Omit<IConverterMethods, 'toGalacticCoordinates'> => ({
  toGlyph: baseConverter<GalacticInput, GlyphOutput>({
    input,
    inputValidator: GalacticInputValidator,
    converter: (input: GalacticInput) => {
      const inputCoords = handleGalacticCoordinate(input);
      const result = coords2Glyphs(inputCoords);

      return {
        code: result,
        hexArray: result.split(''),
      };
    },
  }),
  toVoxel: baseConverter<GalacticInput, VoxelOutput>({
    input,
    inputValidator: GalacticInputValidator,
    converter: (input: GalacticInput) => {
      const inputCoords = handleGalacticCoordinate(input);
      return coords2XYZ(inputCoords);
    },
  }),
});

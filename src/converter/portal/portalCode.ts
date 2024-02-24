import { baseConverter } from '@/converter/baseConverter';
import { glyphs2Coords } from '@/functions/convertGlyphs/glyphs2Coords';
import { glyphs2XYZ } from '@/functions/convertGlyphs/glyphs2XYZ';
import { handleGlyphCode } from '@/helper/handleGlyphInput';
import type { IConverterMethods } from '@/types/converter';
import type { GalacticInput, GalacticOutput } from '@/types/galacticTypes';
import type { GlyphInput } from '@/types/glyphTypes';
import type { VoxelOutput } from '@/types/voxelTypes';
import { GlyphInputValidator } from '@/validation/glyphInputValidation';

/**
 * A converter that takes a Portal code and returns functions to convert to other portal types.
 * @param input multiple ways to input Portal code
 * @returns functions defined in {@link IConverterMethods| IConverterMethods}
 */
export const PortalCode = (input: GlyphInput): Omit<IConverterMethods, 'toGlyph'> => ({
  toGalacticCoordinates: baseConverter<GlyphInput, GalacticOutput>({
    input,
    inputValidator: GlyphInputValidator,
    converter: (input: GalacticInput) => {
      const inputCoords = handleGlyphCode(input);
      const result = glyphs2Coords(inputCoords);
      return {
        code: result,
        groups: result.split(':'),
      };
    },
  }),
  toVoxel: baseConverter<GlyphInput, VoxelOutput>({
    input,
    inputValidator: GlyphInputValidator,
    converter: (input: GlyphInput) => {
      const inputCoords = handleGlyphCode(input);
      return glyphs2XYZ(inputCoords);
    },
  }),
});

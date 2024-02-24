import { baseConverter } from '@/converter/baseConverter';
import { xyz2Coords } from '@/functions/convertXYZ/xyz2Coords';
import { xyz2Glyphs } from '@/functions/convertXYZ/xyz2Glyphs';
import type { IConverterMethods } from '@/types/converter';
import type { GalacticOutput } from '@/types/galacticTypes';
import type { GlyphOutput } from '@/types/glyphTypes';
import type { VoxelInput } from '@/types/voxelTypes';
import { VoxelInputValidator } from '@/validation/voxelInputValidation';

/**
 * A converter that takes a Voxel coordinate and returns functions to convert to other portal types.
 * @param input multiple ways to input Voxel coordinates
 * @returns functions defined in {@link IConverterMethods| IConverterMethods}
 */
export const VoxelCoordinate = (input: VoxelInput): Omit<IConverterMethods, 'toVoxel'> => ({
  toGlyph: baseConverter<VoxelInput, GlyphOutput>({
    input,
    inputValidator: VoxelInputValidator,
    converter: (input: VoxelInput) => {
      const result = xyz2Glyphs(input);
      return {
        code: result,
        hexArray: result.split(''),
      };
    },
  }),
  toGalacticCoordinates: baseConverter<VoxelInput, GalacticOutput>({
    input,
    inputValidator: VoxelInputValidator,
    converter: (input: VoxelInput) => {
      const result = xyz2Coords(input);
      return {
        code: result,
        groups: result.split(':'),
      };
    },
  }),
});

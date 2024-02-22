import { maxGalacticCoordLength, minGalacticCoordLength } from '@/constants/restrictions';
import type { GalacticInput } from '@/types/galacticTypes';

export const handleGalacticCoordinate = (input: GalacticInput): string => {
  let inputCoords = '';
  if (input.code != null) {
    if (input.code.length === maxGalacticCoordLength) {
      inputCoords = input.code;
    } else if (input.code.length === minGalacticCoordLength) {
      inputCoords = input.code
        .split('') // convert 0C5500D509220234 to 0C55:00D5:0922:0234
        .flatMap((c, idx) => (idx !== minGalacticCoordLength - 1 && idx % 4 === 3 ? [c, ':'] : [c]))
        .join('');
    }
  } else if (input.groups != null) {
    inputCoords = input.groups.join(':');
  }

  return inputCoords;
};

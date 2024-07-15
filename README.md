<div align="center">

# Coordinate Conversion

Library with conversion functions for NMS coordinates

[![Supported by the No Man's Sky Community Developers & Designers](https://raw.githubusercontent.com/NMSCD/About/master/badge/green-ftb.svg)][nmscd] <br />

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vitest](https://img.shields.io/badge/Vitest-202127?style=for-the-badge&logo=vitest)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
<br/>![Github Actions](https://img.shields.io/badge/Github%20Actions-2088FF?style=for-the-badge&logo=github%20actions&logoColor=white)

</div>

## Installation

NPM:
```sh
npm i @nmscd/coordinate-conversion
```

From CDN with `<script>` tag:
```html
<script type="text/javascript" src="https://nmscd.com/Coordinate-Conversion/bundle.js"></script>
```

## Converters

- PortalCode
  - Inputs (only one is required)
    - code - `03894AC8D91F`
    - hexArray - `['0', '3', '8', '9', '4', 'A', 'C', '8', 'D', '9', '1', 'F']`
    - numberArray - `[0, 3, 8, 9, 4, 10, 12, 8, 13, 9, 1, 15]`
  - Methods
    - toGalacticCoordinates
    - toVoxel
- GalacticCoordinate
  - Inputs (only one is required)
    - code - `0C55:00D5:0922:0234` or `0C5500D509220234`
    - groups - `['0C55', '00D5', '0922', '0234']`
  - Methods
    - toGlyph
    - toVoxel
- VoxelCoordinate
  - [VoxelCoordinates](#voxel-coordinates)
  - Methods
    - toGlyph
    - toGalacticCoordinates

<br />

## Conversion result

The conversions will return an object to indicate whether the conversion was successful or not.

```ts
const galacticConversionResult = PortalCode({ code: '023456123456' }).toGalacticCoordinates();
console.log(galacticConversionResult); // { isSuccess: true, value: { 'code': '0C55:00D5:0922:0234', 'groups': ['0C55', '00D5', '0922', '0234'] }, errorMessage: ''

const voxelConversionResult = GalacticCoordinate({ code: '0C55:00D5:0922:0234' }).toGlyph();
console.log(voxelConversionResult); // { isSuccess: true, value: '023456123456', errorMessage: ''

// Example of error in conversion
const galacticConversionResult = PortalCode({ code: 'tester' }).toGalacticCoordinates();
console.log(galacticConversionResult); /*
{
  isSuccess: false,
  value: '',
  errorMessage: 'Character is an unexpected value (t), expected values 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, a, b, c, d, e, f, A, B, C, D, E, F'
}
*/
```

<br />

## Types

### Voxel Coordinates

```ts
import type { VoxelCoordinates } from '@nmscd/coordinate-conversion';

type VoxelCoordinates = {
  VoxelX: number;
  VoxelY: number;
  VoxelZ: number;
  SolarSystemIndex: number;
  PlanetIndex: number;
};
```

<br />

## Code coverage

### [View our current code coverage report](https://nmscd.com/Coordinate-Conversion/coverage)

<br />
<br />

<!-- Links used in the page -->

[nmscd]: https://github.com/NMSCD?ref=nmscdCommunitySearch

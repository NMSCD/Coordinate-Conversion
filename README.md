# Coordinate-Conversion

Library with conversion functions for NMS coordinates

## Functions

- coords2Glyphs (`string`)
- coords2XYZ (`string`)
- glyphs2Coords (`string`)
- glyphs2XYZ (`string`)
- xyz2Glyphs (`XYZ`)
- xyz2Coords (`XYZ`)

If the input strings for glyphs and coords do not match their expected length (12 and 19 respectively), `undefined` will be returned.

## XYZ Type

```ts
import type { XYZ } from '@nmscd/coordinate-conversion'

interface XYZ {
  VoxelX: number;
  VoxelY: number;
  VoxelZ: number;
  SolarSystemIndex: number;
  PlanetIndex: number;
}
```

[![Supported by the No Man's Sky Community Developers & Designers](https://raw.githubusercontent.com/NMSCD/About/master/badge/green-ftb.svg)](https://github.com/NMSCD)

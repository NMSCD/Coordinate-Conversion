export type GlyphCodeInput = string;
export type GlyphHexArrayInput = Array<string>;
export type GlyphNumberArrayInput = Array<number>;

export type GlyphInput = {
  /** 03894AC8D91F */
  code?: GlyphCodeInput;

  /** e.g. ['0', '3', '8', '9', '4', 'A', 'C', '8', 'D', '9', '1', 'F'] */
  hexArray?: GlyphHexArrayInput;

  /** e.g. [0, 3, 8, 9, 4, 10, 12, 8, 13, 9, 1, 15] */
  numberArray?: GlyphNumberArrayInput;
};

export type GlyphOutput = {
  /** 03894AC8D91F */
  code: string;

  /** ['0', '3', '8', '9', '4', 'A', 'C', '8', 'D', '9', '1', 'F'] */
  hexArray: Array<string>;
};

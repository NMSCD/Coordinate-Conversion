export type GalacticCodeInput = string;
export type GalacticCodeGroupsInput = Array<string>;

export type GalacticInput = {
  /** e.g. 0C55:00D5:0922:0234 */
  code?: GalacticCodeInput;

  /** e.g. ['0C55', '00D5', '0922', '0234'] */
  groups?: GalacticCodeGroupsInput;
};

export type GalacticOutput = {
  /** 0C55:00D5:0922:0234 */
  code: string;

  /** ['0C55', '00D5', '0922', '0234'] */
  groups: Array<string>;
};

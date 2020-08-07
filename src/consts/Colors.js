export default {
  playerWhite: `rgb(255, 255, 255)`,
  playerWhiteCustom: (customVal) => `rgba(255, 255, 255, ${customVal})`,
  softWhite: `rgba(255, 255, 255, 0.8)`,
  softestWhite: `rgba(255, 255, 255, 0.4)`,
  ehfmPrimary: `rgb(0, 145, 138)`,
  ehfmPrimaryCustom: (customVal) => `rgba(0, 145, 138, ${customVal})`,
  ehfmPrimary80: `rgb(0, 145, 138, 0.8)`,
  ehfmPrimary10: `rgb(0, 145, 138, 0.1)`,
  altBlueText: (customVal) => `rgba(3, 181, 170, ${customVal ? customVal : 1})`,
  altBlueHover: (customVal) =>
    `rgba(0, 204, 194, ${customVal ? customVal : 1})`,
  highlightYellow: (customVal) =>
    `rgb(248, 250, 144), ${customVal ? customVal : 1})`,
  bgWhite: `rgb(247, 240, 240)`,
  bgWhiteCustom: (customVal) => `rgba(247, 240, 240, ${customVal})`,
  notQuiteBlack: (customVal) => `rgba(0, 20, 39, ${customVal ? customVal : 1})`,
  spanBg: `rgba(47, 62, 70, 0.8)`,
  spanBgSolid: `rgba(47, 62, 70, 0.97)`,
  softGrey: `rgb(223, 223, 223)`,
  softerGrey: `rgb(239, 239, 239)`,
};

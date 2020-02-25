import TypographyUtils from "./TypographyUtils";

const genericStyles = {
  bold: `
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 700;
  display: block;
  margin: 0;
  `,
  medium: `
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 500;
  display: block;
  margin: 0;
  `,
  regular: `
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 400;
  display: block;
  margin: 0;
  `
};

const modularScaleDesktop = {
  heading1: {
    fontSize: TypographyUtils.convertPixelToEm(60),
    lineHeight: TypographyUtils.convertPixelToEm(65)
  },
  heading2: {
    fontSize: TypographyUtils.convertPixelToEm(48),
    lineHeight: TypographyUtils.convertPixelToEm(54)
  },
  heading3: {
    fontSize: TypographyUtils.convertPixelToEm(36),
    lineHeight: TypographyUtils.convertPixelToEm(42)
  },
  heading4: {
    fontSize: TypographyUtils.convertPixelToEm(22),
    lineHeight: TypographyUtils.convertPixelToEm(26)
  },
  cta: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(20)
  },
  body: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(20)
  },
  boldDetail: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(22)
  },
  regDetail: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(22)
  },
  tiny: {
    fontSize: TypographyUtils.convertPixelToEm(12),
    lineHeight: TypographyUtils.convertPixelToEm(14)
  }
};

const modularScaleMobile = {
  heading1: {
    fontSize: TypographyUtils.convertPixelToEm(48),
    lineHeight: TypographyUtils.convertPixelToEm(54)
  },
  heading2: {
    fontSize: TypographyUtils.convertPixelToEm(36),
    lineHeight: TypographyUtils.convertPixelToEm(42)
  },
  heading3: {
    fontSize: TypographyUtils.convertPixelToEm(24),
    lineHeight: TypographyUtils.convertPixelToEm(30)
  },
  heading4: {
    fontSize: TypographyUtils.convertPixelToEm(18),
    lineHeight: TypographyUtils.convertPixelToEm(24)
  },
  cta: {
    fontSize: TypographyUtils.convertPixelToEm(14),
    lineHeight: TypographyUtils.convertPixelToEm(18)
  },
  body: {
    fontSize: TypographyUtils.convertPixelToEm(12),
    lineHeight: TypographyUtils.convertPixelToEm(16)
  },
  boldDetail: {
    fontSize: TypographyUtils.convertPixelToEm(14),
    lineHeight: TypographyUtils.convertPixelToEm(20)
  },
  regDetail: {
    fontSize: TypographyUtils.convertPixelToEm(14),
    lineHeight: TypographyUtils.convertPixelToEm(20)
  },
  tiny: {
    fontSize: TypographyUtils.convertPixelToEm(10),
    lineHeight: TypographyUtils.convertPixelToEm(12)
  }
};

export default {
  genericStyles: genericStyles,
  heading1: `
  ${genericStyles.bold}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.heading1.fontSize,
    modularScaleMobile.heading1.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.heading1.lineHeight,
    modularScaleMobile.heading1.lineHeight
  )};
  `,

  heading2: `
  ${genericStyles.bold}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.heading2.fontSize,
    modularScaleMobile.heading2.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.heading2.lineHeight,
    modularScaleMobile.heading2.lineHeight
  )};
  `,

  heading3: `
  ${genericStyles.regular}
  
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.heading3.fontSize,
    modularScaleMobile.heading3.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.heading3.lineHeight,
    modularScaleMobile.heading3.lineHeight
  )};
 
  `,

  heading4: `
  ${genericStyles.medium}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.heading4.fontSize,
    modularScaleMobile.heading4.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.heading4.lineHeight,
    modularScaleMobile.heading4.lineHeight
  )};
  `,

  cta: `
  ${genericStyles.bold}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.cta.fontSize,
    modularScaleMobile.cta.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.cta.lineHeight,
    modularScaleMobile.cta.lineHeight
  )};
  `,

  body: `
  ${genericStyles.regular}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.body.fontSize,
    modularScaleMobile.body.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.body.lineHeight,
    modularScaleMobile.body.lineHeight
  )};
  `,

  boldDetail: `
  ${genericStyles.bold}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.boldDetail.fontSize,
    modularScaleMobile.boldDetail.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.boldDetail.lineHeight,
    modularScaleMobile.boldDetail.lineHeight
  )};
  `,

  regDetail: `
  ${genericStyles.regular}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.regDetail.fontSize,
    modularScaleMobile.regDetail.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.regDetail.lineHeight,
    modularScaleMobile.regDetail.lineHeight
  )};
  `,

  tiny: `
  ${genericStyles.regular}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.tiny.fontSize,
    modularScaleMobile.tiny.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.tiny.lineHeight,
    modularScaleMobile.tiny.lineHeight
  )};
  `
};

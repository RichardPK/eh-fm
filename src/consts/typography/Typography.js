import TypographyUtils from "./TypographyUtils";

const genericStyles = {
  bold: `
  font-family: 'Helvetica Neue LT Std', sans-serif;
  font-weight: bold;
  display: block;
  margin: 0;
  `,
  regular: `
  font-family: 'Helvetica Neue Lt Std', sans-serif;
  font-weight: 400;
  display: block;
  margin: 0;
  `,
};

const modularScaleDesktop = {
  // 1.125 - major second
  // base 16
  heading1: {
    fontSize: TypographyUtils.convertPixelToEm(73.978),
    lineHeight: TypographyUtils.convertPixelToEm(83.225),
  },
  heading2: {
    fontSize: TypographyUtils.convertPixelToEm(41.053),
    lineHeight: TypographyUtils.convertPixelToEm(46.184),
  },
  heading3: {
    fontSize: TypographyUtils.convertPixelToEm(25.629),
    lineHeight: TypographyUtils.convertPixelToEm(32.437),
  },
  heading4: {
    fontSize: TypographyUtils.convertPixelToEm(20.25),
    lineHeight: TypographyUtils.convertPixelToEm(25.629),
  },
  cta: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(20.25),
  },
  body: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(20.25),
  },
  boldDetail: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(22.781),
  },
  bodyExtraSpacing: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(25.629),
  },
  tiny: {
    fontSize: TypographyUtils.convertPixelToEm(14.22),
    lineHeight: TypographyUtils.convertPixelToEm(16),
  },
};

const modularScaleMobile = {
  // 1.067 - minor second
  // base 14
  heading1: {
    fontSize: TypographyUtils.convertPixelToEm(48),
    lineHeight: TypographyUtils.convertPixelToEm(58.309),
  },
  heading2: {
    fontSize: TypographyUtils.convertPixelToEm(34.708),
    lineHeight: TypographyUtils.convertPixelToEm(42.16),
  },
  heading3: {
    fontSize: TypographyUtils.convertPixelToEm(22.043),
    lineHeight: TypographyUtils.convertPixelToEm(26.778),
  },
  heading4: {
    fontSize: TypographyUtils.convertPixelToEm(18.146),
    lineHeight: TypographyUtils.convertPixelToEm(23.52),
  },
  cta: {
    fontSize: TypographyUtils.convertPixelToEm(14),
    lineHeight: TypographyUtils.convertPixelToEm(18.146),
  },
  body: {
    fontSize: TypographyUtils.convertPixelToEm(12.297),
    lineHeight: TypographyUtils.convertPixelToEm(15.939),
  },
  boldDetail: {
    fontSize: TypographyUtils.convertPixelToEm(14),
    lineHeight: TypographyUtils.convertPixelToEm(18.146),
  },
  bodyExtraSpacing: {
    fontSize: TypographyUtils.convertPixelToEm(14),
    lineHeight: TypographyUtils.convertPixelToEm(20.659),
  },
  tiny: {
    fontSize: TypographyUtils.convertPixelToEm(12.297),
    lineHeight: TypographyUtils.convertPixelToEm(13.121),
  },
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
  ${genericStyles.bold}
  
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
  ${genericStyles.bold}
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

  bodyExtraSpacing: `
  ${genericStyles.regular}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.bodyExtraSpacing.fontSize,
    modularScaleMobile.bodyExtraSpacing.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.bodyExtraSpacing.lineHeight,
    modularScaleMobile.bodyExtraSpacing.lineHeight
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
  `,
};

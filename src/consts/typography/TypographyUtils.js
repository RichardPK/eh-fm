import Sizes from "../Sizes"

const px2vw = (screenWidth, elWidth) => {
  return `${(elWidth / screenWidth) * 100}vw`
}

function stripUnit(val) {
  return val.replace(/[^-\d.]/g, "")
}

const convertRemToPixels = rem => {
  return rem * parseFloat(16)
}

const convertEmToFloat = em => {
  return parseFloat(stripUnit(em))
}

const convertPixelToEm = pixel => {
  const globalBaselineFontSize = convertRemToPixels(1)
  return `${pixel / globalBaselineFontSize}em`
}

const fontSizeCalc = (maxEmSize, minEmSize) => {
  const globalBaselineFontSize = convertRemToPixels(1)
  const maximumViewportSize = Sizes.laptopL
  const minimumViewportSize = Sizes.mobileS

  const desktopEmRatioAsFloat = convertEmToFloat(maxEmSize)
  const mobileEmRatioAsFloat = convertEmToFloat(minEmSize)

  const targetBaselineDesktopFontSize =
    globalBaselineFontSize * desktopEmRatioAsFloat
  const targetBaselineMobileFontSize =
    globalBaselineFontSize * mobileEmRatioAsFloat

  let fontMultiplier =
    (targetBaselineDesktopFontSize - targetBaselineMobileFontSize) /
    (stripUnit(maximumViewportSize) - stripUnit(minimumViewportSize))

  let finalFontSize =
    targetBaselineMobileFontSize -
    fontMultiplier * stripUnit(minimumViewportSize)

  return `
        font-size: ${targetBaselineMobileFontSize}px;

        @media (min-width: ${minimumViewportSize}) {
            font-size: calc(${fontMultiplier} * 100vw + ${finalFontSize}px);
        }
        
        @media (min-width: ${maximumViewportSize}) {
            font-size: ${targetBaselineDesktopFontSize}px; 
        }
    `
}

const lineHeightCalc = (desktopLineheightEmRatio, mobileLineheightEmRatio) => {
  const globalBaselineLineHeight = convertRemToPixels(1)
  const maximumViewportSize = Sizes.laptop
  const minimumViewportSize = Sizes.mobileM

  const desktopEmRatioAsFloat = convertEmToFloat(desktopLineheightEmRatio)
  const mobileEmRatioAsFloat = convertEmToFloat(mobileLineheightEmRatio)

  const targetBaselineDesktopLineHeight =
    globalBaselineLineHeight * desktopEmRatioAsFloat
  const targetBaselineMobileLineHeight =
    globalBaselineLineHeight * mobileEmRatioAsFloat

  let fontMultiplier =
    (targetBaselineDesktopLineHeight - targetBaselineMobileLineHeight) /
    (stripUnit(maximumViewportSize) - stripUnit(minimumViewportSize))

  let finalFontSize =
    targetBaselineMobileLineHeight -
    fontMultiplier * stripUnit(minimumViewportSize)

  return `
        line-height: ${targetBaselineMobileLineHeight}px;

        @media (min-width: ${minimumViewportSize}) {
            line-height: calc(${fontMultiplier} * 100vw + ${finalFontSize}px);
        }
        
        @media (min-width: ${maximumViewportSize}) {
            line-height: ${targetBaselineDesktopLineHeight}px; 
        }
    `
}

export default { fontSizeCalc, lineHeightCalc, px2vw, convertPixelToEm }

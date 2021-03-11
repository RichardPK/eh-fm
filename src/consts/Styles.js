import Devices from "./Devices";

export const PagePaddingStyles = `
padding: 0 1rem;

@media ${Devices.mobileL} {
  padding: 0 2rem;
}

@media ${Devices.tablet} {
  padding: 0 3rem;
}
`;

export const mobileMargin = "2rem";
export const desktopMargin = "2.5rem";
export const navBarMobileHeight = "8.66rem";
export const navBarDesktopHeight = "5.375rem";

export const FullHeightPageStyles = `
height: calc(100vh - ${mobileMargin} - ${navBarMobileHeight});

@media ${Devices.tablet} {
  height: calc(100vh - ${desktopMargin} - ${navBarDesktopHeight});
}
`;

export const WidgetMarginStyles = (props) => `
margin: ${mobileMargin} auto 
${props.cookiesBannerShowing ? "70px" : props.mixcloudWidgetHtml ? `123px` : 0};

    @media ${Devices.tablet} {    
      margin: ${desktopMargin} auto
      ${
        props.cookiesBannerShowing
          ? "95px"
          : props.mixcloudWidgetHtml
          ? `123px`
          : 0
      };
    }
`;

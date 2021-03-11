import Devices from "./Devices";

export const PagePaddingStyles = `
padding: 0 1rem;

@media ${Devices.mobileL} {
  padding: 0 2rem;
}

@media ${Devices.tablet} {
  padding: 0 3rem;
`;

export const WidgetMarginStyles = (props) => `
margin: 2rem auto 
${props.cookiesBannerShowing ? "70px" : props.mixcloudWidgetHtml ? `123px` : 0};

    @media ${Devices.tablet} {    
      margin: 2.5rem auto
      ${
        props.cookiesBannerShowing
          ? "95px"
          : props.mixcloudWidgetHtml
          ? `123px`
          : 0
      };
    }
`;

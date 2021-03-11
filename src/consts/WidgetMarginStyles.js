import Devices from "./Devices";

const WidgetMarginStyles = (props) => `
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

export default WidgetMarginStyles;

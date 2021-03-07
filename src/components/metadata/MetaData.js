import React from "react";
import { Helmet } from "react-helmet";
import placeholderImage from "../../assets/images/placeholder-showimg.jpg";

const MetaData = ({
  title,
  url,
  imageSrc,
  description,
  imageWidth,
  imageHeight,
}) => {
  const defaultTitle = "EHFM";
  const defaultDescription =
    "EHFM is an Edinburgh-based online radio station, providing a platform for the capital's local artists and broadcasting 24 hours a day.";

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url ? url : window.location.href} />
      <meta name="fragment" content="!" />
      <meta
        property="og:title"
        data-react-helmet="true"
        content={title ? title : defaultTitle}
      />
      <meta
        name="description"
        data-react-helmet="true"
        content={description ? description : defaultDescription}
      />
      <meta
        property="og:description"
        data-react-helmet="true"
        content={description}
      />
      <meta
        property="og:url"
        data-react-helmet="true"
        content={url ? url : window.location.href}
      />
      <meta
        property="og:image"
        data-react-helmet="true"
        content={imageSrc ? imageSrc : placeholderImage}
      />
      <meta
        name="twitter:image"
        data-react-helmet="true"
        content={imageSrc ? imageSrc : placeholderImage}
      />
      {imageWidth && <meta property="og:image:width" content={imageWidth} />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} />}
    </Helmet>
  );
};

export default MetaData;

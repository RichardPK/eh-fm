import React from "react";
import { Helmet } from "react-helmet";
import serialiseForScript from "../../../helpers/SerialiseForScript";
import Logo from "../../../assets/images/schema-logo.png";
import PlaceholderImage from "../../../assets/images/placeholder-showimg.jpg";

const LiveRadioSchema = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {serialiseForScript({
          "@context": "http://schema.org",
          "@type": "RadioBroadcastService",
          url: "https://www.ehfm.live/",
          name: "EH-FM",
          broadcaster: "EH-FM",
          inLanguage: "en",
          broadcastTimezone: "UTC±00:00",
          genre: "Mixed",
          logo: {
            "@type": "ImageObject",
            width: 512,
            height: 512,
            url: Logo,
          },
          image: {
            "@type": "ImageObject",
            width: 1024,
            height: 1024,
            url: PlaceholderImage,
          },
          slogan: "Community radio for Edinburgh",
          description:
            "EHFM is an Edinburgh-based online radio station, providing a platform for the capital's local artists and broadcasting 24 hours a day.",
        })}
      </script>
    </Helmet>
  );
};

// const linkedData = {
//     publisher,
//     image,
//     thumbnailUrl: defaultImage,
//     mainEntityOfPage,
//     headline,
//     datePublished,
//     dateModified,
//     ...(aboutTags && { about: getAboutTagsContent(aboutTags) }),
//     ...(showAuthor && {
//       author: {
//         '@type': ORG_TYPE,
//         name: AUTHOR_PUBLISHER_NAME,
//         logo: {
//           '@type': 'ImageObject',
//           width: 1024,
//           height: 576,
//           url: defaultImage,
//         },
//         ...(isTrustProjectParticipant && { noBylinesPolicy }),
//       },
//     }),
//   };

export default LiveRadioSchema;

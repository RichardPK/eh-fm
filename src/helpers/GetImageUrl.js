const GetImageUrl = ({ baseUrl, width, height, fit }) => {
  const widthToRender = `${width ? `&w=${width}` : ""}`;
  const heightToRender = `${height ? `&h=${height}` : ""}`;
  const fitToRender = `${fit ? `&fit=${fit}` : ""}`;

  const url = `${baseUrl}${
    baseUrl && baseUrl.includes("?") ? "" : "?"
  }${widthToRender}${heightToRender}${fitToRender}`;
  return url;
};

export default GetImageUrl;

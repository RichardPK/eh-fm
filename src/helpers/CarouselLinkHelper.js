export const isInternal = (url) => {
  return url.includes('ehfm.live');
};

export const splitUrl = (url) => {
  let pathArray = url.split('/');
  return pathArray.slice(-2).join('/');
};

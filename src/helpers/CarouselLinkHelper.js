import History from '../history';

export default (link, type) => {
  const url = link.url;
  if (type.toLowerCase() === 'link') {
    if (isInternal(url)) {
      History.push(splitUrl(url));
    } else {
      window.open(url, '_blank');
    }
  }
};

const isInternal = (url) => {
  return url.includes('ehfm.live');
};

const splitUrl = (url) => {
  let pathArray = url.split('/');
  return pathArray.slice(-2).join('/');
};

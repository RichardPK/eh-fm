const SHOW_NOT_FOUND = 'SHOW_NOT_FOUND';

const parsedForInvertedCommas = (string) => string.replace(/&#039;/g, "'");
const parsedForAmpersands = (string) => string.replace(/&amp;/g, '&');

export const sanitiseString = (string) => {
  let noAmpersands = parsedForAmpersands(string);
  let andNoCommas = parsedForInvertedCommas(noAmpersands);
  return andNoCommas;
};

export const getShowInPrismic = ({ residents, currentShow }) => {
  let toLowerCase;
  const currentShowName = parseShowName(currentShow);
  if (currentShowName) {
    toLowerCase = currentShowName.toLowerCase();
  }
  if (residents.length > 0 && toLowerCase) {
    const filtered = residents.filter((resident) =>
      toLowerCase.includes(resident.data.show_title.toLowerCase())
    );
    if (filtered.length > 0) {
      return filtered[0].data;
    } else {
      return SHOW_NOT_FOUND;
    }
  }
};

export const parseShowName = (currentShow) => {
  let currentShowName = null;
  if (currentShow !== null) {
    let showData = currentShow;
    currentShowName = showData.currentShow[0].name;
    let sanitisedString = sanitiseString(currentShowName);
    return sanitisedString;
  }
  return currentShowName;
};

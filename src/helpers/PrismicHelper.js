const SHOW_NOT_FOUND = "SHOW_NOT_FOUND";

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
    let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
    let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, "&");
    return parsedForAmpersands;
  }
  return currentShowName;
};

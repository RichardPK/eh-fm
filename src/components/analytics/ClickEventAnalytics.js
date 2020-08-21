import ReactGA from "react-ga";

const clientId = () =>
  ReactGA.ga((tracker) => {
    return tracker.get("clientId");
  });

const date = new Date();

export const clickedPlay = () => {
  ReactGA.event({
    category: "Player",
    action: "Playing",
    clientId: clientId(),
    timestamp: date,
  });
};

export const clickedStop = () =>
  ReactGA.event({
    category: "Player",
    action: "Stopped",
    clientId: clientId(),
    timestamp: date,
  });

export const clickedMute = () =>
  ReactGA.event({
    category: "Player",
    action: "Muted",
    clientId: clientId(),
    timestamp: date,
  });

export const clickedUnmute = () =>
  ReactGA.event({
    category: "Player",
    action: "Unmuted",
    clientId: clientId(),
    timestamp: date,
  });

export const clickedCarouselItem = (link, type, index, hierarchy) =>
  ReactGA.event({
    category: `Carousel - ${hierarchy}`,
    action: type,
    value: index,
    label: link,
    clientId: clientId(),
    timestamp: date,
  });

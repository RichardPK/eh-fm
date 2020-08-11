import ReactGA from 'react-ga';

export const clickedPlay = ReactGA.event({
  category: 'Player',
  action: 'Playing'
});

export const clickedStop = ReactGA.event({
  category: 'Player',
  action: 'Stopped'
});

export const clickedMute = ReactGA.event({
  category: 'Player',
  action: 'Muted'
});

export const clickedUnmute = ReactGA.event({
  category: 'Player',
  action: 'Unmuted'
});

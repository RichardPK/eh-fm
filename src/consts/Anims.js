export default {
  fadeInWithDelay: (delay) => `
      animation: fadeinwithdelay 0.3s ease-in ${delay ? delay : 0.01}s;
      animation-fill-mode: both;
      @keyframes fadeinwithdelay {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }`,
  fadeIn: `
        animation: fadein 0.3s ease-in;
        animation-fill-mode: both;
      
        @keyframes fadein {
          from {
            opacity: 0.6;
          }
          to {
            opacity: 1;
          }
        }`,
  fadeOut: `
        animation: fadein 1s 1s forwards;
      
        @keyframes fadein {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }`,
  enterTop: `
  animation: 0.3s linear 1 enterTop;

  @keyframes enterTop {
    0%   { top: -40px }
    100% { top: 30px }
  }
 
  `,
  enterBottom: `
  animation: 0.3s ease-out 1 enterTop;

  @keyframes enterTop {
    0%   { bottom: -40px }
    100% { bottom: 30px }
  }
 
  `,
};

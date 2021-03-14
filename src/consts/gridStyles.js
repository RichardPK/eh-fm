import Devices from "./Devices";

export const gridStyles = `
grid-column: 1 / 7;

@media ${Devices.tablet} {
  grid-column: 1 / 6;
}

@media ${Devices.laptop} {
  grid-column: 1 / 4;
}

@media ${Devices.laptopL} {
  grid-column: 1 / 3;
}
`;

export default gridStyles;

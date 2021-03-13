import Devices from "../../consts/Devices";

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

export const bodyTextGridStyles = `
grid-column: 1 / 7;

@media ${Devices.tablet} {
  grid-column: 1 / 6;
}

@media ${Devices.laptop} {
  grid-column: 1 / 5;
}

@media ${Devices.laptopL} {
  grid-column: 1 / 4;
}
`;

export const secondColumnsStyles = `
grid-column: 1 / 7;

@media ${Devices.tablet} {
  grid-column: 1 / 6;
}

@media ${Devices.laptop} {
  grid-column: 4 / 6;
}

@media ${Devices.laptopL} {
  grid-row: 2 / 3;
  grid-column: 3 / 5;
}
`;

export default gridStyles;

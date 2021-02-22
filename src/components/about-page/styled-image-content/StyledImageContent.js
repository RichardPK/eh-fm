import styled from "styled-components/macro";
import Devices from "../../../consts/Devices";
import Image from "../../image/Image";

export const StyledImage = styled(Image)`
  border-radius: 4px;
  max-height: 500px;
  max-width: 500px;

  /* @media ${Devices.laptopHeightS} {
    max-height: 500px;
    max-width: 500px;
  } */
`;

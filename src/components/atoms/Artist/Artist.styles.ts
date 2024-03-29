import styled, { css } from "styled-components";
import COLORS from "../../../config/styles/colors";

export const ArtistWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  font-size: 14px;
  font-size: 14px;
  img {
    border-radius: 50%;
  }
  > div {
    flex-basis: 80%;

    > h4 {
      color: ${COLORS.WHITE};
      font-weight: 600;
    }
    > p {
      color: ${COLORS.GRAY};
    }
  }
  > p {
    color: ${COLORS.GRAY};
    font-weight: 100;
  }
`;

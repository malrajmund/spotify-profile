import styled, { css } from "styled-components";
import COLORS from "../../../config/styles/colors";

export const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2%;
  font-size: 14px;
  font-size: 14px;
  cursor: pointer;
  > div {
    flex-basis: 90%;

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

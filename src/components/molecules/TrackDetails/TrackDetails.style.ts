import styled, { css } from "styled-components";
import COLORS from "../../../config/styles/colors";

export const TrackDetailsWrapper = styled.div`
  display: flex;
  width: 60%;
  margin-top: 100px;
  gap: 5%;
  > div {
    display: flex;
    flex-direction: column;
    > h2 {
      color: ${COLORS.WHITE};
      font-size: 30px;
      font-weight: bold;
    }
    > h3 {
      color: ${COLORS.GRAY};
      font-weight: bold;
      font-size: 25px;
      margin-top: 10px;
    }
    > p {
      margin-top: 10px;
      color: ${COLORS.GRAY};
      font-size: 18px;
    }
    > a {
      margin-top: auto;
      max-width: 100px;
    }
  }
`;

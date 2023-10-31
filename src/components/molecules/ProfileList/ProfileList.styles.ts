import styled, { css } from "styled-components";
import COLORS from "../../../config/styles/colors";

export const ProfileListWrapper = styled.div<ProfileListWrapper>`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > div:first-of-type {
    display: flex;
    justify-content: space-between;
    > h2 {
      color: ${COLORS.WHITE};
      font-weight: 900;
    }
    > div {
      display: flex;
      gap: 5px;
    }
  }
  ${(props) => props.inSubpage && `width: 90%`};
`;

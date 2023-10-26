import styled, { css } from "styled-components";
import COLORS from "../../../config/styles/colors";

export const ProfileListWrapper = styled.div<ProfileListWrapper>`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > h2 {
    color: ${COLORS.WHITE};
    font-weight: 900;
  }
  ${(props) => props.inSubpage && `width: 90%`};
`;

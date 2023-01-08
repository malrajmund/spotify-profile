import styled from "styled-components";
import COLORS from "../../../config/styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.div`
  padding-left: 200px;
  flex-basis: 100%;
  height: 150vh;
  background-color: ${COLORS.TERTIARY};
`;

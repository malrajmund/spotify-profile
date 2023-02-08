import styled from "styled-components";
import COLORS from "../../../config/styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${COLORS.TERTIARY};
  gap: 20px;
  > div:first-of-type {
    position: relative;
    width: 400px;
    height: 120px;
  }
`;

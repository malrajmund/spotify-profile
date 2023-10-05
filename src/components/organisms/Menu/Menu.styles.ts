import styled from "styled-components";
import COLORS from "../../../config/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.BLACK};
  position: fixed;
  height: 100%;
  width: 200px;
  padding: 50px 20px;
  > div {
    position: relative;
    width: 100%;
    height: 45px;
  }
  > button {
    margin-top: auto;
  }
`;

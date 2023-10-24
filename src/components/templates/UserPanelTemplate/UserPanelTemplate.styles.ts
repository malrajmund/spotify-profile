import styled from "styled-components";
import COLORS from "../../../config/styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 200px;
  flex-basis: 100%;
  min-height: 100vh;
  background-color: ${COLORS.TERTIARY};
  padding-bottom: 100px;
  > img {
    margin-top: 5%;
    border-radius: 50%;
    height: auto;
  }
  > h2 {
    margin-top: 10px;
    color: ${COLORS.WHITE};
    font-size: 30px;
    font-weight: bold;
  }
  > section {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      > p:first-of-type {
        color: ${COLORS.SECONDARY};
        font-weight: bold;
        font-size: 14px;
      }
      > p:last-of-type {
        font-size: 12px;
        text-transform: uppercase;
        color: ${COLORS.GRAY};
      }
    }
  }
`;

export const ProfileListsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  > div {
    flex-basis: 50%;
  }
`;

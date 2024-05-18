import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 50px;
      font-weight: 700;
      background-color: orange;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 40px;
      font-weight: 600;
      background-color: yellow;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 30px;
      font-weight: 500;
      background-color: yellow;
    `}
`;
export default Heading;

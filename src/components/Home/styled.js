import styled from "styled-components";

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 1.5em;
  line-height: 1.5em;
  font-size: 48px;
  font-size: 10vw;
  font-family: "Kaushan Script";
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const PortfolioContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 2rem;
  margin: 2rem;
`;

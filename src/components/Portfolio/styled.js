import styled from "styled-components";
import SimpleWrapper from "~/components/Common/SimpleWrapper";
import { PRIMARY_COLOR } from "~/components/Common/constants";

export const Wrapper = styled(SimpleWrapper)`
  padding: 100px 0 0;
  margin: 3px;

  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  &:before,
  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

export const PortfolioDescription = styled.section`
  float: left;
  padding: 0 0 0 36px;
  width: 20%;

  @media (max-width: 414px) {
    float: none;
    margin: 0 0 16px;
    padding: 0 0 16px;
    width: 100%;
  }

  h1 {
    margin: 0.67em 0;
    font-size: 28px;
  }

  h2 {
    margin: 0.67em 0;
    font-size: 20px;
  }

  ul {
    margin: 10px 0;
    padding: 0 0 0 40px;
    list-style: disc;
  }

  a {
    text-decoration: underline;
  }
`;

export const PortfolioContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 2rem;
  margin: 2rem;
`;

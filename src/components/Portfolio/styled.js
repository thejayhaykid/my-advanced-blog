import styled from "styled-components";
import SimpleWrapper from "~/components/Common/SimpleWrapper";
import { PRIMARY_COLOR } from "~/components/Common/constants";

export const Wrapper = styled(SimpleWrapper)`
  padding: 100px 0 0;

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
  font-family: lato, Arial, Helvetica, sans-serif;

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

export const PortfolioImages = styled.section`
  float: left;
  padding: 0 36px 0 0;
  width: 80%;
  overflow-y: visible;
  margin-bottom: 20px;

  @media (max-width: 414px) {
    float: none;
    padding: 0;
    width: 100%;
    height: auto;
    overflow-y: visible;
  }

  img {
    padding: 16px;
    max-height: calc(100vh - 100px);
    max-width: 100%;
    align-content: center;
    /*height: auto;*/

    @media (max-width: 414px) {
      float: left;
      margin: 0 0 8px;
      padding: 0;
      &:last-child {
        margin: 0 0 16px;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${PRIMARY_COLOR};
    border-radius: 6px;
  }
`;

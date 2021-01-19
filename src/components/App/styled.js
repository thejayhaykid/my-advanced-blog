import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  min-height: 100vh;
  padding-bottom: 4rem;
  font-family: sans-serif;

  @media print {
    & > nav,
    & > footer {
      display: none;
    }

    & > main {
      & > section {
        padding: 0;
      }
    }

    button {
      display: none;
    }
  }
`;

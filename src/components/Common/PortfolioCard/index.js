import styled from "styled-components";

const PortfolioCard = styled.section`
  height: 215px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    transform: scale(1.035, 1.035);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);

    &:img {
      transform: translateY(-10px);
    }
  }

  h4,
  h6 {
    z-index: auto;
    color: white;
    overflow: hidden;
    font-size: 20px;
    margin: 20px 0 0 20px;
  }

  img {
    position: absolute;
    top: -5%;
    left: -5%;
    height: 110%;
    width: 110%;
    /*z-index: -1;*/
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  /* Flex details */
  flex: 0 1 300px;
  padding: 5px;
`;

export default PortfolioCard;

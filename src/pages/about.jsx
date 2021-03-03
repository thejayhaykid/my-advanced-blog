import React, { Component, useState } from "react";
import Helmet from "react-helmet";
import { PREFIX } from "~/constants";
import Theme from "../components/Common/Theme";
import { ThemeProvider } from "styled-components";
import Gnb from "~/components/Gnb";
import { BLACK_COLOR, WHITE_COLOR } from "~/components/Common/constants";
import styles from "../sass/about.module.scss";
import styled from "styled-components";

const Wrapper = styled.div`
  top: 0;
  color: #dcdce5;
  background-color: #1f1f24;
  min-height: 100vh;
  padding-bottom: 4rem;

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
  min-height: 100vh;
  text-align: center;
  @media (max-width: 414px) {
    padding: 70px 0 0;
  }

  h1 {
    margin: 0 0 0.67em;
    font-size: 24px;
  }

  a {
    text-decoration: underline;
  }
`;

const About = (props) => {
    const [isDracula, setDracula] = useState(Theme.darkMode);
    const { location, categories, postInformations } = props;
    const theme = {
        color: WHITE_COLOR,
        backgroundColor: BLACK_COLOR,
    };
    const toggleTheme = () => {
        setDracula(true);
    };

    return (<ThemeProvider theme={theme}>
        <Wrapper>
            <Helmet>
                <title>{`${PREFIX}About`}</title>
                <meta name="og:title" content={`${PREFIX}About`} />
            </Helmet>
            <nav className={styles.nav}>
                <Gnb
                    location={location}
                    categories={categories}
                    postInformations={postInformations}
                    hasPortfolio={true}
                    toggleTheme={toggleTheme}
                    isDracula={isDracula}
                    className={styles.gnb}
                />
            </nav>
            <div className={styles.emptyDiv}></div>
            <div className={styles.AboutPage}><h1>Welcome to my about page!</h1></div>
        </Wrapper>
    </ThemeProvider>);
}

export default About;
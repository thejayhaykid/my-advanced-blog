import React, { Component, useState } from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";
import { PREFIX } from "~/constants";
// import SimpleWrapper from "~/components/Common/SimpleWrapper";
import { ThemeProvider } from "styled-components";
import Gnb from "~/components/Gnb";
import { BLACK_COLOR, WHITE_COLOR } from "~/components/Common/constants";
import styles from "../sass/contact.module.scss";

const Wrapper = styled.div`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
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

const ContactPage = (props) => {
  const [isDracula, setDracula] = useState(
    global.localStorage && global.localStorage.getItem("theme")
      ? global.localStorage.getItem("theme") === "dracula"
      : window.matchMedia("(prefers-color-scheme: dark)")
  );
  const { location, categories, postInformations, hasPortfolio } = props;
  const theme = isDracula
    ? {
        color: WHITE_COLOR,
        backgroundColor: BLACK_COLOR,
      }
    : {
        color: BLACK_COLOR,
        backgroundColor: WHITE_COLOR,
      };

  const toggleTheme = () => {
    if (isDracula) {
      if (global.localStorage) {
        global.localStorage.setItem("theme", "normal");
      }
    } else {
      if (global.localStorage) {
        global.localStorage.setItem("theme", "dracula");
      }
    }
    setDracula(!isDracula);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Helmet>
          <title>{`${PREFIX}Contact`}</title>
          <meta name="og:title" content={`${PREFIX}Contact`} />
        </Helmet>
        <nav>
          <Gnb
            location={location}
            categories={categories}
            postInformations={postInformations}
            hasPortfolio={true}
            toggleTheme={toggleTheme}
            isDracula={isDracula}
          />
        </nav>
        <h1 className={styles.title}>Contact Page</h1>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          netlify
          className={styles.form}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label className={styles.nameLabel}>
            <div className={styles.nameText}>Name</div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.nameInput}
            />
          </label>
          <label className={styles.emailLabel}>
            <div className={styles.emailText}>Email</div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.emailInput}
            />
          </label>
          <label className={styles.subjectLabel}>
            <div className={styles.subjectText}>Subject</div>
            <input
              type="text"
              name="subject"
              id="subject"
              className={styles.subjectInput}
            />
          </label>
          <label className={styles.messageLabel}>
            <div className={styles.messageText}>Message</div>
            <textarea
              name="message"
              id="message"
              rows="5"
              className={styles.messageInput}
            />
          </label>
          <div className={styles.buttons}>
            <button className={styles.submitButton} type="submit">
              Send
            </button>
            <input type="reset" value="Clear" className={styles.clearButton} />
          </div>
        </form>
      </Wrapper>
    </ThemeProvider>
  );
};

export default ContactPage;

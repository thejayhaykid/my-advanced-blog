import React, { Component, useState, useEffect } from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";
import { PREFIX } from "~/constants";
import Theme from "../components/Common/Theme";
// import SimpleWrapper from "~/components/Common/SimpleWrapper";
import { ThemeProvider } from "styled-components";
import Gnb from "~/components/Gnb";
import { BLACK_COLOR, WHITE_COLOR } from "~/components/Common/constants";
import styles from "../sass/contact.module.scss";
import queryString from "query-string";
import toast, { Toaster } from "react-hot-toast";

const Wrapper = styled.div`
  top: 0;
  font-family: lato, Arial, Helvetica, sans-serif;
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
  const [isDracula, setDracula] = useState(Theme.darkMode);
  const { location, categories, postInformations, hasPortfolio } = props;
  const theme = {
    color: WHITE_COLOR,
    backgroundColor: BLACK_COLOR,
  };

  const toggleTheme = () => {
    setDracula(true);
  };

  const [conName, setName] = useState("");
  const [conEmail, setEmail] = useState("");
  const [conSubject, setSubject] = useState("");
  const [conMessage, setMessage] = useState("");

  const inputName = (e) => { setName(e.target.value) };
  const inputEmail = (e) => { setEmail(e.target.value) };
  const inputSubject = (e) => { setSubject(e.target.value) };
  const inputMessage = (e) => { setMessage(e.target.value) };

  const queryParameters = queryString.parse(props.location.search);

  useEffect(() => {
    let urlAdditions = ""
    if (queryParameters.subject && queryParameters.subject.length > 0) {
      urlAdditions = queryParameters.subject.toString()
    }

    if (queryParameters.app && queryParameters.app.length > 0) {
      if (urlAdditions.length > 0) {
        urlAdditions = `${urlAdditions} ${queryParameters.app.toString()}`
      } else {
        urlAdditions = queryParameters.app.toString()
      }
    }

    setSubject(`${urlAdditions}${conSubject}`);
  }, [])

  const submitForm = (e) => {
    toast.promise(
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", "name": conName, "email": conEmail, "subject": conSubject, "message": conMessage }).toString()
      }),
      {
        loading: 'Sending message...',
        success: <b>Message sent!</b>,
        error: <b>Error sending, please try again</b>
      }
    ).then(clearClick())

    e.preventDefault();
  }

  const clearClick = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Helmet>
          <title>{`${PREFIX}Contact`}</title>
          <meta name="og:title" content={`${PREFIX}Contact`} />
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
        <Toaster position="top-center" />
        <div className={styles.emptyDiv}></div>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          netlify
          className={styles.form}
          onSubmit={submitForm}
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
              onChange={inputName}
              value={conName}
            />
          </label>
          <label className={styles.emailLabel}>
            <div className={styles.emailText}>Email</div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.emailInput}
              onChange={inputEmail}
              value={conEmail}
            />
          </label>
          <label className={styles.subjectLabel}>
            <div className={styles.subjectText}>Subject</div>
            <input
              type="text"
              name="subject"
              id="subject"
              className={styles.subjectInput}
              onChange={inputSubject}
              value={conSubject}
            />
          </label>
          <label className={styles.messageLabel}>
            <div className={styles.messageText}>Message</div>
            <textarea
              name="message"
              id="message"
              rows="5"
              className={styles.messageInput}
              onChange={inputMessage}
              value={conMessage}
            />
          </label>
          <div className={styles.buttons}>
            <button className={styles.submitButton} type="submit">
              Send
            </button>
            <button className={styles.clearButton} type="reset" onClick={clearClick}>Clear</button>
          </div>
        </form>
      </Wrapper>
    </ThemeProvider>
  );
};

export default ContactPage;

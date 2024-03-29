import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FaPrint, FaGithub, FaTwitter, FaLinkedin, FaDev, FaDribbble } from 'react-icons/fa';
import Clearfix from '~/components/Common/Clearfix';
import { PREFIX, AUTHOR, EMAIL, GITHUB_ID, TWITTER_ID, LINKEDIN_ID, DEVTO_ID, DRIBBBLE_ID } from '~/constants';
import * as profileUrl from '~/resources/me.png';
import { Wrapper, BasicInformation, SocialInformation, MDInformation, Button } from './styled';

const Resume = ({
  data: {
    resume: {
      html,
    },
  },
}) => {
  const $mdWrapper = useRef(null);

  useEffect(() => {
    const anchors = [...new Set($mdWrapper.current.getElementsByTagName('a'))];

    anchors.forEach((anchor) => {
      const href = anchor.getAttribute('href');

      if (href.startsWith('http')) {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noreferrer noopener');
      }
    });
  }, []);

  const printPage = useCallback(() => {
    global.print();
  }, []);

  return (
    <Wrapper>
      <Clearfix>
        <Helmet>
          <title>
            {`${PREFIX}Resume`}
          </title>
          <meta name="og:title" content={`${PREFIX}Resume`} />
        </Helmet>
        <Clearfix>
          <Button type="button" onClick={printPage}>
            <FaPrint />
            Print
          </Button>
        </Clearfix>
        <BasicInformation>
          <img
            src={profileUrl.default}
            alt=""
            width="120"
            height="120"
          />
          <h1>
            {AUTHOR}
          </h1>
          <p>
            {EMAIL}
          </p>
        </BasicInformation>
        <SocialInformation>
          {GITHUB_ID ? (
            <a
              href={`https://github.com/${GITHUB_ID}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
          ) : null}
          {TWITTER_ID ? (
            <a
              href={`https://twitter.com/${TWITTER_ID}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter />
            </a>
          ) : null}
          {LINKEDIN_ID ? (
            <a
              href={`https://www.linkedin.com/in/${LINKEDIN_ID}/`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
          ) : null}
          {DEVTO_ID ? (
            <a
              href={`https://dev.to/${DEVTO_ID}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaDev />
            </a>
          ) : null}
          {DRIBBBLE_ID ? (
            <a
              href={`https://dribbble.com/${DRIBBBLE_ID}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaDribbble />
            </a>
          ) : null}
        </SocialInformation>
        <MDInformation>
          <div
            ref={$mdWrapper}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </MDInformation>
      </Clearfix>
    </Wrapper>
  );
};

Resume.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Resume;

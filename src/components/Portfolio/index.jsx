import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import ModalImage from "react-modal-image";
import { PREFIX } from "~/constants";
import { Wrapper, PortfolioDescription, PortfolioImages } from "./styled";

const Portfolio = ({
  data: {
    portfolio: {
      frontmatter: { title, images },
      html,
    },
  },
}) => {
  const imageStyle = {
    maxHeight: "calc(100vh - 100px)",
    maxWidth: "100%",
    alignContent: "center",
  };
  return (
    <Wrapper>
      <Helmet>
        <title>{`${PREFIX}${title.toUpperCase()}`}</title>
        <meta name="og:title" content={`${PREFIX}${title.toUpperCase()}`} />
      </Helmet>
      <PortfolioDescription>
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </PortfolioDescription>
      <PortfolioImages>
        {images.map((image) => {
          if (image.includes("//")) {
            return (
              <ModalImage
                key={image}
                alt={title}
                small={image}
                medium={image}
                large={image}
                hideDownload={true}
                hideZoom={true}
                style={imageStyle}
              />
            );
          }

          const url = require(`~/resources/${image}`);

          return (
            <ModalImage
              key={image}
              alt={title}
              small={url}
              medium={url}
              large={url}
              hideDownload={true}
              hideZoom={true}
              style={imageStyle}
            />
          );
        })}
      </PortfolioImages>
    </Wrapper>
  );
};

Portfolio.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Portfolio;

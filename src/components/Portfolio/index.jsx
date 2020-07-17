import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { PREFIX } from "~/constants";
import { Wrapper, PortfolioDescription, PortfolioImages } from "./styled";
import styles from "../../sass/portfolio.module.scss";

/*
 * TODO: Create modal as onClick for images
 */

const Portfolio = ({
  data: {
    portfolio: {
      frontmatter: { title, images },
      html,
    },
  },
}) => {
  let imageClick = (event, imageURL) => {
    // TODO: Implement function
    console.log(imageURL);
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
        <div className={styles.imagesGrid}>
          {images.map((image) => {
            if (image.includes("//")) {
              return (
                <div className={styles.image}>
                  <img
                    className={styles.modal}
                    src={image}
                    alt={title}
                    onClick={(e) => imageClick(e, image)}
                  />
                </div>
              );
            }

            const url = require(`~/resources/${image}`);

            return (
              <div className={styles.image}>
                <img
                  className={styles.modal}
                  src={url}
                  alt={title}
                  onClick={(e) => imageClick(e, url)}
                />
              </div>
            );
          })}
        </div>
      </PortfolioImages>
    </Wrapper>
  );
};

Portfolio.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Portfolio;

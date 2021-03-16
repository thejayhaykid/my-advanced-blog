import React, { useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { PREFIX } from "~/constants";
import ImageModal from "../Common/ImageModal";
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
  const [showModal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  let imageClick = (event, imageURL) => {
    setModalImage(imageURL);
    setModal(true);
  };

  return (
    <Wrapper>
      <Helmet>
        <title>{`${PREFIX}${title.toUpperCase()}`}</title>
        <meta name="og:title" content={`${PREFIX}${title}`} />
      </Helmet>
      <ImageModal
        showModal={showModal}
        setShowModal={setModal}
        imageURL={modalImage}
        setImageURL={setModalImage}
      />
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

import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { PREFIX } from "~/constants";
import { Wrapper } from "./styled";
import styles from "../../sass/portfolios.module.scss";

const Portfolios = ({
  data: {
    portfolios: { edges: portfolios },
  },
}) => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}PORTFOLIOS`}</title>
      <meta name="og:title" content={`${PREFIX}PORTFOLIOS`} />
    </Helmet>
    <div className={styles.PortfolioContainer}>
      {portfolios.map(
        ({
          node: {
            frontmatter: { path, title, images = [] },
          },
        }) => {
          const [image = null] = images;

          if (image !== null) {
            return (
              <div className={styles.PortfolioCard} key={path}>
                <Link to={path}>
                  {image.includes("//") ? (
                    <img src={image} alt="portfolio" title={title} />
                  ) : (
                    <img
                      src={require(`~/resources/${image}`)}
                      alt="portfolio"
                      className={styles.PortfolioImage}
                      // title={title}
                    />
                  )}
                  <div className={styles.CardTitle}>
                    <span>{title}</span>
                  </div>
                </Link>
              </div>
            );
          }

          return (
            <div className={styles.PortfolioCard} key={path}>
              <Link to={path}>
                <div className={styles.CardTitle}>
                  <h4>{title}</h4>
                </div>
              </Link>
            </div>
          );
        }
      )}
    </div>
  </Wrapper>
);

Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolios;

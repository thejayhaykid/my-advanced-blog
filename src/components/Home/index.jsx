import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Wrapper from "~/components/Common/Wrapper";
import { TITLE } from "~/constants";
import { Title } from "./styled";
import styles from "../../sass/home.module.scss";

const Home = ({ portfolios }) => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="og:title" content={TITLE} />
    </Helmet>
    <Wrapper isHome>
      <Title>Hello everybody!</Title>
    </Wrapper>
    {portfolios.length >= 4 ? (
      <div className={styles.PortfolioContainer}>
        {portfolios.slice(0, 4).map(
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
    ) : null}
  </>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;

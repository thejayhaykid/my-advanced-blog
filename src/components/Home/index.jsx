import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Wrapper from "~/components/Common/Wrapper";
import { TITLE } from "~/constants";
import styles from "../../sass/home.module.scss";
import mainImage from "../../resources/homepage_main.png";

const Home = ({ portfolios }) => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="og:title" content={TITLE} />
    </Helmet>
    <div className={styles.EntirePage}>
      <div className={styles.Main}>
        <div className={styles.image}>
          <img src={mainImage} className={styles.actualImage} />
        </div>
        <div className={styles.primaryText}>
          <h1>Hi, I'm Jake!</h1>
          <h1>I'm a Developer, Designer, and Digital Creative</h1>
          <a href="/pages/1">
            <span className={styles.blogButton}>Blog</span>
          </a>
        </div>
      </div>
      <div className={styles.PortfolioHeader}>
        <h1>Portfolios</h1>
      </div>
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
    </div>
  </>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;

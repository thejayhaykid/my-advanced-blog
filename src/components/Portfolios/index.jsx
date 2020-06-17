import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import PortfolioCard from "~/components/Common/PortfolioCard";
import { PREFIX } from "~/constants";
import getPosts from "~/utils/getPosts";
import { Wrapper, PortfolioContainer } from "./styled";

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
    <PortfolioContainer>
      {portfolios.map(
        ({
          node: {
            frontmatter: { path, title, images = [] },
          },
        }) => {
          const [image = null] = images;

          if (image !== null) {
            return (
              <PortfolioCard key={path}>
                <Link to={path}>
                  <h6>{title}</h6>
                  {image.includes("//") ? (
                    <img src={image} alt="portfolio" title={title} />
                  ) : (
                    <img
                      src={require(`~/resources/${image}`)}
                      alt="portfolio"
                      title={title}
                    />
                  )}
                </Link>
              </PortfolioCard>
            );
          }

          return (
            <PortfolioCard key={path}>
              <Link to={path}>
                <h4>{title}</h4>
              </Link>
            </PortfolioCard>
          );
        }
      )}
    </PortfolioContainer>
  </Wrapper>
);

Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolios;

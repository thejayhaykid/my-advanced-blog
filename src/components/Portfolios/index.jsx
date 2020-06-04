import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import PortfolioCard from '~/components/Common/PortfolioCard';
import { PREFIX } from '~/constants';
import { Wrapper, H6 } from './styled';

const Portfolios = ({ data: { portfolios: { edges: portfolios } } }) => (
  <Wrapper>
    <Helmet>
      <title>
        {`${PREFIX}PORTFOLIOS`}
      </title>
      <meta name="og:title" content={`${PREFIX}PORTFOLIOS`} />
    </Helmet>
    {portfolios.map(({ node: { frontmatter: { path, title, images = [] } } }) => {
      const [image = null] = images;

      if (image !== null) {
        return (
          <PortfolioCard key={path}>
            <Link to={path}>
              {image.includes('//') ? (
                <img src={image} alt="portfolio" />
              ) : (
                <img src={require(`~/resources/${image}`)} alt="portfolio" />
              )}
              <H6>
                {title}
              </H6>
            </Link>
          </PortfolioCard>
        );
      }

      return (
        <PortfolioCard key={path}>
          <Link to={path}>
            <H6>
              {title}
            </H6>
          </Link>
        </PortfolioCard>
      );
    })}
  </Wrapper>
);

Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolios;

import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ image, link }) => {
  return (
    <div className="banner">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="Banner" />
      </a>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Banner;

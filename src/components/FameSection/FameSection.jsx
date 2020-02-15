import React, { Fragment } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { StyledContainer, StyledLink, StyledDot } from './FameSection.style';

const icons = [
  {
    id: 1,
    image: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/bartosz-j%C3%B3zwowiak-46173a114/',
  },
  {
    id: 2,
    image: <FaGithub />,
    link: 'https://github.com/Josowsky',
  },
];

const FameSection = () => (
  <StyledContainer>
    {icons.map((icon, index) => (
      <Fragment key={icon.id}>
        {index > 0 && <StyledDot />}
        <StyledLink href={icon.link}>{icon.image}</StyledLink>
      </Fragment>
    ))}
  </StyledContainer>
);

export default FameSection;

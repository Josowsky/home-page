import React from 'react';
import SEO from 'components/SEO/SEO';

import { routes } from 'shared/constants';

import {
  StyledContainer,
  StyledHeader,
  StyledParagraph,
  StyledButtons,
  StyledButton,
} from './about.style';

const MainPage = () => (
  <StyledContainer>
    <StyledHeader>About me</StyledHeader>
    <StyledParagraph>
      Currently you can find me in Poznan, Poland where I work as a Frontend
      Developer at NetGuru. Since beginning of my journey I helped to build
      multiple web applications for innovators and entrepreneurs from all over
      the world. I’ve had the pleasure to work with many talented people and
      great companies along the way.
    </StyledParagraph>
    <StyledParagraph>
      I enjoy web programming, learning new stuff and getting to know all the
      news from the JavaScript world. I believe that the best way to grow is by
      patience and consistency.
    </StyledParagraph>
    <StyledParagraph>
      In spare time I like to broaden my horizons by reading nonfiction books
      and traveling.
    </StyledParagraph>
    <StyledButtons>
      <StyledButton label="Portfolio" to={routes.portfolio} />
    </StyledButtons>
    <SEO
      title="About"
      description="I am a Web Developer experienced with React, TypeScript and Angular"
    />
  </StyledContainer>
);

export default MainPage;

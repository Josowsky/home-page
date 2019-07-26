import React from 'react';
import styled from 'styled-components';

import { routes } from 'shared/constants/constants';
import { grid, mobileBreakpoint } from 'shared/constants/constants.style';

import Button from 'components/Button/Button';
import SEO from 'components/SEO/SEO';
import { HeadingLarge, Paragraph } from 'components/Typography/Typography';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 730px;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: stretch;
  margin: ${grid * 2}px auto 0 auto;
  width: 60%;

  @media (min-width: ${mobileBreakpoint}px) {
    width: 200px;
  }
`;

const StyledButton = styled(Button)`
  flex: 1 1 0%;
  margin: ${grid}px;
`;

const AboutPage = () => (
  <StyledContainer>
    <HeadingLarge>About me</HeadingLarge>
    <Paragraph large>
      Currently you can find me in Poznan, Poland where I work as a Frontend
      Developer at NetGuru. Since beginning of my journey I helped to build
      multiple web applications for innovators and entrepreneurs from all over
      the world. I’ve had the pleasure to work with many talented people and
      great companies along the way.
    </Paragraph>
    <Paragraph large>
      I enjoy web programming, learning new stuff and getting to know all the
      news from the JavaScript world. I believe that the best way to grow is by
      patience and consistency.
    </Paragraph>
    <Paragraph large>
      In spare time I like to broaden my horizons by reading nonfiction books
      and traveling.
    </Paragraph>
    <StyledButtons>
      <StyledButton label="Portfolio" to={routes.portfolio} />
    </StyledButtons>
    <SEO
      title="About"
      description="I am a Web Developer experienced with React, TypeScript and Angular"
    />
  </StyledContainer>
);

export default AboutPage;

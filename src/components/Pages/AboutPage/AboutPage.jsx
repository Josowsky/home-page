import React from 'react';
import { shape } from 'prop-types';
import { Link } from 'gatsby';

import { routes } from 'shared/constants/constants';

import SEO from 'components/SEO/SEO';
import Sidebar from 'components/Sidebar/Sidebar';
import { PageContent } from 'components/PageWrappers/PageWrappers';
import {
  HeadingLarge,
  Paragraph,
  Image,
} from 'components/Typography/Typography';
import {
  StyledContainer,
  StyledButtons,
  StyledButton,
  StyledSidebar,
} from './AboutPage.style';

const AboutPage = ({ data }) => (
  <PageContent>
    <StyledContainer>
      <StyledSidebar>
        <Sidebar />
      </StyledSidebar>
      <HeadingLarge>About me</HeadingLarge>
      <Image alt="About banner photo" fluid={data.file.childImageSharp.fluid} />
      <Paragraph>
        Hi, I&apos;m Bartek. I am a Web Developer and web technologies
        passionate. Currently, I work remotely as a Frontend Engineer. You can
        find me in a beautiful city of Poznan.
      </Paragraph>
      <Paragraph>
        In 2018 I got my bachelor&apos;s degree in computer science at Poznan
        University of Technology. I’m working with web technologies for about 5
        years. I’m most proficient with frontend but I also did some backend
        work in Node.js and I have experience with AWS, Nginx, and Docker. At
        the moment my stack consists of React with TypeScript, react hooks,
        css-modules, Cypress and Jest. In my spare time, I’m extending my skills
        in Express.js, Graphql, apollo-client, styled-components and Docker.{' '}
        <br />I like to <Link to={routes.blog}>blog</Link> from time to time
      </Paragraph>
      <Paragraph>
        Since the beginning of my journey, I helped to build multiple web
        applications for innovators and entrepreneurs from all over the world.
        I’ve had the pleasure to work with many talented people and great
        companies along the way. If you would use some help with building your
        app, contact me on{' '}
        <a href="https://www.linkedin.com/in/bartosz-j%C3%B3zwowiak-46173a114/">
          Linkedin
        </a>
        , I respond to every message.
      </Paragraph>
      <Paragraph>
        In spare time I like to broaden my horizons by reading nonfiction books
        and traveling. If you&apos;re a developer and you&apos;re gathering a
        team for a workation contact me as well.
      </Paragraph>
      <StyledButtons>
        <StyledButton label="Blog" to={routes.blog} />
      </StyledButtons>
      <SEO
        title="About"
        description="I am a Web Engineer experienced with React, TypeScript and Angular"
      />
    </StyledContainer>
  </PageContent>
);

AboutPage.propTypes = {
  data: shape({
    file: shape({
      childImageSharp: shape({
        fluid: shape({}).isRequired,
      }).isRequired,
    }),
  }).isRequired,
};

export default AboutPage;

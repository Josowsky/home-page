import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO/SEO';

import { routes } from '../shared/constants';
import Button from '../components/Button/Button';

import styles from './index.module.scss';

const MainPage = ({ data }) => (
  <div className={styles.container}>
    <div className={styles.avatarContainer}>
      <Img
        alt="My photo"
        className={styles.avatarImage}
        fixed={data.file.childImageSharp.fixed}
      />
    </div>
    <div className={styles.header}>
      Hello, my name is Bartek, I create modern web apps in JavaScript and I
      love what I do.
    </div>
    <div className={styles.buttons}>
      <Button className={styles.button} label="About" to={routes.about} />
      <Button
        className={styles.button}
        label="Portfolio"
        to={routes.portfolio}
      />
    </div>
    <SEO
      title="Bartek Józwowiak"
      description="I am a Web Developer with Frontend experience. Check out my portfolio to see projects that I worked on."
    />
  </div>
);

MainPage.propTypes = {
  data: shape({
    file: shape({
      childImageSharp: shape({
        fixed: shape({}).isRequired,
      }).isRequired,
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    file(absolutePath: { regex: "/avatar/" }) {
      childImageSharp {
        fixed(height: 110, width: 110) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default MainPage;

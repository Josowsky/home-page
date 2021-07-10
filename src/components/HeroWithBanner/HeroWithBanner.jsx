import React from 'react';

import { Cell } from 'components/Grid/Grid';

import {
  StyledContainer,
  StyledBanner,
  StyledTextContainer,
} from './HeroWithBanner.style';

import bannerUrl from './assets/banner.png';

// TODO: emojis ??
const HeroWithBanner = () => (
  <StyledContainer>
    <Cell>
      <StyledBanner src={bannerUrl} alt="Main page banner" />
    </Cell>
    <Cell tablet={5}>
      <StyledTextContainer>
        <p>
          Hi, I&apos;m Bartosz, a 26-year-old web engineer passionate about
          building the web.
        </p>
        <br />
        <p>
          My first experience with programming was in middle school when we were
          learning Turbo Pascal. It was uncharted territory for me back then but
          I remember that I was fascinated from the very start.
        </p>
        <br />
        <p>
          In school, we build only simple console scripts but I managed to use
          this knowledge to build a text-based RPG game in the terminal and I
          was so proud of it! It even had a branching storyline and multiple
          endings.
        </p>
      </StyledTextContainer>
    </Cell>
    <Cell tablet={5} tabletOffset={2}>
      <StyledTextContainer>
        <p>
          Years later I went to college, bought my first laptop, and started
          experimenting with different languages. At some point, I tried doing
          Javascript and immediately it clicked. I knew that I want to do web
          development. I loved how easy it was to transform my idea into a
          working app. And I could even make it look good!
        </p>
        <br />
        <p>
          This passion stayed with me to this day. Since then I finished my
          Bachelor&apos;s Degree in Computer Science and I&apos;m working with
          web technologies for a couple of years. I&apos;m excited about
          building cool stuff!
        </p>
      </StyledTextContainer>
    </Cell>
  </StyledContainer>
);

export default HeroWithBanner;

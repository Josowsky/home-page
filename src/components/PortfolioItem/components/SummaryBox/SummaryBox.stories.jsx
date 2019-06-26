import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';

import SummaryBox from './SummaryBox';

storiesOf(`Portfolio/PortfolioItem/SummaryBox`, module).add(
  `SummaryBox default`,
  () => (
    <div>
      <SummaryBox
        projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mauris viverra, malesuada nisi et, sagittis purus. Sed finibus sagittis interdum. Nulla sed maximus ipsum, in dictum enim. Sed fermentum ligula quis ex maximus ullamcorper sed ac purus."
        projectName="Example project"
        projectTechStack={['React', 'Redux', 'Rxjs', 'Storybook']}
      />
    </div>
  )
);

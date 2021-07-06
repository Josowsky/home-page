import React from 'react';

import Grid, { Cell } from 'components/Grid/Grid';
import PageSection from 'components/PageSection/PageSection';
import HeroLogo from 'components/HeroLogo/HeroLogo';
import HeroWithBanner from 'components/HeroWithBanner/HeroWithBanner';
import TextWithCTABanner from 'components/TextWithCTABanner/TextWithCTABanner';

// TODO: Move this component to "pages" directory after its done
const NewHomePage = () => (
  <main>
    <PageSection>
      <Grid>
        <Cell mobile={12}>
          <HeroLogo />
        </Cell>
      </Grid>
      <HeroWithBanner />
    </PageSection>
    <TextWithCTABanner />
  </main>
);

export default NewHomePage;

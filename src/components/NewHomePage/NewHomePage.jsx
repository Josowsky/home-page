import React from 'react';

import portfolioCardsSectionData from 'components/PortfolioCardsSection/lib/PortfolioCardsSection.data';

import Grid, { Cell } from 'components/Grid/Grid';
import PageSection from 'components/PageSection/PageSection';
import HeroLogo from 'components/HeroLogo/HeroLogo';
import HeroWithBanner from 'components/HeroWithBanner/HeroWithBanner';
import PortfolioCardsSection from 'components/PortfolioCardsSection/PortfolioCardsSection';
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
    <PageSection>
      <PortfolioCardsSection {...portfolioCardsSectionData} />
    </PageSection>
    <TextWithCTABanner />
  </main>
);

export default NewHomePage;

import React from 'react';

import Grid from './Grid';
import Cell from './Cell/Cell';

import { StyledContainer, StyledCell } from './Grid.stories.style';

export default {
  title: 'NewHomePage/Grid',
  component: Cell,
};

export const Default = () => (
  <StyledContainer>
    <Grid>
      <Cell>
        <StyledCell color="#454545">default</StyledCell>
      </Cell>
      <Cell mobile={6} desktop={2}>
        <StyledCell color="#2ECC71">mobile-6 desktop-2</StyledCell>
      </Cell>
      <Cell mobile={6} desktop={10}>
        <StyledCell color="#2ECC71">mobile-6 desktop-10</StyledCell>
      </Cell>
      <Cell tablet={4} mobile={5}>
        <StyledCell color="#2874A6">tablet-4 mobile-5</StyledCell>
      </Cell>
      <Cell tablet={8} mobile={7}>
        <StyledCell color="#2874A6">tablet-8 mobile-7</StyledCell>
      </Cell>
      <Cell desktop={4} desktopLarge={5}>
        <StyledCell color="#E74C3C">desktop-4 desktopLarge-5</StyledCell>
      </Cell>
      <Cell desktop={6} desktopLarge={2}>
        <StyledCell color="#E74C3C">desktop-8 desktopLarge-2</StyledCell>
      </Cell>
      <Cell desktop={2} desktopLarge={5}>
        <StyledCell color="#E74C3C">desktop-2 desktopLarge-5</StyledCell>
      </Cell>
      <Cell tablet={5} desktop={3} desktopOffset={3}>
        <StyledCell color="#76448A">
          tablet-5 desktop-3 desktopOffset-3
        </StyledCell>
      </Cell>
      <Cell tablet={5} tabletOffset={2} desktop={6} desktopOffset={0}>
        <StyledCell color="#76448A">
          tablet-5 tabletOffset-2 desktop-6
        </StyledCell>
      </Cell>
    </Grid>
  </StyledContainer>
);

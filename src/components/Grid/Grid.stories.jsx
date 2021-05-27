import React from 'react';

import Grid from './Grid';
import Cell from './Cell/Cell';

import { StyledContainer, StyledCell } from './Grid.stories.style';

export default {
  title: 'Grid',
  component: Cell,
};

export const Default = () => (
  <StyledContainer>
    <Grid>
      <Cell>
        <StyledCell color="#454545">default</StyledCell>
      </Cell>
      <Cell mobile={6}>
        <StyledCell color="#2ECC71">mobile-6</StyledCell>
      </Cell>
      <Cell mobile={6}>
        <StyledCell color="#2ECC71">mobile-6</StyledCell>
      </Cell>
      <Cell tablet={4}>
        <StyledCell color="#2874A6">tablet-4</StyledCell>
      </Cell>
      <Cell tablet={8}>
        <StyledCell color="#2874A6">tablet-8</StyledCell>
      </Cell>
      <Cell desktop={4}>
        <StyledCell color="#E74C3C">desktop-4</StyledCell>
      </Cell>
      <Cell desktop={6}>
        <StyledCell color="#E74C3C">desktop-8</StyledCell>
      </Cell>
      <Cell desktop={2}>
        <StyledCell color="#E74C3C">desktop-2</StyledCell>
      </Cell>
      <Cell desktopLarge={3}>
        <StyledCell color="#76448A">desktopLarge-3</StyledCell>
      </Cell>
      <Cell desktopLarge={9}>
        <StyledCell color="#76448A">desktopLarge-9</StyledCell>
      </Cell>
    </Grid>
  </StyledContainer>
);

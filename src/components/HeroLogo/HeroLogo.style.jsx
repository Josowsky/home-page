import styled from 'styled-components';

import {
  colorDarkGrey,
  colorWhite,
  colorRed,
  gutter,
} from 'shared/constants/constants.style';

import BubbleIcon from './BubbleIcon/BubbleIcon';

// This is a width of a single column + gutter between columns
const leftOffset = `${69 + gutter(4, true)}px`;

export const StyledContainer = styled.div`
  font-family: 'Roboto Slab', serif;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledBubbleIcon = styled(BubbleIcon)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  transform: translate(-56px, -48px);
`;

export const StyledTopContainer = styled.div`
  padding-left: ${leftOffset};
`;

export const StyledTitle = styled.p`
  font-size: 48px;
  line-height: 56px;
  color: ${colorDarkGrey};
`;

export const StyledSubtitle = styled.p`
  font-size: 48px;
  line-height: 56px;
  color: ${colorDarkGrey};
  font-weight: 700;
`;

export const StyledBottomText = styled.h1`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  color: ${colorWhite};
  background-color: ${colorRed};
  padding: ${`${gutter()} ${gutter(3)} ${gutter()} ${leftOffset}`};
  border-radius: 5px;
`;

import styled from 'styled-components';

import {
  colorDarkGrey,
  colorGrey,
  colorWhite,
  colorRed,
  colorGreyLight,
  gutter,
} from 'shared/constants/constants.style';

export const StyledContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const StyledImageContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  height: 300px;
  width: 100%;
  margin-bottom: ${gutter(2)};
`;

export const StyledImage = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colorGreyLight};
  background-image: url('${props => props.imageUrl}');
  background-position: center;
  background-size: cover;
  transition: transform 200ms ease-out;
  will-change: transform;

  ${StyledImageContainer}:hover & {
    transform: scale(1.15);
  }
`;

export const StyledLink = styled.div`
  content: '';
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
  background-color: ${colorWhite};

  svg {
    position: absolute;
    left: 15px;
    top: 17px;
    width: 28px;
    height: 24px;
    color: ${colorRed};
  }
`;

export const StyledTitle = styled.h2`
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  font-size: 32px;
  color: ${colorDarkGrey};
  margin-bottom: ${gutter()};
  text-align: right;
`;

export const StyledText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: ${colorGrey};
  text-align: right;
  max-width: 370px;
`;

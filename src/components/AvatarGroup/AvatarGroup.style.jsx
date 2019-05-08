import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  color: #fff;
  text-align: center;
`;

export const StyledImage = styled(Img)`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

export const StyledAvatar = styled(Link)`
  border-radius: 50%;
  height: 168px;
  width: 168px;
`;

export const StyledName = styled.div`
  font-weight: 600;
  font-size: 32px;
  margin-top: 16px;
`;

export const StyledTitle = styled.div`
  font-size: 24px;
  margin-top: 16px;
`;

import styled from 'styled-components';

import bannerImageBackground from '../../assets/background-banner.svg';

export const BannerContent = styled.div``;

export const BannerBackground = styled.main`
  position: relative;
`;

export const BannerImageBackground = styled.div`
  background-image: url(${bannerImageBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter: blur(15px);
  z-index: -1;
`;

export const Main = styled.main`
  display: flex;

  max-width: 72rem;
  width: 100%;
  padding: 5.75rem 0;

  display: flex;
  gap: 3.5rem;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;

  color: ${(props) => props.theme['dark']};
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 130%;

  color: ${(props) => props.theme['gray-700']};
  margin-top: 1rem;
`;

export const Highlights = styled.div`
  display: grid;
  margin-top: 4.125rem;

  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.25rem;
  grid-column-gap: 1.5rem;
  align-items: center;
`;

export const ImageBanner = styled.img`
  max-width: 30rem;
  width: 100%;
`;

export const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  span {
    font-family: 'Roboto';
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-600']};
  }
`;

const IconItem = styled.div`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['white-100']};
`;

export const Delivery = styled(IconItem)`
  background-color: ${(props) => props.theme['yellow-700']};
`;

export const Box = styled(IconItem)`
  background-color: ${(props) => props.theme['gray-600']};
`;

export const Timing = styled(IconItem)`
  background-color: ${(props) => props.theme['yellow-400']};
`;

export const CoffeeQuality = styled(IconItem)`
  background-color: ${(props) => props.theme['purple-500']};
`;

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;

  color: ${(props) => props.theme['gray-700']};
`;

export const Content = styled.div`
  max-width: 72rem;
  width: 100%;

  margin: 0 auto;
`;

export const ShoppingInfo = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 4rem;
  column-gap: 2rem;

  margin-bottom: 5rem;
`;

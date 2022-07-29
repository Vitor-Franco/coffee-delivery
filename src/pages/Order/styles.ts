import styled from 'styled-components';

export const Container = styled.div`
  max-width: 72rem;

  width: 100%;
  margin: 5rem auto;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-700']};
  }

  > p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }
`;

export const Content = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Benefits = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  border-radius: 6px 36px;
  padding: 2.5rem;
  height: fit-content;
  gap: 2rem;

  background-clip: padding-box;
  border: solid 1px transparent;
  background-color: ${(props) => props.theme['white-200']};
  width: 100%;
  max-width: 32rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;

export const Benefit = styled.div`
  display: flex;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme['white-100']};
  }

  p {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-600']};
  }

  strong {
    font-weight: 700;
    color: ${(props) => props.theme['gray-600']};
  }
`;

const SvgWrapper = styled.div`
  background-color: #333;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Address = styled(SvgWrapper)`
  background-color: ${(props) => props.theme['purple-500']};
`;

export const Delivery = styled(SvgWrapper)`
  background-color: ${(props) => props.theme['yellow-400']};
`;

export const Payment = styled(SvgWrapper)`
  background-color: ${(props) => props.theme['yellow-700']};
`;

export const Image = styled.div``;

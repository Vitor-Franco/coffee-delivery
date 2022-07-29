import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 16rem;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1.25rem;

  h4 {
    margin-top: 1rem;

    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    display: flex;
    text-align: center;
    color: ${(props) => props.theme['gray-700']};
  }

  > p {
    margin-top: 0.5rem;
    font-family: 'Roboto';
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme['gray-500']};
  }
`;

export const ImageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-top: -3rem;
    width: 120px;
  }
`;

export const Badges = styled.div`
  display: flex;
  gap: 4px;
`;

export const Badge = styled.div`
  margin-top: 0.75rem;
  padding: 4px 8px;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['yellow-100']};

  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-700']};
`;

export const Footer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;

  gap: 1.25rem;
`;

export const Amount = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-600']};

  strong {
    font-weight: 800;
    font-family: 'Baloo 2';
    font-size: 1.5rem;

    color: ${(props) => props.theme['gray-600']};
  }
`;

export const Total = styled.div`
  display: flex;
  gap: .5rem;
`;

export const TotalItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  gap: 4px;

  width: 4.5rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  input {
    width: 100%;
    background-color: transparent;
    border-color: transparent;
    border: 0;
    font-size: 1rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme.dark};
  }

  button {
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`;

export const CartButton = styled.span`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;

  background-color: ${(props) => props.theme['purple-800']};
  color: ${(props) => props.theme['white-100']};
`;

import styled, { css } from 'styled-components';

export const ContainerCheckout = styled.div`
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
`;

export const FormCheckout = styled.form`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
`;

export const Section = styled.section`
  margin-top: 2.5rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
    margin-bottom: 1rem;
  }
`;

export const Container = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-400']};

  & + & {
    margin-top: 0.725rem;
  }
`;

export const CartResume = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px 44px;
`;

const DescriptionBase = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 2rem;
  p {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-700']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
  }
`;

export const DescriptionAddress = styled(DescriptionBase)`
  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`;

export const DescriptionPayment = styled(DescriptionBase)`
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;
`;

interface IButtonPaymentProps {
  isActive: boolean;
}

export const ButtonPayment = styled.button<IButtonPaymentProps>`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.75rem;
  border: 0;
  cursor: pointer;

  padding: 1rem;

  font-family: 'Roboto';
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 160%;
  color: ${(props) => props.theme['gray-600']};

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  ${(props) =>
    props.isActive &&
    css`
      background: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-500']};
    `}
`;


export const Resume = styled.div`
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      line-height: 130%;

      color: ${(props) => props.theme['gray-600']};
    }

    & + div {
      margin-top: 0.75rem;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['gray-700']};
  }
`;

export const PaymentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  margin-top: 1.5rem;
  border: 0;
  width: 100%;
  border-radius: 6px;
  gap: 0.25rem;

  cursor: pointer;
  background: ${(props) => props.theme['yellow-400']};

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme['white-100']};
`;

export const NotSelectedProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    font-size: 1.1rem;
    text-align: center;
    font-weight: 700;
  }
`;
import styled from 'styled-components';

export const OrderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.25rem 0.5rem;
  padding-bottom: 2rem;
  border-bottom: 1.5px solid ${(props) => props.theme['gray-200']};
  margin-bottom: 1.5rem;
  width: 100%;

  img {
    width: 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 1.25rem;

  p {
    font-size: 1rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['gray-700']};
  }
`;

export const Actions = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const AddMoreItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 8px;
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

export const RemoveItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  padding: 5px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  gap: 4px;
  color: ${(props) => props.theme['gray-600']};
  background-color: ${(props) => props.theme['gray-200']};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`;

export const Amount = styled.span`
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: ${(props) => props.theme['gray-600']};
`;

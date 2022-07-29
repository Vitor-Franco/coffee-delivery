import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  background: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 4px;

  position: relative;

  span {
    position: absolute;
    right: 0.75rem;

    font-style: italic;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
    background: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-500']};
  }
`;

interface IInputContainerProps {
  hasOptionalField?: boolean;
}

export const InputContainer = styled.input<IInputContainerProps>`
  border-radius: 4px;
  padding: 0.75rem;
  background: transparent;
  height: 2.625rem;
  border: 0;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['gray-500']};

  ${(props) =>
    props.hasOptionalField &&
    css`
      padding-right: 4rem;
    `}
`;

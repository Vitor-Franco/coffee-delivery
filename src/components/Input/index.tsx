import React, { InputHTMLAttributes } from 'react';
import { Container, InputContainer } from './styles';

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isOptional?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ isOptional, ...rest }: IInputProps, ref) => {
    return (
      <Container>
        <InputContainer hasOptionalField={isOptional} ref={ref} {...rest} />
        {isOptional && <span>Opcional</span>}
      </Container>
    );
  }
);

export { Input };

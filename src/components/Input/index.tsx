import React, { InputHTMLAttributes } from 'react';
import { Container, InputContainer } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
}

const Input: React.FC<IInputProps> = React.forwardRef(
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

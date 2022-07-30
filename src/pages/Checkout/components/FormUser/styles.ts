import styled from "styled-components";

export const ErrorMessage = styled.span`
position: absolute;
bottom: -1.2rem;
font-size: .8rem;
color: ${(props) => props.theme['red-400']};
`;

const InputWrapperBase = styled.div`
position: relative;
margin-bottom: 1.5rem;
`;

export const Cep = styled(InputWrapperBase)`
grid-area: cep;
`;

export const Rua = styled(InputWrapperBase)`
grid-area: rua;
`;

export const Numero = styled(InputWrapperBase)`
grid-area: numero;
`;

export const Complemento = styled(InputWrapperBase)`
grid-area: complemento;
`;

export const Bairro = styled(InputWrapperBase)`
grid-area: bairro;
`;

export const Cidade = styled(InputWrapperBase)`
grid-area: cidade;
`;

export const UF = styled(InputWrapperBase)`
grid-area: uf;
`;

export const GridInputs = styled.div`
display: grid;
column-gap: 1rem;
row-gap: .25rem;
grid-template-columns: 1fr 17.25rem 3.75rem;
grid-template-areas:
  'cep . .'
  'rua rua rua'
  'numero complemento complemento'
  'bairro cidade uf';

input {
  width: 100%;
}
`;
import styled, { css } from "styled-components";
import { InputProps } from "interfaces/Style.interface";

const Entrada = styled.input<InputProps>`
  height: 40px;
  background-color: var(--color-main);
  border-radius: 8px;
  border: 1px solid var(--main);
  font-size: 16px;
  padding: 0 1rem;
  ::placeholder {
    color: var(--black);
    font-weight: 500;
    font-size: 14px;
  }
  &:focus {
    outline: none;
    border-color: var(--black);
  }
  ${props =>
    props.error &&
    css`
      &:focus {
        background: var(--color-secundary);
        color: var(--white);
        border-color: var(--border-error);
      }
    `}
`;
export default Entrada;
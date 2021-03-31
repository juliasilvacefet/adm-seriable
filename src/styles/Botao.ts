import styled, {css} from "styled-components";
import {BotaoProps} from "interfaces/Botao.interface"
 
const colorVariations = {
    default:css`
    background-color: var(--color-main);
    border: 1px solid black;`,
    marmore:css`
    background-image: var(--img-marmore);
    `,
    primary: css`
    background: var(--primary);
    color: var(--white);
    &.hover {
      background: var(--primary-hover);
    }
  `,
  danger: css`
    background: var(--danger);
    color: var(--white);
    &.hover {
      background: var(--danger-hover);
    }
  `,
  warning: css`
    background: var(--warning);
    color: var(--white);
    &.hover {
      background: var(--warning-hover);
    }
  `,
  success: css`
    background: var(--success);
    color: var(--white);
    &.hover {
      background: var(--success-hover);
    }
  `,
}





const typeVariations = {
    default:css`
         height: 35px;
        width: 150px;
        font-size: 16px;
    `,
    menu:css`
        background-color: transparent;
        border: 1px solid black;
        padding: 15px 45px;
        margin-bottom: 20px;
        width:300px;
        text-align: center;
        font-size: 1.5em;

        @media only screen and (max-width: 500px){
            .btn-menu{
                width: 80%;
                padding:20px;
            }
        
        }
    `
}

const Botao = styled.button<BotaoProps>`
border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-family: var(--font-comum);
${(props) => typeVariations[props.tipo || "default"]}
${(props) => colorVariations[props.bg || "default"]}

`

export default Botao;
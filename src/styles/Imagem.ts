import styled, {css} from "styled-components";
import {ImagemProps} from "interfaces/Imagem.interface"



const sizeVariations = {
    default:css`
    max-width: 100%;
    `,

    sm:css`
    max-width: 25px;
    `,

    md:css`
    max-width: 75px;
    `,
    lg:css`
    max-width: 175px;
    `
}

const Imagem = styled.img<ImagemProps>`
height: auto;

${(props) => sizeVariations[props.size || "default"]}

`

export default Imagem;
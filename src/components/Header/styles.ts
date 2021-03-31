import styled from "styled-components";

export const Cabecalho = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
padding: 20px 10%;
font-family: var(--font-comum);
`;

export const Titulo = styled.a`
    font-size: 3em;  
`;

export const Entrada = styled.input`
background-color: transparent;

max-width: 80%;

font-family: var(--fomt-comum);

font-size: 1.2em;

padding: 10px;
`;
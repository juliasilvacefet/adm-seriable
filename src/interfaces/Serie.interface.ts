import internal from "node:stream";

export interface ISerie {
    id: number,
    nome: string,
    genero_id?: number
    genero?: {
        id: number;
        nome: string;
      }
    plataforma: string,
    descricao: string,
    temporadas: number,
    elenco: string,
    lancamento: string
}
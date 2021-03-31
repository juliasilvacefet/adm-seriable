import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Loading } from "components";
import { FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { apiSerie } from "api/data";
import { ISerie } from "interfaces/Serie.interface";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { Botao } from "styles";
import * as S from "./styles";

const Serie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState<ISerie[]>([]);
  const history = useHistory();

  const fetchData = async () => {
    const response = await apiSerie.index();
    setSeries(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      toast.error(error);
    }
  }, []);

  const handleDelete = useCallback(async (id: number) => {
    confirmAlert({
      title: "Atenção",
      message: "Tem certeza que deseja apagar o item selecionado?",
      buttons: [
        {
          label: "SIM",
          onClick: async () => {
            await apiSerie.delete(id);
            toast.success("Serie removida!");
            fetchData();
          },
        },
        {
          label: "NÃO",
          onClick: () => console.log("não"),
        },
      ],
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Botao bg="success" onClick={() => history.push("/serie/0")}>
            <FaPlusCircle /> &nbsp; Adicionar
          </Botao>
          <S.Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Genero</th>
                <th>Plataforma</th>
                <th>Descrição</th>
                <th>Temporadas</th>
                <th>Elenco</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {series &&
                series.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nome}</td>
                    {console.log(item)}
                    <td>{item.genero?.nome}</td>
                    <td>{item.plataforma}</td>
                    <td>{item.descricao}</td>
                    <td>{item.temporadas}</td>
                    <td>{item.elenco}</td>
                    <td>
                      <Botao
                        bg="primary"
                        onClick={() => history.push(`serie/${item.id}`)}
                      >
                        <FaPencilAlt />
                      </Botao>
                    </td>
                    <td>
                      <Botao
                        bg="danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaPencilAlt />
                      </Botao>
                    </td>
                  </tr>
                ))}
            </tbody>
          </S.Table>
        </>
      )}
    </>
  );
};
export default Serie;

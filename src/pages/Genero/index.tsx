import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Loading } from "components";
import { FaPlusCircle, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { apiGenero } from "api/data";
import { IGenero } from "interfaces/Genero.interface";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { Botao } from "styles";
import * as S from "./styles";

const Genero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cursos, setCursos] = useState<IGenero[]>([]);
  const history = useHistory();

  const fetchData = async () => {
    const response = await apiGenero.index();
    setCursos(response.data);
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
            await apiGenero.delete(id);
            toast.success("Genero removido!");
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
          <Botao bg="success" onClick={() => history.push("/genero/0")}>
            <FaPlusCircle /> &nbsp; Adicionar
          </Botao>
          <S.Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {cursos &&
                cursos.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nome}</td>
                    <td>
                      <Botao
                        bg="primary"
                        onClick={() => history.push(`genero/${item.id}`)}
                      >
                        <FaPencilAlt />
                      </Botao>
                    </td>
                    <td>
                      <Botao
                        bg="danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaTrashAlt />
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
export default Genero;

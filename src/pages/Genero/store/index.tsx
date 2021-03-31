import { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaHandPointLeft, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { apiGenero } from "api/data";
import { Loading } from "components";
import { Entrada, Botao, Formulario} from "styles";
import { IGenero } from "interfaces/Genero.interface";

const GeneroStore = () => {
  const [genero, setGenero] = useState<IGenero>({} as IGenero);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiGenero.show(id);
          setGenero(response.data);
        } catch (error) {
          toast.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData(Number(id));
    } else {
      setIsLoading(false);
    }
  }, [id]);

  const handleChange = useCallback(
    async (e) => {
      setGenero({ ...genero, [e.target.name]: e.target.value });
    },
    [genero]
  );

  const onSubmit = useCallback(
    async (data) => {
      try {
        if (data.id > 0) {
          await apiGenero.update(data.id, data);
          toast.success("Genero Alterado com sucesso!");
        } else {
          await apiGenero.store(data);
          toast.success("Genero Cadastrado com sucesso!");
        }
        history.push("/genero");
      } catch (error) {
        toast.error(() =>
          error.response.data ? error.response.data.join("\n") : error.message
        );
      }
    },
    [history]
  );
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Botao onClick={() => history.push("/genero")} bg="warning">
            <FaHandPointLeft /> &nbsp; Voltar
          </Botao>
          <Formulario method="POST" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="id" value={id || ""} ref={register} />
            <div>
              <label htmlFor="nome">Nome: </label>
              <Entrada
                type="text"
                name="nome"
                id="nome"
                value={genero.nome || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.nome}
              />
            </div>
            <Botao bg="success" type="submit">
              <FaSave /> &nbsp; Salvar
            </Botao>
          </Formulario>
        </>
      )}
    </>
  );
};
export default GeneroStore;

import { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaHandPointLeft, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { apiSerie, apiGenero } from "api/data";
import { Loading } from "components";
import { Entrada, Botao, Formulario, Select, Textarea } from "styles";
import { ISerie } from "interfaces/Serie.interface";
import { IGenero } from "interfaces/Genero.interface";

const SerieStore = () => {
  const [serie, setSerie] = useState<ISerie>({} as ISerie);
  const [genero, setGenero] = useState<IGenero[]>({} as IGenero[]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchGenero = async () => {
      try {
        const response = await apiGenero.index();
        setGenero(response.data);
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGenero();
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiSerie.show(id);
          setSerie(response.data);
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
      setSerie({ ...serie, [e.target.name]: e.target.value });
    },
    [serie]
  );


  const onSubmit = useCallback(
    async (data) => {
      try {
        if (data.id > 0) {
          await apiSerie.update(data.id, data);
          toast.success("Serie Alterada com sucesso!");
        } else {
          await apiSerie.store(data);
          toast.success("Serie Cadastrada com sucesso!");
        }
        history.push("/serie");
      } catch (error) {
        toast.error(() =>
          error.response.data ? error.response.data.join("\n") : error.message
        );
      }
    },
    [history]
  );

  if(serie.lancamento){
    serie.lancamento = serie.lancamento.substring(0,10)
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Botao onClick={() => history.push("/serie")} bg="warning">
            <FaHandPointLeft /> &nbsp; Voltar
          </Botao>
          <Formulario method="POST" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="id" value={id || ""} ref={register} />
            <div>
              <label htmlFor="genero">Genero: </label>
              <Select
                name="genero_id"
                id="genero"
                value={serie.genero_id || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.nome}
              >
                <option></option>
                {genero.length > 0 &&
                  genero.map((item) => (
                    <option key={item.id} 
                    value={item.id}>
                      {item.nome}
                    </option>
                  ))}
              </Select>
            </div>
            <div>
              <label htmlFor="nome">Nome: </label>
              <Entrada
                type="text"
                name="nome"
                id="nome"
                value={serie.nome || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.nome}
              />
            </div>
            
            <div>
              <label htmlFor="plataforma">Plataforma: </label>
              <Entrada
                type="text"
                name="plataforma"
                id="plataforma"
                value={serie.plataforma || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.plataforma}
              />
            </div>

            <div>
              <label htmlFor="descricao">Descrição: </label>
              <Textarea
                name="descricao"
                id="descricao"
                value={serie.descricao || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.descricao}
              />
            </div>

            <div>
              <label htmlFor="temporadas">Temporadas: </label>
              <Entrada
                type="number"
                name="temporadas"
                id="temporadas"
                value={serie.temporadas || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.temporadas}
              />
            </div>

            <div>
              <label htmlFor="elenco">Elenco: </label>
              <Entrada
                type="text"
                name="elenco"
                id="elenco"
                value={serie.elenco || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.elenco}
              />
            </div>

            <div>
              <label htmlFor="lancamento">Lançamento: </label>
              <Entrada
            
                type="date"
                name="lancamento"
                id="lancamento"
                value={ serie.lancamento || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.lancamento}
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
export default SerieStore;

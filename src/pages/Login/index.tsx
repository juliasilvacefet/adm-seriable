import { useEffect, useState , useCallback} from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useAuth } from "hooks/auth";
import {Entrada, Botao } from "styles";
import * as S from "./styles";
import { toast } from "react-toastify";
import { Loading,Header,Footer } from "components";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { handleSubmit, register } = useForm();
  const { signIn } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleLogin = useCallback(
    async (data) => {
      console.log(data);
      try {
        await signIn(data);
        toast.success("Login realizado com sucesso!");
      } catch (error) {
        toast.error(`Falha no Login!  ${error}`);
      }
    },
    [signIn]
  );

  return <>{isLoading ? <Loading /> : 
    <>
      <Header />

      <S.Form onSubmit={handleSubmit(handleLogin)}>
            <S.BoxLogin>
              <S.BoxInput>
                <HiOutlineMail />
                <Entrada
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  ref={register({ required: true })}
                  required
                />
              </S.BoxInput>
              <S.BoxInput>
                <RiLockPasswordLine />
                <Entrada
                  type="password"
                  name="password"
                  placeholder="Senha"
                  ref={register({ required: true, minLength: 3 })}
                  required
                />
              </S.BoxInput>
              <S.BoxButton>
                <Botao type="submit">Enviar</Botao>
                <Botao type="button" onClick={() => history.push("/cadastro")}>
                  Cadastrar
                </Botao>
              </S.BoxButton>
            </S.BoxLogin>
          </S.Form>

      <Footer/>
      
    </>
    
    
  }</>;
}
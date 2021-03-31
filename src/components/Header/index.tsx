import {Cabecalho,Titulo} from "./styles";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";
import { IoIosLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import { useAuth } from "hooks/auth";



const Header = () => {
    const history = useHistory();
    const { signOut } = useAuth();
  
    const handleSignout = useCallback(() => {
      signOut();
      toast.success("Volte sempre!");
      history.push("/login");
    }, [signOut, history]);

    return (
        <>
            <link href= "https://fonts.googleapis.com/css2?family=Rum+Raisin&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap" rel="stylesheet" />
            <Cabecalho>            
                <Titulo href="https://seriable.vercel.app" >Seriable</Titulo>
                <a href={`/serie`}>Série</a>
                    <a href={`/genero`}>Gêneros</a>
                <nav>
                    <div className="flex">
                    
                    <div>
                        <IoIosLogOut size={40} onClick={handleSignout} />
                    </div>
                    </div>
                </nav>
        </Cabecalho>
        </>
    );
};

export default Header;
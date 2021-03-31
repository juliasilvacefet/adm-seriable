import {Rodape} from "./styles"
import {Imagem} from "../../styles"

const Footer = () => {
    return (
        <Rodape>
        <Imagem src="img/logo.png" alt="Logo do seriable" size="lg"/>
        
            <a href="/">
                <Imagem src="/img/instagram.png" alt="logo do instagram" size="md"/>
                @seriable
            </a>
        </Rodape>
    );
};

export default Footer;
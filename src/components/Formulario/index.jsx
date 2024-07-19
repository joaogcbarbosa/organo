import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoCadastrarColaborador(
            {
                nome,
                cargo,
                imagem,
                time
            }
        )

        // chamar o axios para fazer o POST aqui
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome aqui"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo aqui"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)} 
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem aqui"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                 />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;

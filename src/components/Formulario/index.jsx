import "./Formulario.css"
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ( {times, aoCadastrarColaborador, aoCadastrarTime} ) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")
    const [nomeTime, setNomeTime] = useState("")
    const [corTime, setCorTime] = useState("")

    const colaboradorAttrs = [setNome, setCargo, setImagem, setTime]
    const timeAttrs = [setNomeTime, setCorTime]
    
    const aoSalvarColaborador = (evento) => {
        evento.preventDefault();
        aoCadastrarColaborador(
            {
                id: uuidv4(),
                nome,
                cargo,
                imagem,
                time
            }
        )
        colaboradorAttrs.map(c => c(""))
    }

    const aoSalvarTime= (evento) => {
        evento.preventDefault();
        aoCadastrarTime(
            {
                id: uuidv4(),
                nome: nomeTime,
                cor: corTime
            }
        )
        timeAttrs.map(t => t(""))
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvarColaborador}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite seu nome aqui"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio
                    label="Cargo" 
                    placeholder="Digite seu cargo aqui"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)} 
                />
                <Campo
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem aqui"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                 />
                <ListaSuspensa 
                    obrigatorio
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar o novo time</h2>
                <Campo
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do novo time aqui"
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                />
                <Campo
                    type="color"
                    obrigatorio
                    label="Time" 
                    placeholder="Digite a cor do novo time aqui"
                    valor={corTime}
                    aoAlterar={valor => setCorTime(valor)} 
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;

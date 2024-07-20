import Colaborador from "../Colaborador";
import "./Time.css"

const Time = (props) => {

    const css = {
        corPrimaria: props.corPrimaria,
        corSecundaria: props.corSecundaria,
    }

    return (
        <section className="time" style={ {backgroundColor: css.corSecundaria} }>
            <h3 style={ {borderColor: css.corPrimaria} }>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => (
                    <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>
                ))}
            </div>
        </section>
    )
}

export default Time;

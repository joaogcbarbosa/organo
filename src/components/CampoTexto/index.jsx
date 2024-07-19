import "./CampoTexto.css"

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={(e) => props.aoAlterar(e.target.value)} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;

import "./CampoTexto.css"

const CampoTexto = ( {label, valor, obrigatorio, placeholder, aoAlterar} ) => {
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={(e) => aoAlterar(e.target.value)} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default CampoTexto;

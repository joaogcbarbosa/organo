import "./Campo.css"

const Campo = ( {type="text", label, valor, obrigatorio, placeholder, aoAlterar} ) => {
    return (
        <div className={`campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={(e) => aoAlterar(e.target.value)} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default Campo;

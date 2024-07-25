import "./Campo.css"

const Campo = ( {label, valor, obrigatorio, placeholder, aoAlterar} ) => {
    return (
        <div className="campo">
            <label>{label}</label>
            <input value={valor} onChange={(e) => aoAlterar(e.target.value)} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default Campo;

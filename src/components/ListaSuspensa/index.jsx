import "./ListaSuspensa.css"

const ListaSuspensa = ( {label, valor, obrigatorio, itens, aoAlterar} ) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select name="areas" id="areas" required={obrigatorio} value={valor} onChange={(e) => aoAlterar(e.target.value)}>
                {itens.map((i => <option key={i}>{i}</option>))}
            </select>
        </div>
    )
}

export default ListaSuspensa;

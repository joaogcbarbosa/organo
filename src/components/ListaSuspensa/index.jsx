import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select name="areas" id="areas" required={props.obrigatorio} value={props.valor} onChange={(e) => props.aoAlterar(e.target.value)}>
                {props.itens.map((i => <option key={i}>{i}</option>))}
            </select>
        </div>
    )
}

export default ListaSuspensa;

import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ( {nome, colaboradores, corPrimaria, corSecundaria, aoDeletar, aoMudarCor} ) => {
  return (
    colaboradores.length > 0 && (
      <section className="time" style={{ backgroundColor: corSecundaria }}>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <input value={corPrimaria} onChange={aoMudarCor} type="color" className="input-color" />
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corPrimaria={corPrimaria}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;

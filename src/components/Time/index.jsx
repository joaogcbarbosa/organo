import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ( {nome, colaboradores, corPrimaria, corSecundaria, aoDeletar} ) => {
  const css = {
    corPrimaria: corPrimaria,
    corSecundaria: corSecundaria,
  };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={{ backgroundColor: css.corSecundaria }}>
        <h3 style={{ borderColor: css.corPrimaria }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corPrimaria={css.corPrimaria}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;

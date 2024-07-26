import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from 'hex-to-rgba';

const Time = ( {nome, colaboradores, cor, aoDeletar, aoMudarCor, aoFavoritar} ) => {
  return (
    colaboradores.length > 0 && (
      <section className="time" style={{ backgroundColor: hexToRgba(cor, "0.55") }}>
        <h3 style={{ borderColor: cor }}>{nome}</h3>
        <input value={cor} onChange={(e) => aoMudarCor(nome, e.target.value)} type="color" className="input-color" />
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              id={colaborador.id}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              favorito={colaborador.favorito}
              corPrimaria={cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;

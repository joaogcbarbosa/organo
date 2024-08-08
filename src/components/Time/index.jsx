import { useContext } from "react";
import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from 'hex-to-rgba';
import { TimeContext } from "../../context/TimeContext";
import { ColaboradorContext } from "../../context/ColaboradorContext";

const Time = ( {nome, cor} ) => {

  let { colaboradores } = useContext(ColaboradorContext)
  const { mudarCorTime } = useContext(TimeContext)

  colaboradores = colaboradores.filter(
    (colaborador) => colaborador.time === nome
  )

  return (
    colaboradores.length > 0 ? (
      <section className="time" style={{ backgroundColor: hexToRgba(cor, "0.55") }}>
        <h3 style={{ borderColor: cor }}>{nome}</h3>
        <input value={cor} onChange={(e) => mudarCorTime(nome, e.target.value)} type="color" className="input-color" />
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
            />
          ))}
        </div>
      </section>
    ) : ""
  );
};

export default Time;

import Banner from "../../components/Banner";
import Rodape from "../../components/Rodape";
import Formulario from "../../components/Formulario";
import Time from "../../components/Time";
import { useContext } from "react";
import { TimeContext } from "../../context/TimeContext";
import { ColaboradorContext } from "../../context/ColaboradorContext";

const Organo = () => {
  const {colaboradores, setColaboradores} = useContext(ColaboradorContext)
  const {times, setTimes} = useContext(TimeContext)

  const cadastraNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const cadastraNovoTime = (time) => {
    setTimes([...times, time]);
  };

  return (
    <>
      <Banner />
      <Formulario
        aoCadastrarColaborador={cadastraNovoColaborador}
        aoCadastrarTime={cadastraNovoTime}
        times={times.map((time) => time.nome)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </>
  );
};

export default Organo;

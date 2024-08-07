import Banner from "../../components/Banner";
import Rodape from "../../components/Rodape";
import Formulario from "../../components/Formulario";
import Time from "../../components/Time";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Organo = () => {
  const REACT_APP_API_URL = "http://localhost:8080/colaboradores";

  const [times, setTime] = useState([
    { id: uuidv4(), nome: "Programação", cor: "#57C278" },
    { id: uuidv4(), nome: "Front-End", cor: "#82CFFA" },
    { id: uuidv4(), nome: "Data Science", cor: "#A6D157" },
    { id: uuidv4(), nome: "Devops", cor: "#E06B69" },
    { id: uuidv4(), nome: "UX e Design", cor: "#DB6EBF" },
    { id: uuidv4(), nome: "Mobile", cor: "#FFBA05" },
    { id: uuidv4(), nome: "Inovação e Gestão", cor: "#FF8A29" },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    fetch(REACT_APP_API_URL)
      .then((response) => response.json())
      .then((dados) => setColaboradores(dados));
  }, []);

  const cadastraNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const cadastraNovoTime = (time) => {
    setTime([...times, time]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const favoritarColaborador = (id) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
      })
    );
  };

  const mudarCorTime = (nome, cor) => {
    setTime(
      times.map((time) => {
        if (time.nome === nome) {
          time.cor = cor;
        }
        return time;
      })
    );
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
          aoDeletar={deletarColaborador}
          aoMudarCor={mudarCorTime}
          aoFavoritar={favoritarColaborador}
        />
      ))}
      <Rodape />
    </>
  );
};

export default Organo;

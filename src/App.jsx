import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
  const [times, setTime] = useState([
    {
      nome: "Programação",
      cor: "#57C278",
    },
    {
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const cadastraNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = () => {
    console.log("deletando colaborador");
  };

  const mudarCorTime = (nome, cor) => {
    setTime(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoCadastrarColaborador={(colaborador) => cadastraNovoColaborador(colaborador)}
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
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;

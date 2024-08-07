import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const TimeContext = createContext()

export const TimeProvider = ({ children }) => {
    const [times, setTimes] = useState([
        { id: uuidv4(),
          nome: "Programação",
          cor: "#57C278",
        },
        { id: uuidv4(),
          nome: "Front-End",
          cor: "#82CFFA",
        },
        { id: uuidv4(),
          nome: "Data Science",
          cor: "#A6D157",
        },
        { id: uuidv4(),
          nome: "Devops",
          cor: "#E06B69",
        },
        { id: uuidv4(),
          nome: "UX e Design",
          cor: "#DB6EBF",
        },
        { id: uuidv4(),
          nome: "Mobile",
          cor: "#FFBA05",
        },
        { id: uuidv4(),
          nome: "Inovação e Gestão",
          cor: "#FF8A29",
        },
      ]);

    function mudarCorTime (nome, cor) {
      setTimes(
        times.map((time) => {
          if (time.nome === nome) {
            time.cor = cor;
          }
          return time;
        })
      );
    };

    return (
        <TimeContext.Provider value={{times, setTimes, mudarCorTime}}>
            {children}
        </TimeContext.Provider>
    )
}

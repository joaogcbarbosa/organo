import { createContext, useState, useEffect } from "react";

export const ColaboradorContext = createContext()

export const ColaboradorProvider = ({ children }) => {
    const REACT_APP_API_URL = "http://localhost:8080/colaboradores";
  
    const [colaboradores, setColaboradores] = useState([]);
  
    useEffect(() => {
      fetch(REACT_APP_API_URL)
        .then((response) => response.json())
        .then((dados) => setColaboradores(dados));
    }, []);

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

    return (
        <ColaboradorContext.Provider value={{colaboradores, setColaboradores, deletarColaborador, favoritarColaborador}}>
            {children}
        </ColaboradorContext.Provider>
    )
}

import { useContext } from "react";
import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { ColaboradorContext } from "../../context/ColaboradorContext";

const Colaborador = ( {id, nome, cargo, imagem, favorito, corPrimaria} ) => {

  const { favoritarColaborador, deletarColaborador } = useContext(ColaboradorContext)
  
  const favoritar = () => {
    favoritarColaborador(id)
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle className="deletar" onClick={() => deletarColaborador(id)} size={25}/>
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        {favorito 
        ? <MdOutlineStar size={25} color="#FFD700" onClick={favoritar}/>
        : <MdOutlineStarBorder size={25} onClick={favoritar}/>
        }
      </div>
    </div>
  );
};

export default Colaborador;
import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

const Colaborador = ( {id, nome, cargo, imagem, favorito, corPrimaria, aoDeletar, aoFavoritar} ) => {
  
  const favoritar = () => {
    aoFavoritar(id)
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle className="deletar" onClick={() => aoDeletar(id)} size={25}/>
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
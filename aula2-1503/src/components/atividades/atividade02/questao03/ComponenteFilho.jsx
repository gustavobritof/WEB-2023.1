import ComponenteNeto from "./ComponenteNeto";
import { useContext } from "react";
import PokemonContexto from "./MeuContexto";

const ComponenteFilho = ()=>{
    const numero = useContext(PokemonContexto);
    return(
        <> 
            <h1>Componente Filho</h1>
            <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`} 
            alt={"pokemon numero "+numero} 
            style={{width:"200px"}}/>
            <ComponenteNeto/>
        </>
    )
}
export default ComponenteFilho;
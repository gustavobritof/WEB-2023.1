import { useContext } from "react";
import PokemonContexto from "./MeuContexto";
const ComponenteNeto = ()=>{
    const numero =useContext(PokemonContexto);
    return(
        <>
            <h1>Componente Neto</h1>
            <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png`} 
            alt={"pokemon numero "+numero} 
            style={{width:"200px"}}/>
        </>
    )
}
export default ComponenteNeto;
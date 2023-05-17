import ComponenteFilho from "./ComponenteFilho";
import PokemonContexto from "./MeuContexto"

const ComponenteAvo = ()=>{
    const numero = 1;
    return(
        <PokemonContexto.Provider value={numero}>
        <>
            <h1>Componente avô</h1>
            <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} 
            alt={"pokemon numero "+numero} 
            style={{width:"200px"}}/>
            <ComponenteFilho/>
        </>
        </PokemonContexto.Provider>
    )
}
export default ComponenteAvo;
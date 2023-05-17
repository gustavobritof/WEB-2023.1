import { useState } from "react";
import ComponenteFilho from "./ComponenteFilho";
import PokemonContexto from "./MeuContexto"

const ComponenteAvo = ()=>{
    //let numero = 1;
    const [numero, setNumero] = useState(1)

    const acaoBotao =()=>{
        //alert("Clicou novamente");
        //numero++;
        //console.log(numero);
        setNumero(numero+1)
    }

    return(
        <PokemonContexto.Provider value={numero}>
        <>
            <h1>Componente avô</h1>
            <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} 
            alt={"pokemon numero "+numero} 
            style={{width:"200px"}}/>

            {/*Se for muito simples, coloca logo no botão */}
            {/* <button
                onClick={
                    ()=>{
                        alert("Clicado!");
                    }
                }
            >
                Aumentar número
            </button> */}

            <button
                onClick={acaoBotao}
            >
                Aumentar número
            </button>

            <ComponenteFilho/>
        </>
        </PokemonContexto.Provider>
    )
}
export default ComponenteAvo;
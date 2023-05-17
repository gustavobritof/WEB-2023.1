import { useEffect, useState } from "react"

const Questao02 = () => {
    
    const [fotoPokemon, setFotoPokemon] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png")
    const [flag, setFlag] = useState(true)

    useEffect(
        ()=>{
            if(flag){
                setFotoPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png")
            }else{
                setFotoPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png")
            }
        },
        [flag]
    )

    return (
        <>
            <img src={fotoPokemon} style={{width:"400px"}}/>

            <button
            onClick={() => setFlag(!flag)}>
                Virar Pokémon
            </button>
        </>
    )
}

export default Questao02
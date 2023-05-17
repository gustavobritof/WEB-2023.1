import axios from 'axios';
import { useEffect, useState } from 'react';

const PokemonAxios = () => {
    const [id,SetId] = useState(1)
    const [nome,SetNome] = useState("")
    const [imagem,SetImagem] = useState("")
    const [imagem2,SetImagem2] = useState("")

    useEffect(
        ()=>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response)=>{
                    //console.log(response.data)
                    SetNome(response.data.name)
                    SetImagem(response.data.sprites.front_default)
                    SetImagem2(response.data.sprites.back_default)
                }
            )
            .catch(
                (error)=>console.log(error)
            )
        },
        [id]
    )

    return(
        <>
            <h1>Pokemon Axios</h1>
            <h3>Nome: {nome}</h3>
            <h3>ID: {id}</h3>
            
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={imagem2} style={{width:"400px"}}/>
                        </td>
                        <td>
                            <img src={imagem} style={{width:"400px"}}/> 
                        </td>
                    </tr>
                </tbody>
            </table>
            
           
            
            


            <button
                onClick={()=>{
                    SetId((prev)=>prev-1)
                }}
            >
                Pokémon anterior
            </button>
            <button
                onClick={()=>{
                    SetId((prev)=>prev+1)
                }}
            >
                Próximo Pokémon
            </button>
        </>
    )
}

export default PokemonAxios;

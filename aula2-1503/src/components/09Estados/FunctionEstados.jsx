import { useState,useEffect } from "react"

const FunctionEstados =() =>{
    const [contador,setContador] = useState(0)
    const [ehPar, setEhPar] = useState(true)

    useEffect(
        ()=>{
            
            if(contador%2===0)setEhPar(true)
            else setEhPar(false)
        },
        [contador]
    )


    return(
        
        <>
            <h1>Contador : {contador}</h1>
            <h1>É par: {(ehPar)?"Sim":"Não"}</h1>
            <button 
            onClick={()=>{
                setContador(contador+1)
            }
        }
            >
                Contador+1
            </button>
        </>
    )

}

export default FunctionEstados;
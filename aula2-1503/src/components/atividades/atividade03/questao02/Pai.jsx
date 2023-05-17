import { useState } from "react"
import FilhoA from "./FilhoA"
import FilhoB from "./FilhoB"
import FilhoC from "./FilhoC"

const Pai =() =>{
    const vetor = [1,2,3,4,5]

    const [maior,SetMaior] = useState(0)
    const [menor,SetMenor] = useState(0)
    const [media,SetMedia] = useState(0)
   
    const enviarMaior = (maior) =>{
        SetMaior(maior)
    }
    const enviarMenor = (menor) =>{
        SetMenor(menor)
    }
    const enviarMedia = (media) =>{
        SetMedia(media)
    }

    return(
        <>
            <h1>Cálculo Vetor</h1>
            <h1>Maior: {maior}</h1>
            <h1>Menor :{menor}</h1>
            <h1>Média :{media}</h1>
            <br/>
            <FilhoA vetor={vetor} enviarMaior={enviarMaior}/>
            <FilhoB vetor={vetor} enviarMenor={enviarMenor}/>
            <FilhoC vetor={vetor} enviarMedia={enviarMedia}/>
        </>
    )


    
}

export default Pai;
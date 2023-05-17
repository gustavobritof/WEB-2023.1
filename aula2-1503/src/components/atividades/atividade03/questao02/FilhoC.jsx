const FilhoC = ({vetor, enviarMedia})=>{

    const CalcularMedia =()=>{
        let soma = 0
        for(let i = 0; i < vetor.length; i++){
            soma += vetor[i]
        }
        let media = soma/vetor.length
        enviarMedia(media)
    }

    return(                
    <>


        <button
        onClick={()=>CalcularMedia()}
        >Calcular média</button>
    </>
    )
    }
    export default FilhoC;
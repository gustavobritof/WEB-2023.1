const FilhoB = ({vetor, enviarMenor})=>{
    const CalcularMenorElemento =()=>{
        const menor = Math.min(...vetor)
        enviarMenor(menor)
    }


    return(
        <>


            <button
            onClick={()=>CalcularMenorElemento()}
            >Menor elemento</button>
        </>
    )
    }
    export default FilhoB;
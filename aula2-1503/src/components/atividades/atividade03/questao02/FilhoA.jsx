const FilhoA = ({vetor, enviarMaior})=>{

    const CalcularMaiorElemento =()=>{
        const maior = Math.max(...vetor)
        enviarMaior(maior)
    }

    return(
        <>


        <button
        onClick={CalcularMaiorElemento}
        >Maior elemento</button>
        </>
    )
}
export default FilhoA;
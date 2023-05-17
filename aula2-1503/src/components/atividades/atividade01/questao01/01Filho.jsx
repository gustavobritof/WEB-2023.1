const Filho =({peso, altura})=>{

    const calculaIMC = (peso, altura)=> peso/(altura*altura);
    

    const renderizarIMC = (imc) =>{
        if(imc<18) return <h3>Abaixo do peso</h3>
        else if(imc>25) return <h3>Acima do peso</h3>
        else return <h3>Peso ideal</h3>
            
    }

    let imc = calculaIMC(peso, altura)

    return(

        <>
            <h1> O imc é: {imc.toFixed(2)}</h1>
            {renderizarIMC(imc)}
        </>
    )

}

export default Filho;
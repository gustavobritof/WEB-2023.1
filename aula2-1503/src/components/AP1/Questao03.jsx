import { useState } from "react"

const Questao03 = () => {

    const [menorPopulacao, setMenorPopulacao] = useState([])
    const [maiorPopulacao, setMaiorPopulacao] = useState([])

    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        .then((response) => response.json())
        .then(
            (data)=>{
                let menor = data[0]
                let maior = data[0]

                


            }
        )
}

export default Questao03

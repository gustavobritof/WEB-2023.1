import { useState } from "react"

const Questao03 = () => {

    const [menorPopulacao, setMenorPopulacao] = useState([])
    const [maiorPopulacao, setMaiorPopulacao] = useState([])

    //fetch retorna uma promisse
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        .then((response) => response.json())
        //como é uma promisse, podemos usar outro then para pegar os dados(data)
        .then(
            (data)=>{
                let menor = data[0]
                let maior = data[0]

                //um foreach para percorrer o array de cidades e pegar a mais populosa, assim como a menos populosa
                data.forEach(cidade => {
                    if(cidade.population<menor.population){
                        menor = cidade
                    }else 
                    if(cidade.population>maior.population){
                        maior=cidade
                    }
                });

                setMaiorPopulacao(maior)
                setMenorPopulacao(menor)


            }
        )
        .catch(error => console.log(error))

        return(
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>População</th>
                    </tr>
                    <tr>
                        <td>Maior populaçao</td>
                        <td>{maiorPopulacao.capital}</td>
                        <td>{maiorPopulacao.population}</td>
                    </tr>
                    <tr>
                        <td>Menor populaçao</td>
                        <td>{menorPopulacao.capital}</td>
                        <td>{menorPopulacao.population}</td>
                    </tr>
                </tbody>
            </table>
        )

    }

export default Questao03

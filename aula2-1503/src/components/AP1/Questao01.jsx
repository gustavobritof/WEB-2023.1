import { useEffect, useState } from "react"


function Questao01X() {
    const [AlunosReprovados, SetAlunosReprovados] = useState([])

    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
    ]

    const recebeMedias = (medias) => {
        //Filtra o array de médias e retorna apenas as menores ou iguais a 5
        const alunosReprovados = medias.filter((media) => media <= 5);
        SetAlunosReprovados(alunosReprovados);
    };

    return (
        <>
            <Questao01Y alunos={alunos} recebeMedias={recebeMedias} />
            <h1>Alunos com média menor ou igual a 5:</h1>
            
            {AlunosReprovados.map((aluno) => (
                <p>
                    {aluno.nome}, {aluno.medias}
                </p>
            ))}


        </>
    )
}

const Questao01Y = ({ alunos, recebeMedias }) => {


    useEffect(
        () => {

            const calculaMedia = () => {
                let medias = []
                //Para cada aluno, calcula a média e adiciona no array medias
                alunos.forEach((aluno) => {
                    //usa-se o spread operator para copiar o array medias e adicionar a nova média
                    medias = [...medias, (aluno.notas.ap1 + aluno.notas.ap2) / 2]
                })
                console.log(medias)
                return medias
            }
            //Chama a função recebeMedias passando o array de médias
            recebeMedias(calculaMedia())
        },
        //Vazio para executar apenas uma vez
        []
    )

    return (
        <>
            <h1>Questao01Y</h1>
        </>
    )
}

export default Questao01X;
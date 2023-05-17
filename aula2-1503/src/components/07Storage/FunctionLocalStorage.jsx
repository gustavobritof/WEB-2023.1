//Storage:Local para armazenar dados
//Session dura entre sessões, se fechar a aba, perde os dados
//Local sobrevive até o usuário fechar o navegador

//Contexto compartilha estado entre componentes
//Local Storage salva entre sessões
import React from 'react';

const SaveData = () => {

    const saveData = () => {
        const aluno = { nome: "Gustavo", curso: "CC" }
        localStorage.setItem("aluno01", JSON.stringify(aluno))
        sessionStorage.setItem("Disciplina", "Desenvolvimento de software pra web")
    }

    return (
        <>
            <h1>Salvando Dados...</h1>
            {saveData()}
            <LoadData/>
        </>
    )

}

const LoadData = () => {

    const loadData = () => {
        const alunoCarregado = JSON.parse(localStorage.getItem("aluno01"))
        return(
            <>
                <h3>
                    Nome :{alunoCarregado.nome}
                </h3>
                <h3>
                    Curso :{alunoCarregado.curso}
                </h3>
            </>
        )
    }

    return (
        <>
            <h1>Carregando Dados...</h1>
            {loadData()}
        </>
    )

}

export default SaveData;


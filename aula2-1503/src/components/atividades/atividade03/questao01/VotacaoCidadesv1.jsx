import { useEffect, useState } from "react";

const VotacaoCidadesv1 = () => {

   const [cidades, setCidades] = useState(
      [
         { nome: "Aracoiaba", votos: 0 },
         { nome: "Quixadá", votos: 0 },
         { nome: "Baturité", votos: 0 },
         { nome: "Fortaleza", votos: 0 }
      ]
   )

   const [flag, setFlag] = useState(false)


   const votarNaCidade = nome => {
      /* for(let i=0;i<cidades.length;i++){
         if(cidades[i].nome===nome){
            cidades[i].votos=cidades[i].votos+1
         }
      } */

      const index = cidades.findIndex(
         (cidade) => cidade.nome === nome
      )
      cidades[index].votos = cidades[index].votos + 1
      
      //console.log(cidades)
      setFlag((anterior) => !anterior)

   }

   //Para não precisar de flag, e atualizar a pagina
   const votarNaCidadev2 = (nome) => {

      //criar um novo array, com as mesmas cidades, mas com o voto atualizado(map)
      const newCidades = cidades.map(
         (cidade) => {
            //pode ser nome:cidade.nome, votos:cidade.votos
            //usamos o ...(spread), para pegar todos os atributos de cidade, que não queremos alterar
            //nao é mt bom caso tenha mtos atributos e cidades
            if (cidade.nome === nome) return { ...cidade, votos: cidade.votos + 1 }
            return { ...cidade }
         }

      )
      //Mudou o endereço de memoria, entao o react vai renderizar novamente
      setCidades(newCidades)
   }

   return (
      <>
         <h1>Votação de cidades</h1>
         <hr />
         <p>
            {cidades[0].nome}: {cidades[0].votos}
            <br />
            {cidades[1].nome}: {cidades[1].votos}
            <br />
            {cidades[2].nome}: {cidades[2].votos}
            <br />
            {cidades[3].nome}: {cidades[3].votos}
         </p>
         <br />

         {/* Nao colocar a funcao diretamente, se nao vai ser executada assim que o site carregar,
             e nao c olocar explicitamente a variavel, quando for atualizar uma variavel de estado*/}
         <button onClick={() => votarNaCidadev2("Aracoiaba")}>
            Aracoiaba
         </button>
         <button onClick={() => votarNaCidadev2("Quixadá")}>
            Quixadá
         </button  >
         <button onClick={() => votarNaCidadev2("Baturité")}>
            Baturité
         </button>
         <button onClick={() => votarNaCidadev2("Fortaleza")}>
            Fortaleza
         </button>
         <hr />


      </>
   )

}

export default VotacaoCidadesv1;
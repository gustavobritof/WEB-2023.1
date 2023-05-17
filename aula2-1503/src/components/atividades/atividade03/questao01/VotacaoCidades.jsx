import { useEffect, useState } from "react";

const VotacaoCidades = ()=>{
    const [vAracoiaba, setVAracoiaba] = useState(0)
    const [vQuixada, setVQuixada] = useState(0)
    const [vBaturite, setVBaturite] = useState(0)
    const [vFortaleza, setVFortaleza] = useState(0)

    const [mais,SetMais] = useState("")
    const [menos,SetMenos] = useState("")

    useEffect(
        () =>{
            
            let cidades = [vAracoiaba, vQuixada , vBaturite,vFortaleza]
            let nomes =["Aracoiaba", "Quixadá","Baturité","Fortaleza"]
            let maior = cidades[0]
            let menor = cidades[0]

            for(let i=0;i<cidades.length;i++){
                if (cidades[i]>maior) maior = cidades[i]
                if (cidades[i]<menor) menor = cidades[i]
            }
            //console.log(maior+" "+menor)
            SetMais("")
            SetMenos("")
            for(let i =0;i<cidades.length;i++){
                if(cidades[i]===maior) SetMais((anterior)=>anterior+" "+nomes[i])
                if(cidades[i]===menor) SetMenos((anterior)=>anterior+" "+nomes[i])
            }

        },
        [vAracoiaba,vQuixada,vBaturite,vFortaleza]
        
    )
    
    return(
        <>
            <h1>Votação de cidades</h1>
            <hr />
            <p>
            Aracoiaba:{vAracoiaba}
            <br />
            Quixadá: {vQuixada}
            <br />
            Baturité: {vBaturite}
            <br />
            Fortaleza: {vFortaleza}
            </p>
            <br />

            {/* Nao colocar a funcao diretamente, se nao vai ser executada assim que o site carregar,
             e nao colocar explicitamente a variavel, quando for atualizar uma variavel de estado*/}
             <button onClick={()=>setVAracoiaba((anterior)=>anterior+1)}>
                Aracoiaba
             </button>
             <button onClick={()=>setVQuixada((anterior)=>anterior+1)}>
                Quixadá
             </button>
             <button onClick={()=>setVBaturite((anterior)=>anterior+1)}>
                Baturité
             </button>
             <button onClick={()=>setVFortaleza((anterior)=>anterior+1)}>
                Fortaleza
             </button>
            <hr />
            <p>
            Cidade(s) mais votada(s): {mais}
            <br />
            Cidade(s) menos votada(s): {menos}
            </p>
            
        </>
    )

}

export default VotacaoCidades;
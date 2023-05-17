import { useEffect } from "react"


const minhaPromessa =new Promise(
    (resolve,reject)=>{
        const x=true

        x?resolve({msg:"Deu certo"}):reject({msg:"Deu errado"})

    }
)

const MeuAsync =()=>{

    useEffect(

        ()=>{
                getPromessaAsync()
        },
        []

    )
     
        function getPromessaThen(){
            minhaPromessa
            .then(
                (data) =>{console.log(data.msg)}
            )
            .catch(
                (data) =>{console.log(data.msg)}
            ) 
        }

        async function getPromessaAsync (){
            try{
            const data = await minhaPromessa
            console.log(data.msg)
            }catch(erro){
                console.log(erro.msg)
            }
        }

    return(
        <>
            <h1>Testando o async</h1>
        </>
    )

}

export default MeuAsync
import { useEffect } from "react"

const minhaPromise = new Promise(
    (resolve,reject)=>{
        //Alguma lógica que tá produzindo algo e que demora algum tempo
        console.log("iniciando")
        setTimeout(
            ()=>{
                console.log("logica terminada")
                const meuInt = Math.floor(Math.random()*10)+1
                console.log(meuInt)
                if(meuInt%2===0) resolve({numero:meuInt,msg:"Deu bom"})
                else reject({numero:meuInt,msg:"Deu ruim"})
            },
            3000
        )
    }
)

const meuGet =(url)=>{
    //fiz algo com a url(passei pra promessa por exemplo)
    console.log(url)
    return minhaPromise
}

const MinhaPromise =()=>{

    useEffect(
        ()=>{
            /* meuGet("http://fake")
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error)) */
            meuGet("http:...")
            .then(
                (response)=>{
                    console.log(response.numero)
                    console.log(response.msg)
                }
            )
            .catch(
                (error)=>{
                    console.log(error.numero)
                    console.log(error.msg)
                }
            )
        }
    )

    return(
        <>
            <h1>Testando a promise</h1>
        </>
    )
}

export default MinhaPromise
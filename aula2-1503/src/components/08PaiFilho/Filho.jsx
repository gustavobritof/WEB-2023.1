import React from "react";

const Filho =({falarComPai})=>{
    

    return(
        <>
            <h1>Filho</h1>
            <button
                onClick={()=>{falarComPai(" oi pai")}}
            >
                Enviar Mensagem para o Pai
            </button>
        </>
    )
}

export default Filho;
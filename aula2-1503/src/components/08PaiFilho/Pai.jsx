import React from "react";
import Filho from "./Filho";

const Pai =()=>{

    const mensagemFilho=(msg)=>{
        alert("Mensagem do filho:"+msg)
    }

    return(
        <>
            <h1>Pai</h1>
            <Filho falarComPai={mensagemFilho}/>
        </>
    )
}

export default Pai;
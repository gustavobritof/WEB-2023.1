import FuncaoB from "./FuncaoB";
import FuncaoC from "./FuncaoC";

import CorContexto from "./MeuContexto";

const FuncaoA =()=>{

    const cor = "green"

    return(
        <CorContexto.Provider value={{cor:cor,cor2:"purple", nome:"Gustavo"}}>
        <>
            <h1 style={{backgroundColor:cor}}>Função A</h1> 
            <FuncaoB />
            <FuncaoC />
        </>
        </CorContexto.Provider>
    )
}

export default FuncaoA;
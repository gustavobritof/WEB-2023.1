import FuncaoB from "./FuncaoB";
import FuncaoC from "./FuncaoC";

import CorContexto from "./MeuContexto";

const FuncaoA =()=>{

    const cores = {bkgA: "green", bkgB: "red", bkgC: "yellow", bkgD: "blue"};

    return(
        
        <>
        <CorContexto.Provider  value={{cores}}>
            <h1 style={{backgroundColor:cores.bkgA}}>Função A</h1> 
            <FuncaoB />
            <FuncaoC />
            </CorContexto.Provider>
        </>
        
    )
}

export default FuncaoA;
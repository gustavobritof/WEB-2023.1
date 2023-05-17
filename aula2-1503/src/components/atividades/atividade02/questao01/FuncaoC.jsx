import FuncaoD from "./FuncaoD";
import { useContext } from "react";
import CorContexto from "./MeuContexto";

const FuncaoC =()=>{
    const {cores} = useContext(CorContexto);
    const {bkgC} = cores;
    console.log(bkgC); // Verifique o valor impresso no console

    return(
        <>
            <h1 style={{backgroundColor:bkgC}}>Função C</h1> 
            <FuncaoD />
        </>
    ) 
}

export default FuncaoC;
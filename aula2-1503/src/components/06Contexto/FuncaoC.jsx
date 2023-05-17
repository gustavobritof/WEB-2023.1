import FuncaoD from "./FuncaoD";
import { useContext } from "react";
import CorContexto from "./MeuContexto";

const FuncaoC =()=>{
    // versao mais nova
    const {cor, cor2, nome} = useContext(CorContexto)

    return(
        <>
            <h1 style={{backgroundColor:cor}}>Função C de {nome}</h1> 
            <FuncaoD />
        </>
    ) 
}

export default FuncaoC;
import { useContext } from "react";
import CorContexto from "./MeuContexto";

const FuncaoD =()=>{
    const cor = useContext(CorContexto)
    return(
        <CorContexto.Consumer>
        {
            ({cor2, nome})=>{
                return(
                    <>
                        <h1 style={{backgroundColor:cor2}}>Função D</h1> 
                    </>
                )
            }
        }
        </CorContexto.Consumer>
    )
}

export default FuncaoD;
import CorContexto from "./MeuContexto";

const FuncaoD =()=>{
    return(
        //versão legada
        <CorContexto.Consumer>
        {
            ({cores:{bkgD}})=>{
                return(
                    <>
                        <h1 style={{backgroundColor:bkgD}}>Função D</h1> 
                    </>
                )
            }
        }
        </CorContexto.Consumer>
    )
}

export default FuncaoD;
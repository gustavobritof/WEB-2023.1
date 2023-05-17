import CorContexto from "./MeuContexto";

const FuncaoB =( )=>{
    return(
        //versao legado
        <CorContexto.Consumer>
        {
            ({cor, nome})=>{
                return(
                    <>
                        <h1 style={{backgroundColor:cor}}>Função B de {nome}</h1> 
                    </>
                )
            }
        }
        </CorContexto.Consumer>
    )
}

export default FuncaoB;
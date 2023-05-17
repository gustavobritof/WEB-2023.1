import CorContexto from "./MeuContexto";
//versao legado
const FuncaoB =( )=>{
    return(

        <CorContexto.Consumer>
        {
            ( {cores:{bkgB}} )=>
                    <>
                        <h1 style={{ backgroundColor:bkgB }}>Função B </h1> 
                    </>               
        }
        
        </CorContexto.Consumer>
    )
}

export default FuncaoB;
import React from "react";

/* //Function
function MeusDados (){
    return(
        <>
            <h1>João Gustavo Feitosa Brito</h1>
            <h1>Ciência da Computação</h1>
            <h1>Universidade Federal do Ceará</h1>
        </>
    )
} */

/*
//Arrow function com return
const MeusDados = () =>{
    return(
        <>
            <h1>João Gustavo Feitosa Brito</h1>
            <h1>Ciência da Computação</h1>
            <h1>Universidade Federal do Ceará</h1>
        </>
    );
} */


/* 
//Arrow Function sem return
const MeusDados = () =>
<>
<h1>João Gustavo Feitosa Brito</h1>
<h1>Ciência da Computação</h1>
<h1>Universidade Federal do Ceará</h1>
</>
 */

//Classes
class MeusDados extends React.Component {
    render() {
        return (
            <>
                <h1 style={{color:"red"}}>João Gustavo Feitosa Brito</h1>
                <h1>Ciência da Computação</h1>
                <h1>Universidade Federal do Ceará</h1>
            </>

        )
    }

}

export default MeusDados;
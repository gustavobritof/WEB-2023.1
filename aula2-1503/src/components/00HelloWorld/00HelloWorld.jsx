import React from "react";

/* 
function HelloWorld() {
    return <h2>olá mundo</h2>
}
 */

//v1
/* const HelloWorld = () =>{
    let x=2;
    let y=1;
    let res = x+y;
    return(
        <h2>Olá mundo com arrow function {res+10}</h2>
    );
} */

//v2
class HelloWorld extends React.Component{
    render(){
        return(
            <h2>Olá mundo com classes</h2>
        )
    }
}

export default HelloWorld;
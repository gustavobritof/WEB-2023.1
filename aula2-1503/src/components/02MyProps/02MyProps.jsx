/*//v1
 const MyProps = (props) =>{
    return(
        <>
            <h2>Meu nome é: {props.nome}</h2>
            <h2>Meu curso é: {props.curso}</h2>
        </>
    )
} */

/* //v2
const MyProps = (props) =>{
    let nome = props.nome
    let curso = props.curso
    return(
        <>
            <h2>Meu nome é: {nome}</h2>
            <h2>Meu curso é: {curso}</h2>
        </>
    )
} */

/* //v3
const MyProps = (props) =>{
    let {nome, curso} = props
    return(
        <>
            <h2>Meu nome é: {nome}</h2>
            <h2>Meu curso é: {curso}</h2>
        </>
    )
} */

//v4
const MyProps = ({nome, curso}) =>{
    return(
        <>
            <h2>Meu nome é: {nome}</h2>
            <h2>Meu curso é: {curso}</h2>
        </>
    )
}

export default MyProps;
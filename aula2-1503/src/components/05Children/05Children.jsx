import { Children, cloneElement } from "react"

/* const Supermercado = ({children,nome}) =>{
    return(
        <>
            <h1>Supermercado {nome}</h1>
            {children}
        </>
    )
} */

//v1
/* const Supermercado = ({ children, nome }) => {
    return (
        <>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    (filho) => {
                        return (
                            <div style={{backgroundColor:"red"}}>
                                {filho}
                            </div>
                        )
                    }

                )
            }
        </>
    )
} */

//v2
const Supermercado = ({ children, nome }) => {
    return (
        <>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    (filho) => {
                        return cloneElement(filho,{supermercado:nome})
                    }

                )
            }
        </>
    )
}

const Legume = ({ nome,supermercado }) => {
    return (
        <>
            <h3>Legume {nome} do Supermercado {supermercado}</h3>
        </>
    )
}

const Bebida = ({ nome,supermercado }) => {
    return (
        <>
            <h3>Bebida {nome} do Supermercado {supermercado}</h3>
        </>
    )
}

export { Supermercado, Legume, Bebida }
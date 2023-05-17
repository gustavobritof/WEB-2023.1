
import { Children, cloneElement } from 'react'

const Hero = ({nome,arena})=> {

    return(
        <>
            <h1>{nome} é o herói da arena {arena}</h1>
            <img src={require('./assets/sanji.png')} alt="Herói" style={{width:"240px"}}/>
        </>
    )

}

const Enemy = ({nome, arena})=> {

    return(
        <>
            <h1>{nome} é o inimigo da arena {arena}</h1>
            <img src={require('./assets/zoro.jpg')} alt="Inimigo" style={{width:"240px"}}/>
        </>
    )

}

const Arena = ({nome}) =>{
    return(
        <>
            <h1>Batalha na arena {nome}</h1>
            <Hero nome="Osoba-Mask"/>
            <Enemy nome="Marimo"/>
        </>
    )
}

const Arena2 = ({nome, children}) =>{
    return(
        <>
            <h1>Batalha na arena {nome}</h1>
            {
                Children.map(
                    children,
                    (child)=>{
                        return cloneElement(child,{arena:nome})
                    }
                )
            }
        </>
    )
}


const World = (props) =>{
    return(

        <>
            {props.children}
        </>

    )
}

export {Hero, Enemy,Arena, Arena2,World};
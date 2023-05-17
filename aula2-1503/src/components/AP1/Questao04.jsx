const Questaoo4 = () => {

    return (
        <>
            <p>Props Drilling é um problema que acontece quando se há a necessidade de passar dados entre componentes aninhados, 
                com o uso do props, é necessário passar esses dados entres vários níveis para se chegar ao componente que precisa desses dados.
                Com o aumento do número de níveis, o código fica mais difícil de ser lido e entendido, além de ser mais difícil de se fazer manutenção.
                Para resolver esse problema, podemos usar o Contexto, que funciona de forma similar a uma variável global, onde podemos passar dados entre componentes,
                de forma mais "clean", não seria mais necessário declarar props a cada componente aninhado, apenas um provider no componente no topo da árvore, 
                e um consumer no componente que precisa dos dados.

                exemplo:
                

            </p>

            
        </>
    )
}

export default Questaoo4
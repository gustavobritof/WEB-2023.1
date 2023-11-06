//import "./App.css"
//import PokemonAxios from "./components/10Axios/PokemonAxios";
//import Pai from "./components/08PaiFilho/Pai";
//import SaveData from "./components/07Storage/FunctionLocalStorage";
//import PokemonAxios from "./components/10Axios/PokemonAxios";
//import Pai from "./components/atividades/atividade03/questao02/Pai";
//import VotacaoCidadesv1 from "./components/atividades/atividade03/questao01/VotacaoCidadesv1";
//import VotacaoCidades from "./components/atividades/atividade03/questao01/VotacaoCidadesv1";
//import HelloWorld from "./components/00HelloWorld";
//import Calculadora from "./components/01Calculadora";
//import MyProps from "./components/02MyProps";
//import MeusDados from "./components/atividades/atividade00/02MeusDados";
//import Temperatura from "./components/atividades/atividade00/03Temperatura";
//import FunctionA from "./components/03Hierarquia/FunctionA";
//import * as Site from "./components/04Multiplo";
//import { Supermercado,Legume, Bebida } from "./components/05Children";
//import Pai from "./components/atividades/atividade01/questao01/01Pai";
//import * as PC from "./components/atividades/atividade01/02Meupc"
//import * as Batalha from "./components/atividades/atividade01/03Batalha";
//import FuncaoA from "./components/atividades/atividade02/questao01/FuncaoA"
//import ComponenteAvo from "./components/atividades/atividade02/questao03/ComponenteAvo";
//import ComponenteAvo from "./components/atividades/atividade02/questao02/ComponenteAvo";
//import FunctionEstados from "./components/09Estados/FunctionEstados";
//import MinhaPromise from "./components/12Promisses/MinhaPromise";
//import MeuAsync from "./components/12Promisses/MeuAsync";
//import Questao01X from "./components/AP1/Questao01"
//import Questao02 from "./components/AP1/Questao02";
//import Questao03 from "./components/AP1/Questao03";
import Signin from "./components/13MUI/01Signin/Signin";
//import MyMenu from "./components/13MUI/02CRUD/MyMenuv1";
import MainPage from "./components/13MUI/02CRUD/MainPage";

/* function App() {
  return (
    <div className="App" >

      <Site.Header/>
      <Site.Body/>
      <Site.Footer/>
    </div>
  );
} */

/* function App() {
  return (
    <div className="App" >
        <Supermercado nome="DuPovu">
          <Legume nome="Abóbora"/>
          <Bebida nome="Leite"/>
        </Supermercado>
    </div>
  )
} */

/* function App() {
  return (
    <div className="App" >
      {/* <Pai/>
      <hr/>

      <PC.Memoria nome="Crucial 2666Mhz" preco={350.00}/>
      <PC.PlacaDeVideo nome="GTX 1050TI" preco={1200.00}/>
      <PC.PlacaMae nome="TUF gaming" preco={699.00}/> }
      <Batalha.World>
        <Batalha.Arena nome="Castelão" />
        <Batalha.Arena nome="Presidente Vargas" />
      </Batalha.World>
      <hr />
      <Batalha.World>
        <Batalha.Arena2 nome="Castelão">
          <Batalha.Hero nome="O-soba mask" />
          <Batalha.Enemy nome="Marimo" />
        </Batalha.Arena2>
      </Batalha.World>

    </div>
  )
} */
 
  function App() {
    return (
      <div className="App" >
        
        <Signin/>

      </div>
    )
  }

export default App;

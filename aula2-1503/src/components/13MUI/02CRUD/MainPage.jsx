import { Container, List } from "@mui/material";
import MyMenu from "./MyMenuv1"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import CadastrarProfessor from "./professor/CadastrarProfessor";
import ListarProfessor from "./professor/ListarProfessor";
import EditarProfessor from "./professor/EditarProfessor";
import CadastrarAluno from "./aluno/CadastrarAluno";
import ListarAluno from "./aluno/ListarAluno";
import EditarAluno from "./aluno/EditarAluno";

const MainPage = ()=>{

    return(
        <BrowserRouter>
            <MyMenu/>
            <Container>
                <Routes>
                    <Route path="CadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="ListarProfessor" element={<ListarProfessor/>}/>
                    <Route path="EditarProfessor/:id" element={<EditarProfessor/>}/>
                    <Route path="CadastrarAluno" element={<CadastrarAluno/>}/>
                    <Route path="ListarAluno" element={<ListarAluno/>}/>
                    <Route path="EditarAluno/:id" element={<EditarAluno/>}/> 
                </Routes>
            </Container>
        </BrowserRouter>
    )

}
export default MainPage;
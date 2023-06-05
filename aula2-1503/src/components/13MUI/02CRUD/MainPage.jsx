import { Container, List } from "@mui/material";
import MyMenu from "./MyMenuv1"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import CadastrarProfessor from "./professor/CadastrarProfessor";
import ListarProfessor from "./professor/ListarProfessor";

const MainPage = ()=>{

    return(
        <BrowserRouter>
            <MyMenu/>
            <Container>

                <Routes>
                    <Route path="CadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="ListarProfessor" element={<ListarProfessor/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )

}
export default MainPage;
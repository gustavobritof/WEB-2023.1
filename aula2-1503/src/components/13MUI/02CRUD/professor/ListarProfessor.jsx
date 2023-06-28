import { Table,TableHead,TableRow,Paper,TableCell, TableBody, TableContainer, Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ListarProfessor =()=>{

/*     const professores = [
        { id: 0, nome: "João", curso: "ES", titulacao: "GRAD", ai: { cg: true, mc: false, al: false, es: false }},
        { id: 1, nome: "Maria", curso: "CC", titulacao: "MEST", ai: { cg: false, mc: true, al: false, es: false } },
        { id: 2, nome: "José", curso: "EC", titulacao: "DOUT", ai: { cg: false, mc: false, al: true, es: false } },
      ]; */

    const [professores, setProfessores] = useState([])

    const navigate = useNavigate();

    useEffect(
      ()=>{
          
          axios.get("http://localhost:3001/professores/listar")
          .then(
              (response)=>{
                  //console.log(response)
                  setProfessores(response.data)
              }
          )
          .catch(error=>console.log(error))
      }
      ,
      []
  )

  function deleteProfessorById(id) {
    if (window.confirm("Deseja realmente excluir?")) {
      axios.delete(`http://localhost:3001/professores/deletar/${id}`)
        .then(
          (res) => {
            const resultado = professores.filter(professor => professor._id != id)
            setProfessores(resultado)
            navigate("/ListarProfessor")
          }
        )
        .catch(error => console.log(error))
    }
  }


      return (
        <>
          <Typography variant="h5" fontWeight="bold" mt={2}>
            Listar Professor
          </Typography>
          <br/>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Curso</TableCell>
                  <TableCell>Titulação</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                    professores.map(
                        (professor)=>{
                            return(
                                <TableRow>
                                    <TableCell>{professor._id}</TableCell>
                                    <TableCell>{professor.nome}</TableCell>
                                    <TableCell>{professor.curso}</TableCell>
                                    <TableCell>{professor.titulacao}</TableCell>
                                    <TableCell>
                                        <Box>
                                            <IconButton aria-label="edit" color="primary" component={Link} to={`/editarProfessor/${professor._id}`}>
                                                <EditIcon/>
                                            </IconButton>
                                            <IconButton aria-label="delete" color="error" onClick={()=>deleteProfessorById(professor._id)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    )
                }
              </TableBody>
            </Table>
          </TableContainer>
        </>
      );
}


export default ListarProfessor;
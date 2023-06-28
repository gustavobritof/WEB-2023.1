import { Table, TableHead, TableRow, Paper, TableCell, TableBody, TableContainer, Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ListarAluno = () => {
const navigate = useNavigate();
  /* const alunos = [
      { id: 0, nome: "João", curso: "ES", ira: 9.5},
      { id: 1, nome: "Maria", curso: "CC", ira: 8.5},
      { id: 2, nome: "José", curso: "EC", ira: 7.5},
    ]; */

  const [alunos, setAlunos] = useState([])

  useEffect(
    () => {
      axios.get("http://localhost:3001/alunos/listar")
      .then(
        (res)=>{
          //console.log(res)
          setAlunos (res.data)
        }
      )
      .catch(error=>console.log(error))
    },
    []
  )

    
  function deleteAluno(id) {
    if (window.confirm("Deseja realmente excluir?")) {
      axios.delete(`http://localhost:3001/alunos/deletar/${id}`)
        .then(
          (res) => {
            const resultado = alunos.filter(aluno => aluno._id !== id)
            setAlunos(resultado)
            navigate("/ListarAluno")
          }
        )
        .catch(error => console.log(error))
    }
  }

  return (
    <>
      <Typography variant="h5" fontWeight="bold" mt={2}>
        Listar Alunos
      </Typography>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Curso</TableCell>
              <TableCell>IRA</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              alunos.map(
                (aluno) => {
                  return (
                    <TableRow>
                      <TableCell>{aluno._id}</TableCell>
                      <TableCell>{aluno.nome}</TableCell>
                      <TableCell>{aluno.curso}</TableCell>
                      <TableCell>{aluno.ira}</TableCell>
                      <TableCell>
                        <Box>
                          <IconButton aria-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                            <EditIcon />
                          </IconButton>
                          <IconButton aria-label="delete" color="error" onClick={() => deleteAluno(aluno._id)}>
                            <DeleteIcon />
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


export default ListarAluno;
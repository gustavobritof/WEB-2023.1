import { Table,TableHead,TableRow,Paper,TableCell, TableBody, TableContainer, Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const ListarProfessor =()=>{

    const professores = [
        { id: 0, nome: "João", curso: "ES", titulacao: "GRAD" },
        { id: 1, nome: "Maria", curso: "CC", titulacao: "MEST" },
        { id: 2, nome: "José", curso: "EC", titulacao: "DOUT" },
      ];

    function deleteProfessorById(id){
        if(window.confirm("Deseja realmente excluir?")){
            alert("Professor" + id + "excluído com sucesso!")
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
                                    <TableCell>{professor.id}</TableCell>
                                    <TableCell>{professor.nome}</TableCell>
                                    <TableCell>{professor.curso}</TableCell>
                                    <TableCell>{professor.titulacao}</TableCell>
                                    <TableCell>
                                        <Box>
                                            <IconButton aria-label="edit" color="primary" component={Link} to={`/editarProfessor/`}>
                                                <EditIcon/>
                                            </IconButton>
                                            <IconButton aria-label="delete" color="error" onClick={()=>deleteProfessorById(professor.id)}>
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
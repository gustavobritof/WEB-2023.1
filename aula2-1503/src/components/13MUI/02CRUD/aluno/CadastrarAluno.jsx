import {
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CadastrarAluno = () => {
    const [nome, SetNome] = useState(""); //textfield
    const [curso, SetCurso] = useState(""); //textfield
    const [ira, SetIra] = useState("0.0")

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const novoAluno = { nome, curso, ira }
        axios.post("http://localhost:3001/alunos/cadastrar", novoAluno)
            .then((response) => {
                alert(`Aluno ${response.data._id} cadastrado com sucesso`)
                navigate("/ListarAluno")
            }
            )
            .catch(error =>
                console.log(error))

    }

    return (
        <>
            <Typography marginTop={5} variant="h5" fontWeight="Bold">
                Cadastrar Aluno
            </Typography>

            <Box sx={{ width: "80%" }} component="form" onSubmit={handleSubmit}>
                <TextField
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"
                    id="nome"
                    name="nome"
                    onChange={(event) => SetNome(event.target.value)}
                />

                <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"
                    id="curso"
                    name="curso"
                    onChange={(event) => SetCurso(event.target.value)}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    label="IRA"
                    name="ira"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}
                    onChange={(e) => SetIra(parseFloat(e.target.value))}
                />

                <Box
                    sx={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "center",
                        mt: 2,
                    }}
                >
                    <Button variant="contained" type="submit">
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    );
};
export default CadastrarAluno;

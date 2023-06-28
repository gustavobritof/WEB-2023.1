import {
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarProfessor = () => {

    let { id } = useParams();
    const navigate = useNavigate();

    const [nome, SetNome] = useState(""); //textfield
    const [curso, SetCurso] = useState("");
    const [ira, SetIra] = useState("0.0")

    /*     const alunos = [
            { id: 0, nome: "João", curso: "ES", ira: 9.5 },
            { id: 1, nome: "Maria", curso: "CC", ira: 8.5 },
            { id: 2, nome: "José", curso: "EC", ira: 7.5 },
        ];
    
        function getAlunosById(id) {
            for (let i = 0; i < alunos.length; i++) {
                if (alunos[i].id == id) {
                    return alunos[i];
                }
    
            }
        } */

    //Como [] está vazio, o useEffect só é executado uma vez, quando o componente é montado
    useEffect(
        () => {

            /* let aluno = getAlunosById(id);
            SetNome(aluno.nome);
            SetCurso(aluno.curso);
            SetIra(aluno.ira); */

            axios.get(`http://localhost:3001/alunos/recuperar/${id}`)
                .then(response => {
                    SetNome(response.data.nome);
                    SetCurso(response.data.curso);
                    SetIra(response.data.ira);
                }
                )
                .catch(error =>
                    console.log(error))

        },
        // eslint-disable-next-line
        []
    )

    function handleSubmit(event) {
        event.preventDefault();
        /* console.log(nome);
        console.log(curso);
        console.log(ira); */
        const alunoAtualizado = { nome, curso, ira }
        axios.put(`http://localhost:3001/alunos/atualizar/${id}`, alunoAtualizado)
            .then((response) => {
                alert(`Aluno ${response.data._id} atualizado com sucesso`)
                navigate("/ListarAluno")
            }
            )
            .catch(error =>
                console.log(error))

    }

    return (
        <>
            <Typography marginTop={5} variant="h5" fontWeight="Bold">
                Editar Aluno {id}
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
                    value={nome}
                    onChange={(event) => SetNome(event.target.value)}
                />

                <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"
                    id="curso"
                    name="curso"
                    value={curso}
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
                    value={ira}
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
                        Editar
                    </Button>
                </Box>
            </Box>
        </>
    );
};
export default EditarProfessor;

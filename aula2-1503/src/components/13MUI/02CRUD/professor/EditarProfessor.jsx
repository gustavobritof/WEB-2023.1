import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditarProfessor = () => {

  let {id} = useParams();
  const navigate = useNavigate();
  const [nome, SetNome] = useState(""); //textfield
  const [curso, SetCurso] = useState("");
  const [titulacao, SetTitulacao] = useState("GRAD");
  const [ai, SetAi] = useState({ cg: false, mc: false, al: false, es: false }); //checkbox

/*   const professores = [
    { id: 0, nome: "João", curso: "ES", titulacao: "GRAD", ai: { cg: true, mc: false, al: false, es: false }},
    { id: 1, nome: "Maria", curso: "CC", titulacao: "MEST", ai: { cg: false, mc: true, al: false, es: false } },
    { id: 2, nome: "José", curso: "EC", titulacao: "DOUT", ai: { cg: false, mc: false, al: true, es: false } },
  ]; */

/* function getProfessorById(id){
  for(let i = 0; i < professores.length; i++){
    if(professores[i].id == id){
      return professores[i];
    }

  }
} */

//Como [] está vazio, o useEffect só é executado uma vez, quando o componente é montado
    //Como [] está vazio, o useEffect só é executado uma vez, quando o componente é montado
    useEffect(
      () => {

          axios.get(`http://localhost:3001/professores/recuperar/${id}`)
              .then(response => {
                  SetNome(response.data.nome);
                  SetCurso(response.data.curso);
                  SetTitulacao(response.data.titulacao);
                  SetAi(response.data.ai);
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
    const professorAtualizado = { nome, curso, titulacao, ai }
    axios.put(`http://localhost:3001/professores/atualizar/${id}`, professorAtualizado)
        .then((response) => {
            alert(`Professor ${response.data._id} atualizado com sucesso`)
            navigate("/ListarProfessor")
        }
        )
        .catch(error =>
            console.log(error))

}

  function handleCheckbox(event){
    SetAi({
      ...ai,
      [event.target.name]:event.target.checked

    })
  }

  return (
    <>
      <Typography marginTop={5} variant="h5" fontWeight="Bold">
        Editar Professor {id}
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

        {/* Titulação */}
        <FormControl sx={{ marginTop: 2, width: "100%" }} required>
          <InputLabel id="select-tit-label">Titulação</InputLabel>

          <Select
            labelId="select-tit-label"
            label="Titulação"
            value={titulacao}
            onChange={(event)=>SetTitulacao(event.target.value)}
          >
            <MenuItem value="GRAD">Graduação</MenuItem>
            <MenuItem value="MEST">Mestrado</MenuItem>
            <MenuItem value="DOUT">Doutorado</MenuItem>
          </Select>
        </FormControl>

        {/* Areas de interesse */}
        <FormControl sx={{mt:2,ml:2}} component="fieldset" variant="standard">
          <FormLabel component="legend" sx={{fontSize:12,mb:2}}>Áreas de interesse</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={ai.cg} name="cg" onChange={handleCheckbox} />} label="Computação Gráfica"/>
            <FormControlLabel control={<Checkbox checked={ai.mc} name="mc" onChange={handleCheckbox} />} label="Matemática computacional"/>
            <FormControlLabel control={<Checkbox checked={ai.al} name="al" onChange={handleCheckbox}/>} label="Algoritmos"/>
            <FormControlLabel control={<Checkbox checked={ai.es} name="es" onChange={handleCheckbox}/>} label="Engenharia de software"/>
          </FormGroup>

        </FormControl>

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

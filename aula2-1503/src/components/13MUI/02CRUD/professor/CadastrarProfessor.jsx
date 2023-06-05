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
import { useState } from "react";

const CadastrarProfessor = () => {
  const [nome, SetNome] = useState(""); //textfield
  const [curso, SetCurso] = useState("");
  const [titulacao, SetTitulacao] = useState("GRAD");
  const [ai, SetAi] = useState({ cg: false, mc: false, al: false, es: false }); //checkbox

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
    console.log(curso);
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
        Cadastrar Professor
      </Typography>
      <Box sx={{ width: "80%" }} onSubmit={handleSubmit}>
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
          component="form"
        >
          <Button variant="contained" type="submit">
            Cadastrar
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default CadastrarProfessor;

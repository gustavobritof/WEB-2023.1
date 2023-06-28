var express = require("express");
var router = express.Router();
var AlunoService = require("../services/aluno.service");
var AlunoServiceMongo = require("../services/aluno.service.mongo");


/* router.get("/listar", (req, res, next) => {
  res.json(AlunoService.list());
}); */
router.get(
  "/listar",
  (req,res,next)=>{
      AlunoServiceMongo.list(req,res);
  }
)


/* router.post("/cadastrar", (req, res, next) => {
  const aluno = AlunoService.register(req.body);
  res.json(aluno);
}); */
router.post(
  "/cadastrar",
  (req,res,next)=>{
      AlunoServiceMongo.register(req,res);
  }
)


/* router.put("/atualizar/:id", (req, res, next) => {
  const aluno = AlunoService.update(req.params.id, req.body);
  res.json(aluno);
}); */
router.put(
  "/atualizar/:id",
  (req,res,next)=>{
      AlunoServiceMongo.update(req, res);
      
  }
)


/* router.delete("/deletar/:id", (req, res, next) => {
  const aluno = AlunoService.delete(req.params.id);
  if (aluno) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
}); */
router.delete( 
  "/deletar/:id",
  (req,res,next)=>{
      AlunoServiceMongo.delete(req,res);
  }
)


/* router.get("/recuperar/:id", (req, res, next) => {
  const aluno = AlunoService.retrieve(req.params.id);
  res.json(aluno);
}); */

router.get(
  "/recuperar/:id",
  (req,res,next)=>{
      AlunoServiceMongo.retrieve(req,res);
  }
)

module.exports = router;

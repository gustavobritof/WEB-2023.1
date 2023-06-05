const ProfessorService = require('../models/services/professor.service');
var express = require('express');
var router = express.Router();


router.get(
    "/listar",
    (req,res,next)=>{
        res.json(ProfessorService.list());
    }
)



module.exports = router;
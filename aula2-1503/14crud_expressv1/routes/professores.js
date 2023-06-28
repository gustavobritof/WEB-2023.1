var ProfessorService = require('../services/professor.service');
var ProfessorServiceMongo = require('../services/professor.service.mongo');
var express = require('express');
var router = express.Router();


/* router.get(
    "/listar",
    (req,res,next)=>{
        res.json(ProfessorService.list());
    }
) */
router.get(
    "/listar",
    (req,res,next)=>{
        ProfessorServiceMongo.list(req,res);
    }
)

/* router.post(
    "/cadastrar",
    (req,res,next)=>{
        const professor = ProfessorService.register(req.body);
        res.json(professor);
    }
) */
router.post(
    "/cadastrar",
    (req,res,next)=>{
        ProfessorServiceMongo.register(req,res);
    }
)




/* router.put(
    "/atualizar/:id",
    (req,res,next)=>{
        const professor = ProfessorService.update(req.params.id, req.body);
        res.json(professor);
    }
) */

router.put(
    "/atualizar/:id",
    (req,res,next)=>{
        ProfessorServiceMongo.update(req, res);
        
    }
)

/* router.delete(
    "/deletar/:id",
    (req,res,next)=>{
        const professor = ProfessorService.delete(req.params.id);
        if (professor){
            return res.json({"success": true});
        }else{
            return res.json({"success": false});
        }
    }
) */

router.delete( 
    "/deletar/:id",
    (req,res,next)=>{
        ProfessorServiceMongo.delete(req,res);
    }
)

/* router.get(
    "/recuperar/:id",
    (req,res,next)=>{
        const professor = ProfessorService.retrieve(req.params.id);
        res.json(professor);
    }
) */

router.get(
    "/recuperar/:id",
    (req,res,next)=>{
        ProfessorServiceMongo.retrieve(req,res);
    }
)

module.exports = router;
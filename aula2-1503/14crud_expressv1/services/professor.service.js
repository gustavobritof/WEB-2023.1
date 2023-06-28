const ProfessorModel = require('../models/professor.models');

let id=2;

const professores = [
    { id: 0, nome: "João", curso: "ADS", titulacao: "GRAD" , ai: { cg: false, mc: true, al: false, es: false }},
    { id: 1, nome: "Maria", curso: "CC", titulacao: "MEST", ai: { cg: false, mc: false, al: true, es: false } },
    { id: 2, nome: "José", curso: "ADS", titulacao: "DOUT" , ai: { cg: false, mc: true , al: false, es: false }},
  ];

class ProfessorService{
    static list(){
        return professores;
    }

    static register(data){
        let professor = new ProfessorModel(id++, data.nome, data.curso, data.titulacao, data.ai);
        professores.push(professor);
        return professor;
    }

    static update(id, data){
        for(let professor of professores){
            if(professor.id == id){
                professor.nome = data.nome;
                professor.curso = data.curso;
                professor.titulacao = data.titulacao;
                professor.ai = data.ai;
                return professor;
            }
        }
        return null;
    }

    static delete(id){
        for(let i = 0; i < professores.length; i++){
            if(professores[i].id == id){
                professores.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static retrieve(id){
        for(let professor of professores){
            if(professor.id == id){
                return professor;
            }
        }
        return {};
    }
}


module.exports = ProfessorService;
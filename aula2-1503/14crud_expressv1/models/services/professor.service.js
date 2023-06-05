const ProfessorModel = require('../professor.models');

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
}

module.exports = ProfessorService;
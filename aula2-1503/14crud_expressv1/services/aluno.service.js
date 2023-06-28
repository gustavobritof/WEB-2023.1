const AlunoModel = require("../models/aluno.models");

let id = 2;

const alunos = [
  { id: 0, nome: "João", curso: "ADS", ira: 8.5 },
  { id: 1, nome: "Maria", curso: "CC", ira: 9.0 },
  { id: 2, nome: "José", curso: "ADS", ira: 7.5 },
];

class AlunoService {
  static list() {
    return alunos;
  }

  static register(data) {
    let aluno = new AlunoModel(id++, data.nome, data.curso, data.ira);
    alunos.push(aluno);
    return aluno;
  }

    static update(id, data) {
        for (let aluno of alunos) {
            if (aluno.id == id) {
                aluno.nome = data.nome;
                aluno.curso = data.curso;
                aluno.ira = data.ira;
                return aluno;
            }
        }
        return null;
    }

    static delete(id) {
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].id == id) {
                alunos.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static retrieve(id) {
        for (let aluno of alunos) {
            if (aluno.id == id) {
                return aluno;
            }
        }
        return {};
    }

}

module.exports = AlunoService;

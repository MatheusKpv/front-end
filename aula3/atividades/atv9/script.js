let listaAlunos = new Array();
let cont = 0;
function geraAluno(nome) {
    cont++
    const aluno = new Object();
    aluno.id = cont;
    aluno.nome = nome;
    listaAlunos.push(aluno);
}
function registraNotas(id, notas) {
    let aluno = listaAlunos.find(aluno => aluno.id == id);
    aluno.notas = notas;
}
function calculaMedia(id) {
    let aluno = listaAlunos.find(aluno => aluno.id == id);
    let soma = 0;
    aluno.notas.forEach(nota => soma += nota);
    return (soma/aluno.notas.length).toFixed(2);
}
function verificaAprovado(id) {
    const media = calculaMedia(id);
    if (media >=7) {
        return 'aprovado';
    }
    return 'reprovado';
}
function listaAprovados(listaAlunos) {
    let listaAprovados = new Array();
    listaAlunos.forEach(aluno => {
        if (verificaAprovado(aluno.id) == 'aprovado') {
            listaAprovados.push(aluno);
        }
    })
    return listaAprovados;
}
const notas1 = [9, 8, 5];
const notas2 = [8, 6, 4];
const notas3 = [8, 9, 8];

geraAluno('matheus');
geraAluno('Lucas');
geraAluno('Luana');
//console.log(listaAlunos.find(aluno => aluno.id == 1));
//console.log(listaAlunos.find(aluno => aluno.id == 2));

registraNotas(1, notas1);
registraNotas(2, notas2);
registraNotas(3, notas3);
//console.log(listaAlunos.find(aluno => aluno.id == 1));
//console.log(listaAlunos.find(aluno => aluno.id == 2));

//console.log(verificaAprovado(2));
//console.log(listaAlunos);
console.log(listaAprovados(listaAlunos));
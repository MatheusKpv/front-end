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
    aluno.notas.forEach(nota => {
        soma += nota;
    });
    return (soma/aluno.notas.length).toFixed(2);
}
function verificaAprovado(id) {
    const media = calculaMedia(1);
    if (media >=7) {
        console.log('aprovado');
    } else {
        console.log('reprovado');
    }
}
let notas = [9, 8, 5];

geraAluno('matheus');
console.log(listaAlunos.find(aluno => aluno.id == 1));
registraNotas(1, notas);
console.log(listaAlunos.find(aluno => aluno.id == 1));

verificaAprovado(1)
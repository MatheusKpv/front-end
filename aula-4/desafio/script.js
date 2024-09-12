let contTotal = 0;
let contFinalizadas = 0;
function adicionaItem(event) {
    event.preventDefault();
    const item = document.getElementById('includeItem').value;
    const li = document.createElement('li');
    document.getElementById('idLista').appendChild(li);
    li.innerHTML = `<label>${item}</label><button onclick='concluiItem(this)'><i class='fa fa-check'></i></button><button onclick='deletaItem(this)'><i class='fa fa-trash'></i></button>`;
    document.getElementById('includeItem').value = '';
    document.getElementById('includeBtn').disabled = true;

    contTotal++;
    alteraContador();
}
function verificaBotao() {
    if (document.getElementById('includeItem').value.trim().length == 0) {
        document.getElementById('includeBtn').disabled = true;
    } else {
        document.getElementById('includeBtn').disabled = false;
    }
}
function deletaItem(botao) {
    botao.parentElement.remove();

    contTotal--;
    alteraContador();
}
function concluiItem(botao) {
    const label = botao.parentElement.querySelector('label');
    label.style.color = 'grey';
    label.style.textDecoration = 'line-through';
    label.classList.add('concluida')
    botao.disabled = true;

    contFinalizadas++;
    alteraContador();
}
function limpaTarefasConcluidas() {
    let tarefas = document.querySelectorAll('.concluida');
    tarefas.forEach(tarefa => {
        tarefa.parentElement.remove();
        contTotal--;
        contFinalizadas--;
    });
    alteraContador();
}

function alteraContador() {
    document.getElementById('finalizadas').innerText = contFinalizadas;
    document.getElementById('total').innerText = contTotal;
}
// let listaItens = [];
function adicionaItem(event) {
    event.preventDefault();
    console.log('teste')
    const item = document.getElementById('includeItem').value;
    const li = document.createElement('li');
    document.getElementById('idLista').appendChild(li);
    li.innerHTML = `<label>${item}</label><button></button>`;
    document.getElementById('includeItem').value = '';
}
function verificaBotao() {
    console.log(document.getElementById('includeItem').value);
    document.getElementById('includeBtn').disabled = false;
}
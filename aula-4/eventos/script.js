function alertaUsuario() {
    alert('alerta alerta');
}
function alteraCor(cor) {
    let div = document.getElementById('div1');
    div.style.backgroundColor = cor;
}
function mensagem() {
    console.log('deu boa');
}
function enviar(event) {
    alert('formulario enviado');
    event.preventDefault();

    console.log(document);
    
    const inputNome = document.getElementById('nome');
    console.log(inputNome.value);
    const inputIdade = document.getElementById('idade');
    console.log(inputIdade.value);

    const inputs = document.getElementsByTagName('input');
    console.log(inputs);
    //console.log(inputs.filter(input => input.type == 'text'))

    const labelByClass = document.getElementsByClassName('titulo');
    console.log(labelByClass);
    
    const div = document.querySelector('div');
    console.log(div);
    const divs = document.querySelectorAll('div');
    console.log(divs);
    
}
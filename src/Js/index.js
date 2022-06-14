let yesProgramator = document.getElementById('sP');
let aboutU = document.getElementById('experiencia');
let noProgamator = document.getElementById('nP');
let formulario = document.getElementById('form');

function submeter (event){
    event.preventDefault();
    alert('Obrigado! Seus dados foram enviados com sucesso.')
}
function simProgamador() {
        aboutU.innerHTML = 'sua expêriencia profissional';
        linguagem.style.display = 'block';
}
function naoProgamador() {
    aboutU.innerHTML = 'você';
    linguagem.style.display = 'none';
}

formulario.addEventListener('submit', submeter)
yesProgramator.addEventListener('click', simProgamador);
noProgamator.addEventListener('click', naoProgamador);
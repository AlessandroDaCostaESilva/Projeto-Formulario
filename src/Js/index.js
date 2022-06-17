let yesProgramator = document.getElementById('sP');
let aboutU = document.getElementById('experiencia');
let noProgamator = document.getElementById('nP');
let formulario = document.getElementById('form');
const primeiroBotao = document.getElementById('nome');
const segundoBotao = document.getElementById('email');
const terceiroBotao = document.getElementById('senha');

const submeter = () => {
    alert('Obrigado! Seus dados foram enviados com sucesso.')
}
const simProgamador = () => {
        aboutU.innerHTML = 'sua expêriencia profissional';
        document.getElementById('displayMarca').style.display = "block";
}
const naoProgamador = () => {
    aboutU.innerHTML = 'você';
    document.getElementById('displayMarca').style.display = "none";
}
const subirLabelDoNome = () => {
    let labelNome = document.querySelector('.label1');
    labelNome.classList.add('label-active');
}
const subirLabelDoEmail = () => {
    let labelEmail = document.querySelector('.label2');
    labelEmail.classList.add('label-active');
}
const subirLabelDaSenha = () => {
    let labelSenha = document.querySelector('.label3');
    labelSenha.classList.add('label-active');
}
const descerLabelDoNome = () => {
    if (primeiroBotao.value === ""){
    let labelNome = document.querySelector('.label1');
    labelNome.classList.remove('label-active');
    }
}
const descerLabelDoEmail = () => {
    if (segundoBotao.value === ""){
    let labelEmail = document.querySelector('.label2');
    labelEmail.classList.remove('label-active');
    }
}
const descerLabelDaSenha = () => {
    if (terceiroBotao.value === ""){
    let labelSenha = document.querySelector('.label3');
    labelSenha.classList.remove('label-active');
    }
}

formulario.addEventListener('submit', submeter)
yesProgramator.addEventListener('click', simProgamador);
noProgamator.addEventListener('click', naoProgamador);
primeiroBotao.addEventListener('focus', subirLabelDoNome);
segundoBotao.addEventListener('focus', subirLabelDoEmail);
terceiroBotao.addEventListener('focus', subirLabelDaSenha);
primeiroBotao.addEventListener('focusout', descerLabelDoNome);
segundoBotao.addEventListener('focusout', descerLabelDoEmail);
terceiroBotao.addEventListener('focusout', descerLabelDaSenha);
const botao = document.querySelector('.botao-menu');
const menuLateral = document.querySelector('.menu-lateral');
const conteudo = document.querySelector('.conteudo');
const background = document.querySelector('.background'); // Certifique-se de que este elemento existe no HTML

// Abrir/fechar a barra lateral
botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');
    botao.classList.toggle('ativo');
    conteudo.classList.toggle('ativo');
    background.classList.toggle('ativo');
});

// Fechar a barra lateral ao clicar no fundo
background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
    botao.classList.remove('ativo');
    conteudo.classList.remove('ativo');
    background.classList.remove('ativo');
});

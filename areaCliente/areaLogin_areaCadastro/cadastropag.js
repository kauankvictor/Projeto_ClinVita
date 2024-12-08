document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const senha = document.querySelector('input[name="senha"]').value;
    const confirmarSenha = document.querySelector('input[name="confirmar_senha"]').value;

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }

    // Envia os dados do formulário (simulação)
    const dados = new FormData(this);
    console.log('Dados do formulário enviados:');
    for (const [key, value] of dados.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Simulação de envio para o backend (em breve você substituirá isso)
    alert('Cadastro realizado com sucesso!');
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o link com o ID 'login-link'
    const loginLink = document.getElementById('login-link');

    // Adiciona o evento de clique
    loginLink.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link (não irá adicionar uma hashtag na URL)
        window.location.href = "areaLogin_areaCadastro/loginpag.html"; // Substitua pelo caminho correto da sua página de login
    });
});

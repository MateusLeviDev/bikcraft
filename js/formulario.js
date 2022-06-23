const formulario = document.querySelector('form');

function formularioEnviado(resposta) {
    if(resposta.ok) {
        formulario.innerHTML = "<p class='font-2-l style='grid column: 1/-1; padding: 1rem;border-radius: 4px; background: #f7f7f7;'><span style='color: #317a00;'>Mensagem enviada</span>, em breve retornaremos.</p>"
    } else {
        formulario.innerHTML = "<p class='font-2-l style='grid column: 1/-1; padding: 1rem;border-radius: 4px; background: #f7f7f7;'><span style='color: #e00000;'>Erro no envio</span>, você pode enviar diretamente para nosso email: contato@bikcraft.com</p>"
    }
}

function enviarFormulario(event) {
    // Vai ter um event dentro, mas iremos previnir o padrão, ou seja, não quero que vá para o arquivo enviar.php
    event.preventDefault();
    const botao = document.querySelector('form button'); 
    botao.disabled = true; 
    botao.innerText = 'Enviando...';

    const data = new FormData(formulario);
    
    // Essa função recebe o URL ao qual você está fazendo a conexão e depois um objeto com as configurações dessa conexão
    fetch('./enviar.php', {
        method: 'POST', 
        body: data,
    }).then(formularioEnviado);
}

formulario.addEventListener('submit', enviarFormulario)
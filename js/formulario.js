const formulario = document.querySelector('form');

function enviarFormulario(event) {
    // Vai ter um event dentro, mas iremos previnir o padrão, ou seja, não quero que vá para o arquivo enviar.php
    event.preventDefault();
    const botao = document.querySelector('form botao'); 
    botao.disabled = true; 
    botao.innerText = "Enviando...";
}

formulario.addEventListener('submit', enviarFormulario)
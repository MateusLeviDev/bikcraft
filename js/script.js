// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");


function ativarLink(link) {
    const url = location.href;
    const href = link.href
    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}

/* Para ativar uma função para cada um dos links (.forEach) */
links.forEach(ativarLink);


// Ativar itens do orçamento 
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }
    
}


parametros.forEach(ativarProduto);

console.log(parametros);

// Perguntas Frequentes 

const perguntas=document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", "ativa")   
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
} 
    
perguntas.forEach(eventosPerguntas)

// Galeria de bicletas

const galeria = document.querySelectorAll('.bicicleta-img img');
const galeriaContainer = document.querySelector('.bicicleta-img');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if(media) {
        // prepend manipulação do dom, trocando as imagens do site
        galeriaContainer.prepend(img)  
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação 

if (window.SimpleAnime) {
    new SimpleAnime();
}

// Usando plugins externos (exemplos)
if (window.ClipboardJS) {
    new ClipboardJS('.introducao-conteudo p');
}


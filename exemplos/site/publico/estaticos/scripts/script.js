// Este código roda no navegador. A Alumia entrega os arquivos do site.
const formulario = document.querySelector('#saudacao');
const campoNome = document.querySelector('#nome');
const mensagem = document.querySelector('#mensagem');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = campoNome.value.trim();
    mensagem.textContent = nome ? `Olá, ${nome}! Você fez seu primeiro site.` : 'Digite seu nome para começar.';
});

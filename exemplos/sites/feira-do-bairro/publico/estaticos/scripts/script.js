const botoes = document.querySelectorAll('[data-filtro]');
const barracas = document.querySelectorAll('[data-categoria]');
const resultado = document.querySelector('#resultado');

function filtrar(categoria) {
    let quantidade = 0;
    for (const barraca of barracas) {
        const visivel = categoria === 'todas' || barraca.dataset.categoria === categoria;
        barraca.hidden = !visivel;
        if (visivel) quantidade++;
    }

    for (const botao of botoes) {
        botao.setAttribute('aria-pressed', botao.dataset.filtro === categoria);
    }
    resultado.textContent = quantidade === 1 ? '1 barraca' : quantidade + ' barracas';
}

for (const botao of botoes) {
    botao.addEventListener('click', () => filtrar(botao.dataset.filtro));
}

filtrar('todas');
document.querySelector('.controles').hidden = false;

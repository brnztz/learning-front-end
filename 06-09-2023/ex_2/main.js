const campoAdiciona = document.querySelector('#adiciona');
//const botaoAdiciona = document.querySelector('#btAdiciona');
const campoPesquisa = document.querySelector('#pesquisa');
const lista = document.querySelector('#lista');

const produtos = [];

campoAdiciona.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && campoAdiciona.value.trim() !== '') {
        produtos.push(campoAdiciona.value.trim().toUpperCase());
        campoAdiciona.value = '';
        campoAdiciona.focus();
        atualizarLista(produtos);
    }
});

function atualizarLista(produtosLista) {
    lista.innerHTML = '';
    produtosLista.forEach( p => lista.innerHTML += `<li>${p}</li>`);
}

campoPesquisa.addEventListener('keyup', (e) => {
    let filtrados = produtos.filter( p => p.includes(campoPesquisa.value.trim()));
    atualizarLista(filtrados);
});
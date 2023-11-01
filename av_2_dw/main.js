function salvar() {
    // promise: api fetch();
    console.log('vou salvar...');
    const cliente = {};
    const campoNome = document.querySelector('#nome');
    const campoEmail = document.querySelector('#email');
    const campoMensagem = document.querySelector('#mensagem');
    cliente.nome = campoNome.value;
    cliente.email = campoEmail.value;
    cliente.mensagem = campoMensagem.value;
    cliente.id = document.querySelector('#id').value;
    campoNome.value = ''
    campoEmail.value = ''
    campoMensagem.value = ''

    if (cliente.id) {
        atualizar(cliente);
    } else {

        fetch('https://crud-2-b69ef-default-rtdb.firebaseio.com/clientes.json', {
            method: 'POST',
            body: JSON.stringify({
                nome: cliente.nome,
                email: cliente.email,
                mensagem: cliente.mensagem,
            })
        }) // busca
            .then(response => response.json()) // converter para json
            .then(data => {
                console.log(data)
                carregar();
            }) // acessa os dados
            .catch(error => console.log(error)); // trata os erros
    }
}

const clientes = [];
function carregar() {
    fetch('https://crud-2-b69ef-default-rtdb.firebaseio.com/clientes.json')
        .then(response => response.json())
        .then(data => {
            const lista = document.querySelector('#lista');
            lista.innerHTML = ''; // limpa a lista
            for (const key in data) {
                const cliente = data[key];
                cliente.id = key;
                clientes.push(cliente)
                const li = document.createElement('li');
                li.innerHTML += ` <li class="list-group-item">${cliente.nome}</li>`;
                li.innerHTML += ` <button class="btn btn-primary" onclick="editar('${key}')">Editar</button>`;
                li.innerHTML += ` <button class="btn btn-primary" onclick="remover('${key}')">Remover</button>`;
                lista.appendChild(li);
            }
        })
        .catch(error => console.log(error));
}
document.body.onload = carregar();

function editar(key) {
    const cliente = clientes.find(item => item.id == key);
    document.querySelector('#nome').value = cliente.nome;
    document.querySelector('#email').value = cliente.email;
    document.querySelector('#mensagem').value = cliente.mensagem;
    document.querySelector('#id').value = cliente.id;
}

function atualizar(cliente) {
    fetch(`https://crud-2-b69ef-default-rtdb.firebaseio.com/clientes/${cliente.id}.json`, {
        method: 'PUT',
        body: JSON.stringify({
            email: cliente.email,
            nome: cliente.nome,
            mensagem: cliente.mensagem
        })
    })
        .then(response => response.json())
        .then(() => carregar())
        .catch(error => console.log(error))

}

function remover(key) {
    fetch('https://crud-2-b69ef-default-rtdb.firebaseio.com/clientes/' + key + '.json',
        {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => carregar())
        .catch(error => console.log(error))
}
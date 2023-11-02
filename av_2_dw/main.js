function salvar() {
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
    }
    else if (cliente.nome == '' || cliente.email == '' || cliente.mensagem == '') {
        alert('Não é possível concluir um chamado com campos vazios');
        return;
    } else {
        fetch('https://crud-2-b69ef-default-rtdb.firebaseio.com/clientes.json', {
            method: 'POST',
            body: JSON.stringify({
                nome: cliente.nome,
                email: cliente.email,
                mensagem: cliente.mensagem,
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                carregar();
            })
            .catch(error => console.log(error));
    }
}

const clientes = [];
function carregar() {
    fetch('https://crud-2-b69ef-default-rtdb.firebaseio.com/clientes.json')
        .then(response => response.json())
        .then(data => {
            const lista = document.querySelector('#lista');
            lista.innerHTML = '';
            for (const key in data) {
                const cliente = data[key];
                cliente.id = key;
                clientes.push(cliente)
                const li = document.createElement('li');
                li.innerHTML += ` <li class="list-group-item list-group-item-light">${cliente.nome}</li>`;
                li.innerHTML += ` <li class="list-group-item list-group-item-light">${cliente.email}</li>`;
                li.innerHTML += ` <li class="list-group-item list-group-item-light">${cliente.mensagem}</li>`;
                li.innerHTML += ` <button class="btn btn-dark btn-sm" onclick="editar('${key}')">Editar</button>`;
                li.innerHTML += ` <button class="btn btn-dark btn-sm" onclick="remover('${key}')">Remover</button>`;
                lista.appendChild(li);
                lista.appendChild(document.createElement('br'));
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
    document.querySelector('#cancelar').style.display = 'inline-block';

    const campoNome = document.querySelector('#nome');
    campoNome.focus();
    campoNome.style.backgroundColor = '#FFFF00';

    const campoEmail = document.querySelector('#email');
    campoEmail.style.backgroundColor = '#FFFF00';

    const campoMensagem = document.querySelector('#mensagem');
    campoMensagem.style.backgroundColor = '#FFFF00';
}


function atualizar(cliente) {
    if (cliente.nome == '' || cliente.email == '' || cliente.mensagem == '') {
        alert('Não foi possivel atualizar o chamado');
        return;
    } else {
        fetch(`https://crud-2-b69ef-default-rtdb.firebaseio.com/clientes/${cliente.id}.json`, {
            method: 'PUT',
            body: JSON.stringify({
                email: cliente.email,
                nome: cliente.nome,
                mensagem: cliente.mensagem
            })
        })
            .then(response => response.json())
            .then(() => {
                carregar();
                document.querySelector('#id').value = '';
                document.querySelector('#nome').style.backgroundColor = '';
                document.querySelector('#email').style.backgroundColor = '';
                document.querySelector('#mensagem').style.backgroundColor = '';

                document.querySelector('#cancelar').style.display = 'none';
            })
            .catch(error => console.log(error))
    }
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


function cancel() {

    document.querySelector('#nome').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#mensagem').value = '';
    document.querySelector('#id').value = '';


    document.querySelector('#nome').style.backgroundColor = '';
    document.querySelector('#email').style.backgroundColor = ''; 
    document.querySelector('#mensagem').style.backgroundColor = ''; 


    document.querySelector('#cancelar').style.display = 'none';
}
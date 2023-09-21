let c = document.querySelector('#create');
let r = document.querySelector('#read');
let u = document.querySelector('#update');
let d = document.querySelector('#delete');

c.addEventListener('click', () => {
    fetch(
        'https://crud-d9af6-default-rtdb.firebaseio.com/clientes.json',
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    nome: 'Juju',
                    email: 'juju@unemat.br',
                    idade: 22
                }
            )
        }
    )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});

r.addEventListener('click', () => {
    fetch('https://crud-d9af6-default-rtdb.firebaseio.com/clientes.json')
    .then(response => response.json())
    .then(data => {
        for (const key in data) {
            console.log(data[key]);
        }
    })
    .catch(error => console.log(error));
});

u.addEventListener('click', () => {
    fetch('https://crud-d9af6-default-rtdb.firebaseio.com/clientes/-Neozi90V1p65qlqYa70.json',{
        method: 'PUT',
        body: JSON.stringify(
            {
                nome: 'Juju',
                email: 'juju@gmail.com',
                idade: 24
            })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});

d.addEventListener('click', () => {
    fetch('https://crud-d9af6-default-rtdb.firebaseio.com/clientes/-Neozi90V1p65qlqYa70.json',{
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});
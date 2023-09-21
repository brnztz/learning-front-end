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
                    nome: 'Bruno',
                    email: 'brunozaiatz@unemat.br',
                    idade: 21
                }
            )
        }
    )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});

r.addEventListener('click', () => {
    fetch().then().then().catch();
});

u.addEventListener('click', () => {
    console.log('Update');
});

d.addEventListener('click', () => {
    console.log('Delete');
    });
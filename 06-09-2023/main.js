/* VARIÁVEIS */
const nome = 'João'; // constante
let idade = 26; // usada em escopo local
var altura = 1.80; // usada em escopo global

/* TIPOS DE DADOS */
const nome2 = 'João'; // string
const idade2 = 26; // number
const possuiFaculdade = true; // boolean
var time; // tipo indefinido    

/* VETORES */

let frutas = []; // vetor vazio
let frutas2 = ['Banana', 'Maçã', 'Pera']; // vetor com valores

// console.log(frutas);

frutas[0] = 'Banana';
frutas[1] = 'Maçã';
frutas[2] = 'Pera';

frutas.push('Mirtilo'); // adiciona um elemento no final do vetor

// console.log(frutas);

frutas.pop(); // remove o último elemento do vetor

// console.log(frutas);

/* OBJETOS */

var pessoa = {}; // objeto vazio

pessoa = {
    nome: 'João',
    idade: 26,
    somar: function (a, b) {
        return a + b;
    }
}

// console.log(pessoa.nome);
// console.log(pessoa.somar(2, 3));

/* VETOR DE OBJETOS */

var clientes = [
    {
        id: 1,
        nome: 'João',
    },
    {
        id: 2,
        nome: 'Maria',
    },
    {
        id: 3,
        nome: 'José',
    }];

clientes.push({ id: 4, nome: 'Pedro' });
clientes[4] = { id: 5, nome: 'Ana' };


/* funções */
function subtrair(a, b) {
    let r = a - b;
    return r;
}

let num1 = 10;
let num2 = 5;
let resultado = subtrair(num1, num2);

// console.log(resultado);

const resultado2 = (a, b) => { return a - b; }; // callbacks com arrow functions

const resultado3 = function (a, b) { return a - b; }

// console.log(resultado2);
// console.log(resultado3);


/* funções de vetor */

// console.log(frutas);

/* verificar se existe uma banana no vetor frutas */
// console.log(frutas.includes('Banana'));

/* verificar a posição do elemento Banana no vetor frutas */
// console.log(frutas.indexOf('Pera'));

/* adicionar ao final de cada elmento do vetor frutas a palavra 'sabor' */
let frutas_sabor = frutas.map(f => f + ' sabor');

// console.log(frutas_sabor)
frutas.push('Bacuri');

/* filtrar os elementos do vetor frutas que começam com a letra B */
let filtrado = frutas.filter(f => f.startsWith('B'));
// console.log(filtrado);

frutas.forEach(f => console.log(f))

/* DESAFIO
1. Crie um campo de texto para adicionar valores no vetor de frutas com botão para adicionar
2. Crie um campo de texto para filtrar os elementos do vetor de frutas ao digitar a letra
*/

let inputFruta = document.getElementById('adiciona');
let botaoAdiciona = document.getElementById('btAdiciona');
let inputPesquisa = document.getElementById('pesquisa');
let list = document.getElementById('frutas'); 

botaoAdiciona.addEventListener('click', () => {
    frutas.push(inputFruta.value);
    list.innerHTML = '';
    frutas.forEach( f => {
        let item = document.createElement('li');
        item.innerText = f;
        list.appendChild(item);
    }
    );
});

inputPesquisa.addEventListener('keyup', () => {
    let filtrado = frutas.filter(f => f.toLowerCase().includes(inputPesquisa.value));
    list.innerHTML = '';
    filtrado.forEach( f => {
        let item = document.createElement('li');
        item.innerText = f;
        list.appendChild(item);
    });
});

frutas.forEach( f => {
    let item = document.createElement('li');
    item.innerText = f;
    list.appendChild(item);
});
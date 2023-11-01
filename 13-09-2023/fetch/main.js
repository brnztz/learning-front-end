const pergunta = document.querySelector('#pergunta');
const resposta = document.querySelector('#resposta');

pergunta.addEventListener('keyup', (e) => {
    if(e.keyCode == 191){
        fetch('https://yesno.wtf/api') // promise fetch
        .then(response => response.json()) // suceso em obter o recurso
        .then(data => {  // sucesso em receber os dados do servidor
            const resp = (data.answer == 'yes' ? 'SIM' : 'NÃO');
            resposta.innerHTML = resp;
            resposta.style.display = 'block';
            document.body.style.backgroundImage = `url(${data.image})`;
        })
        .catch(); // erro
    }else{
        resposta.style.display = 'none';
        document.body.style.backgroundImage = 'none';
    }   
});
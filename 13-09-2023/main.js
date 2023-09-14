const campoEstado = document.querySelector('#estado');
const campoMunicipio = document.querySelector('#municipio');
const populacao = document.querySelector('#populacao');

document.body.onload = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(res => res.json())
    .then(estados => {
        estados.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado.id;
            option.innerHTML = estado.nome;
            campoEstado.appendChild(option);
        });
    });
}
campoEstado.onchange = () => {
    const idEstado = campoEstado.value;
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`)
    .then(res => res.json())
    .then(municipios => {
        campoMunicipio.innerHTML = '';
        municipios.forEach(municipio => {
            const option = document.createElement('option');
            option.value = municipio.id;
            option.innerHTML = municipio.nome;
            campoMunicipio.appendChild(option);
        });
    }
    );
}

campoMunicipio.onchange = () => {
    fetch(`https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2021/variaveis/9324?localidades=${campoMunicipio.value}`)
    .then((response) => response.json())
    .then(data => {
        populacao.innerHTML = data[0].resultados[0].series[0].serie["2021"]
    });
}

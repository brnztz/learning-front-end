const campoEstado = document.querySelector('#estado');
const campoMunicipio  = document.querySelector('#municipio');
const populacao = document.querySelector('#populacao');
const resultado = document.querySelector('#resultado');

campoEstado.style.display = 'none';
campoMunicipio.style.display = 'none';
resultado.style.display = 'none';

document.body.onload = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(res => res.json()) // buscou o recurso no servidor com sucesso
    .then(estados => { // busca os dados do servidor
        campoEstado.innerHTML = '<option value="">Selecione um estado</option>';
        estados.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado.id;
            option.innerHTML = estado.nome;
            campoEstado.appendChild(option);
        });
        campoEstado.style.display = 'block';
    });
}
campoEstado.onchange = () => {
    const idEstado = campoEstado.value;
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios?orderBy=nome`)
    .then(res => res.json())
    .then(municipios => {
        campoMunicipio.innerHTML = '<option value="">Selecione um município</option>';
        municipios.forEach(municipio => {
            const option = document.createElement('option');
            option.value = municipio.id;
            option.innerHTML = municipio.nome;
            campoMunicipio.appendChild(option);
        });
        campoMunicipio.style.display = 'block';
    });
    campoMunicipio.onchange = () => {
        const idMunicipio = campoMunicipio.value;
        fetch('https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2021/variaveis/9324?localidades=' + idMunicipio)
        .then(res => res.json())
        .then(dados => {
            populacao.innerHTML = dados[0].resultados[0].series[0].serie['2021'];
        });
        resultado.style.display = 'block';
    }
}

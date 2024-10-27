const cronometro = document.getElementById('relogio');


const atualizarContador = () => {
    const horaAtual = new Date();

    const horas24 = new Date();

    horas24.setHours(24, 0, 0, 0);

    const diferenca = horas24 - horaAtual;

    let horas = Math.floor(diferenca / (1000 * 60 * 60));
    let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor(diferenca % (1000 * 60) / 1000)

    if(horas < 10){
        horas = `0${horas}`;
    }
    if(minutos < 10){
        minutos = `0${minutos}`;
    }
    if(segundos < 10){
        segundos = `0${segundos}`;
    }

    cronometro.innerText = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarContador, 1000);
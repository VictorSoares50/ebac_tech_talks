AOS.init();

const dataDoEvento = new Date("jun 6, 2026 19:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaHoras = setInterval( function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horasEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if(distanciaAteEvento < 0 ) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'evento expirado'
    }

}, 1000);
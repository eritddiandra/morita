const fechaEvento = new Date("2025-09-21T00:00:00").getTime();
const contenedor = document.getElementById("cuenta-regresiva");

const actualizarCuenta = () => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  contenedor.innerHTML = `FALTAN ${dias} Días ${horas}h ${minutos}m ${segundos}s`;
};

setInterval(actualizarCuenta, 1000);
actualizarCuenta();

// Música
const btnMusica = document.getElementById("btn-musica");
const musica = document.getElementById("musica");
let reproduciendo = false;

btnMusica.addEventListener("click", () => {
  if (!reproduciendo) {
    musica.play();
    btnMusica.textContent = "⏸️";
  } else {
    musica.pause();
    btnMusica.textContent = "🎵";
  }
  reproduciendo = !reproduciendo;
});

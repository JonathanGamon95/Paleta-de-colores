const lista = document.querySelectorAll(".cont_color");
const boton_nuevos_colores = document.getElementById("nuevos_colores");


const NUMB_O_OBCDARIO = [0, 1];
const NUMEROS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ABCEDARIO = ["a", "b", "c", "d", "f"];

function numeroAleatorio(variable) {
    return generarAleatorio = Math.floor(Math.random() * variable.length - 1) + 1;
}


function paletaDeColor() {
    let comprobacion;
    let paleta_de_color = [];
    const limite = 6;

    for (let i = 0; i < limite; i++) {
        comprobacion = numeroAleatorio(NUMB_O_OBCDARIO);

        if (comprobacion == 0) {
            paleta_de_color.push(NUMEROS[numeroAleatorio(NUMEROS)]);
        } else {
            paleta_de_color.push(ABCEDARIO[numeroAleatorio(ABCEDARIO)]);
        }
    };
    paleta_de_color.unshift("#");
    return paleta_de_color.join("");
}


function generarNuevosColores() {
    lista.forEach(elemento => {
        const color = paletaDeColor();
        elemento.style.backgroundColor = color;
        elemento.children[0].children[0].textContent = color;
    })
}
generarNuevosColores();
boton_nuevos_colores.addEventListener("click", generarNuevosColores)
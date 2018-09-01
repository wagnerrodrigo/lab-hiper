var SETA_ESQUERDA = 37;
var SETA_DIRETA = 39;
var SETA_CIMA = 38;
var SETA_BAIXO = 40;

function Teclado(elemento) {
    this.elemento = elemento;

    this.pressionadas = [];

    this.disparadas = [];

    this.funcaoesDiparo = [];

    var teclado = this;

    elemento.addEventListener('keydown', function (evento) {
        var tecla = evento.keyCode;
        teclado.pressionadas[tecla] = true;

        if (teclado.funcaoesDiparo[tecla] && !teclado.disparadas[tecla]) {
            teclado.disparadas[tecla] = true;
            teclado.funcaoesDiparo[tecla]();
        }

    });

    elemento.addEventListener('keyup', function (evento) {
        teclado.pressionadas[evento.keyCode] = false;
        teclado.disparadas[evento.keyCode] = false;

    });
}
Teclado.prototype = {
    pressionada: function (tecla) {
        return this.pressionadas[tecla];
    },
    disparou: function (tecla, callback) {
        this.funcaoesDiparo[tecla] = callback;
    }
}


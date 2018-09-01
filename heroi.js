// código unicos para as direções

var DIRECAO_ESQUERDA =1;
var DIRECAO_DIREITA = 2;

function Heroi(context, teclado, animacao) {
    this.context = context;
    this.teclado = teclado;
    this.animacao = animacao;
    this.x = 0;
    this.y = 0;
    this.direcao = DIRECAO_DIREITA;
}

Heroi.prototype = {
    atualizar: function(){
        if(this.teclado.pressionadas(SETA_ESQUERDA)&& this.x > 0){
        this.direcao = DIRECAO_ESQUERDA;
        this.x -= 10;
    }
    else if (this.teclado.pressionadas(SETA_ESQUERDA)&& this.x < this.context.canvas.width - 20){
        this.direcao = DIRECAO_DIREITA;
        this.x +=10;
    }
},
desenhar: function(){
    this.context.fillRect(this.x, this.y,20,50);
},
atirar: function(){
    var tiro  = new Bola(ths.context);
    tiro.x = this.x + 10;
    tiro.y = this.y + 10;
    tiro.raio = 2;
    tiro.cor = 'red';

    // lendo a direção atual

    if(this.direcao == DIRECAO_ESQUERDA)
        tiro.velocidade = -20;
    else
        tiro.velocidade = 20;

    this.animacao.novoSprite(tiro);

}

}

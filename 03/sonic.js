var SONIC_DIRETA =1;
var SONIC_ESQUERDA = 1;

function Sonic(context,teclado,imagem) {
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;
    this.velocidade = 10;

    // criando a spritesheet a partir da imagem recebida
    this.sheet = new Spritesheet(context, imagem, 3, 8);
    this.sheet.intervalo = 60;

    //estado inicial
    this.andando = false;
    this.direcao = SONIC_DIRETA;
}
Sonic.prototype= {
    atualizar: function() {
        if(this.teclado.pressionada(SETA_DIREITA)){
            // se ja não esta neste estado
            if(! this.andando || this.direcao !=SONIC_DIRETA)
            this.sheet.linha =1;
            this.sheet.coluna =0;
        }
        //configuro o estado atual
        this.andando = true;
        this.direcao = SONIC_DIRETA
        
        // neste estado a animação da spritesheet deve rodar
        this.sheet.proximoQuadro();

        // desloco o sonic
        this.x += this.velocidade;
    }
    else if (this.teclado.pressionada(SETA_ESQUERDA)){
        if(! this.andando || this.direcao != SONIC_ESQUERDA){
            this.sheet.linha =2; //atencao aqui sera2
            this.sheet.coluna=0;
        }
        this.andando = true;
        this.direcao = SONIC_ESQUERDA;
        this.sheet.proximoQuadro();
        this.x -= this.velocidade; // E aqui é sinal de menos!
    }
    else {
        if(this.direcao == SONIC_DIRETA)
            this.sheet.coluna =0;
        else if(this.direcao == SONIC_ESQUERDA)
        this.sheet.coluna =1;
        
        this.sheet.linha =0;
        this.andando = false;
    }

}
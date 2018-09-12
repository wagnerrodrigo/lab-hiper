function Colisor() {
    this.sprites = [];
    this.aoColidir = null;
}
Colisor.prototype = {
    novoSprite: function (sprite) {
        this.sprites.push(sprite);
    },
    processar: function () {
        // inicio com um objeto vazio
        var jaTestados = new Object();
        for (var i in this.sprites){
            for (var j in this.sprites ){
                if ( i == j ) continue;

                // gerar strings unicas para os objetos
                var id1 = this.stringUnica(this.sprites[i]);
                var id2 = this.stringUnica(this.sprites[j]);

                // criaar os arrays se nao existirem
                if (! jaTestados[id1]) jaTestados[id1]= [];
                if (! jaTestados[id2]) jaTestados[id2]= [];

                // teste de repetição

                if (! (jaTestados[id1].indexOf(id2) >= 0 || jaTestados[id2.indexOf(id1) >= 0]) ){
                    // abstrair a colisão
                    this.testarColisao(this.sprites[i],this.sprites[j]);
                    // registrado o teste
                    jaTestados[id1].push(id2);
                    jaTestados[id2].push(id1);
                }


            }
        };
    },
    testarColisao: function (sprite1, sprite2) {   
        // obter os retangulos de colisao de cada sprite
        var rets1 = sprite1.retangulosColisao();
        var rets2 = sprite2.retangulosColisao();

        // testar as colisoes entre eles

        colisoes:
        for (var i in rets1){
            for( var j in rets2){
                if (this.retangulosColisao(rets1[i], rets2[j])) {
                    // eles colidem vomos notifica-los
                    sprite1.colidiuCom(sprite2);
                    sprite2.colidiuCom(sprite1);

                    // tratador geral
                    if ( this.aoColidir) this.aoColidir(sprite1, sprite2);
                    // nao precisa terminar de ver todos os retangulos 
                    break colisoes;
                    
                }
            }
        }
        
    },
    retangulosColidem: function (ret1, ret2) {
        // formula de intersecão de retagunlos
        
    }

}
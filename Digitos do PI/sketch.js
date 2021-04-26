var colisoes = 0;
var passos_no_tempo = 10000;

function setup() {
  createCanvas(windowWidth,200);
  background(55);

  bloco1 = new Bloco(100,0,1,50); //posi x, vel, massa, lado
  bloco2 = new Bloco(300,-2/passos_no_tempo,1,100);

  }

function draw() {
  background(55);

  for(var i = 0; i<passos_no_tempo; i++){

    bloco1.atualiza();
    bloco2.atualiza();

    bloco1.colide(bloco2);
    bloco1.colide_parede();
  }

  bloco1.mostra();
  bloco2.mostra();

}

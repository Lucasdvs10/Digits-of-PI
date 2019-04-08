class Bloco {
  constructor(x,vel,massa,lado) {
    this.posi = new p5.Vector(x,height-lado-1);
    this.vel = new p5.Vector(vel,0);
    this.massa = massa;
    this.l = lado;
  }
  mostra(){
    fill(255);
    rect(this.posi.x,this.posi.y,this.l,this.l);
  }

  atualiza(){
    this.posi.add(this.vel);
  }

  colide_parede(){
    if(this.posi.x <= 0){
      this.vel.mult(-1);
      colisoes++
      print(colisoes)
    }
  }

  formula(outro){
    var vel_antiga1 = this.vel.x;
    var vel_antiga2 = outro.vel.x;
    var massa1 = this.massa;
    var massa2 = outro.massa;

    this.vel.x = ((massa1 - massa2)*vel_antiga1/(massa1+massa2))+ (2*massa2*vel_antiga2)/(massa1 + massa2);
    outro.vel.x = ((massa2 - massa1)*vel_antiga2/(massa1+massa2))+ (2*massa1*vel_antiga1)/(massa1 + massa2);
  }

  colide(outro){ //bateu em outro bloco
    if(this.posi.x + this.l >= outro.posi.x && this.posi.x <= outro.posi.x + outro.l){
      this.formula(outro);
      colisoes++;
      print(colisoes)
    }
  }

  
}

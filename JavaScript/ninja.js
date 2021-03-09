class Ninja {
  constructor(name, health = 3, speed = 3, strength = 3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName(){
    console.log(`My name is ${this.name}`);
  }

  showStats(){
    console.log(this);
  }

  drinkSake(){
    console.log("Drinking sake!", this.health)
    this.health += 10;
    console.log("New health: ", this.health);
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

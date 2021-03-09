class Card {
  constructor(name, cost){
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilience){
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }

  attack(target){
    if(target instanceof Unit) {
      target.resilience -= this.power;
      console.log(`${this.name} attacked ${target.name} causing ${this.power} damage`);
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

class Effect extends Card {
  constructor(name, cost, stat, mag) {
    super(name, cost);
    this.stat = stat;
    this.mag = mag;
    let rOrL = "";
    if(mag > 0){
      rOrL = "Raise"
    } else {
      rOrL = "Lower"
    }
    this.text = `${rOrL} the target's ${this.stat} by ${Math.floor(this.mag)}.`;
  }

  play(target) {
    if (target instanceof Unit) {
      if (this.stat === "power") {
        target.power += this.mag;
        console.log(this.text);
      } else if (this.stat === "resilience") {
        target.resilience += this.mag;
        console.log(this.text);
      } else {
        console.log(`Not an correct move!`);
      }
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}





// Turn 1
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3);
console.log(`${redBeltNinja.name}'s Resilience: ${redBeltNinja.resilience}`)
hardAlgorithm.play(redBeltNinja)
console.log(`${redBeltNinja.name}'s Resilience: ${redBeltNinja.resilience}`)

// Turn 2
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
console.log(`${redBeltNinja.name}'s Resilience: ${redBeltNinja.resilience}`);
unhandledPromiseRejection.play(redBeltNinja);
console.log(`${redBeltNinja.name}'s Resilience: ${redBeltNinja.resilience}`);

// Turn 3
const pairProgramming = new Effect("Pair Programming", 3, "power", 2);
console.log(`${blackBeltNinja.name}'s Resilience: ${blackBeltNinja.resilience}`);
redBeltNinja.attack(blackBeltNinja);
console.log(`${blackBeltNinja.name}'s Resilience: ${blackBeltNinja.resilience}`);

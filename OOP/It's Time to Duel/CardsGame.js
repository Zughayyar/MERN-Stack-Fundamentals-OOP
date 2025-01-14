class Card {
    constructor(cardName, cardCost) {
        this.cardName = cardName;
        this.cardCost = cardCost;
    }
}

class Unit extends Card {
    constructor(cardName, cardCost, power, res) {
        super(cardName, cardCost);
        this.power = power;
        this.res = res;
    }

    attack (target) {
        if (target instanceof Unit) {
            target.res -= this.power
            console.log(`${this.cardName} attacked ${target.cardName}, result resilience: ${this.res}`)
        }
        else {
            throw new Error('Target must be a unit!');
        }
    }
}

class Effect extends Card {
    constructor(cardName, cardCost, cardText, stat, magnitude) {
        super(cardName, cardCost);
        this.cardText = cardText;
        this.stat = stat;
        this.magnitude = magnitude;

    }

    // Play method to apply the effect to a target unit
    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "res") {
                target.res += this.magnitude;
            } else if (this.stat === "power") {
                target.power += this.magnitude;
            } else {
                throw new Error("Invalid stat!");
            }
            console.log(`${this.cardName} was played on ${target.cardName}. ${this.stat} changed by ${this.magnitude}.`);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

// Create Units
const unit1 = new Unit("Red Belt Ninja", 3, 4, 4);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);

// Create Effects
const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Play out the following scenario
effect1.play(unit1); // Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
effect2.play(unit2); // Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
effect3.play(unit1); // Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
unit1.attack(unit2); // "Red Belt Ninja" uses the attack method on "Black Belt Ninja"

console.log(unit1, unit2);
class Ninja {
    constructor(name) {
        this.name = name
        this.health = 0
        this.speed = 3
        this.stregnth = 3
    }

    sayName = () => (console.log(`Ninja ${this.name}`))

    showStats() {
        console.log(`Name: ${this.name}, Strength ${this.stregnth}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake = () => {this.health += 10}
}


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200
        this.speed = 10
        this.stregnth = 10
        this.wisdom = 10
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }

    showStats() {
        this.drinkSake()
        console.log(`Name: ${this.name}, Strength ${this.stregnth}, Speed: ${this.speed}, Health: ${this.health}`)
    }
}


const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom()
superSensei.showStats()
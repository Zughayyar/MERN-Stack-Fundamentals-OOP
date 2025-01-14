class Ninja {
    constructor(name) {
        this.name = name
        this.health = 0
        this.speed = 3
        this.stregnth = 3
    }

    sayName = () => (console.log(`Ninja ${this.name}`))

    showStats() {
        console.log(`Ninja ${this.name}, Strength ${this.stregnth}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake = () => {this.health += 10}
}


const ninja1 = new Ninja("Hyabusa")
ninja1.sayName()
ninja1.drinkSake()
ninja1.showStats()
class Greeting {
    constructor() {
        this.worldHello = "Hello"
    }

    hello(name) {
        return this.worldHello + " " + name
    }
}

var greet = new Greeting()
console.log(greet.hello("Chungtv"))
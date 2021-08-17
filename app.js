//Encapsulation:

function encapsulation() {
    let name = 'Jack'
    console.log(`The variable name with the value ${name} is encapsulated, which means you can't use the variable 'name' outside of this function`)
}
encapsulation()

//################################################################################

//Abstraction:

function calculator() {
    let x = 5
    let y = 8
    console.log(`Abstraction means that there is hidden complexity behind the scenes in this calculator function- You don't see how x and y are being added with the function add(x,y) but you still get the result in the calculator function: ${add(x,y)}.`)
}

function add(num1, num2) {
    return num1 + num2
}
calculator()

//################################################################################

//Inheritance:

function makePerson(firstName, lastName) {
    return {
        fname: firstName,
        lname: lastName
    }
}
console.log(makePerson('Jack', 'Amsterdam'), makePerson('Haim', 'Rubin'), `\nBoth new people objects are inherited from makePerson()`)
    //console.log(`${makePerson('j','a')}`)??why [object Object]

//#############################################################################

//Polymorphism- altering inherited properties:
class Animal {
    constructor(name) {
        this.name = name;
        this.color = 'black';
    }
}
class Cat extends Animal {
    constructor(name, favoriteDrink) {
        super(name)
        this.favoriteDrink = favoriteDrink;
        this.color = 'white'
    }
}
class Dog extends Animal {
    constructor(name, barks) {
        super(name)
        this.barks = barks
        this.color = 'brown'
    }
}

let cat = new Cat('Jack', 'milk')
let dog = new Dog('Joe', true)
console.log(`Both dog and cat are animals and animals have a black color- but with Polymorphism I can alter inherited properties by giving them different colors, so now the dog is an animal that has a ${dog.color} color and the cat is also an animal that has a ${cat.color} color. So you see that both the cat and the dog do not have a black color like in the Animal class but they have there own unique color`)

const animals = [cat, dog]

for (let animal of animals) {
    console.log(animal)
}


//  animalאבל למה לעשות את זה? פשוט אפשר לא להביא צבע ל
//#############################################################################
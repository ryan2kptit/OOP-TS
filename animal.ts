class Animal {
    numberLeg: number
    weight: number
    color: string;
    speed: number;
    private owner: string;       //       Encapsulation   

    constructor(numberLeg: number, weight: number, color: string, speed: number, owner: string) {
        this.numberLeg = numberLeg;
        this.weight = weight;
        this.color = color;
        this.speed = speed;
        this.owner = owner;
    }

    public move(speed: number): void {
        console.log(`this one run at ${speed} k/hcccccc`);
    }

    public getOwner() {
        console.log(this.owner);
    }

    public setOwner(value: string) {           // private properties must access or set by function
        this.owner = value;
    }
}

class Dog extends Animal {              // Inheritance

    price: number

    constructor(numberLeg: number, weight: number, color: string, speed: number, owner: string, price: number) {
        super(numberLeg, weight, color, speed, owner);              // Inheritance properties of farther class;
        this.price = price;
    }

    public move(speed: number): void {                 // Overide
        console.log(`this one run at ${speed} km/h`);
    }

    public sell(price: number): void {
        console.log(`sell this dog at ${price}$`);
    }

    public getPrice() {
        return this.price;
    }
}

class Cat extends Animal {
    public move(speed: number): void {
        console.log(`this cat run at ${speed} km/h`);
    }
}


//// Polymorphism
const dog = new Dog(4, 30, 'black', 60, 'Dong',1000);
dog.move(dog.speed);
dog.sell(dog.price);
dog.getOwner();

// const cat  = new Cat(4, 6, 'white', 30);
// cat.move(20)


// Abstract
abstract class Character {
    public name: string;
    public damage: number;
    public attackSpeed: number;
  
    constructor(name: string, damage: number, speed: number) {
      this.name = name;
      this.damage = damage;
      this.attackSpeed = speed;
    }
  
    public abstract damagePerSecond(): number;                    // No need to concern about how this work, just expose the necessary details
}
  
  class Goblin extends Character {
    constructor(name: string, damage: number, speed: number) {
      super(name, damage, speed);
    }
  
    public damagePerSecond(): number {
      return this.damage * this.attackSpeed;
    }
  }
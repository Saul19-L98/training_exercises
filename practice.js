"use strict"

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const saul = new Person('Saul',1998);

const will = new Person('Williams', 1999);

const jay =['Jay',1998];

console.log(saul, will);

console.log( saul instanceof Person);

console.log( jay instanceof Person);

//Prototype

Person.prototype.calcAge = function(){
    console.log(`Your age is: ${2022 - this.birthYear}`);
};

saul.calcAge();

console.log(Person.prototype);

will.calcAge();

console.log(saul.__proto__);

console.log(saul.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(saul));

console.log(Person.prototype.isPrototypeOf(will));

//.prototypeOfLinkedObjects
console.log(Person.prototype.isPrototypeOf(Person));

console.log(Person.hasOwnProperty('firstName'));
console.log(saul.hasOwnProperty('firstname'));

console.log('Prototype Scope');
console.log(saul.__proto__);
console.log(saul.__proto__.__proto__);
console.log(saul.__proto__.__proto__.__proto__);

const arr = [1,2,3,4,5,1,2,3,4,5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

//Never do this
Array.prototype.unique = function(){
    console.log(this);
    return [...new Set(this)];
};

console.log(arr.unique());

//NOTE: Exersice one.

// const Car = function(name,speed){
//     this.name = name;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//     return `${this.name} going at ${this.speed += 10} km/h`;
// };

// Car.prototype.break = function () {
//     return `${this.name} going at ${this.speed -= 5} km/h`;
// };

// const car1 = new Car('BW', 120);

// const car2 = new Car('Mercedes',95);

// console.log(car1.accelerate());
// console.log(car1.break());
// console.log(car1.accelerate());
// console.log(car1.accelerate());
// console.log(car1.break());

// console.log(car2.accelerate());
// console.log(car2.break());
// console.log(car2.accelerate());
// console.log(car2.accelerate());
// console.log(car2.break());


//NOTE: Exersice two.

// class Car2{
//     constructor( make, speed){
//         this.make = make;
//         this.speed = speed;
//     };

//     accelerate() {
//         return `${this.make} going at ${this.speed += 10} km/h`;
//     };

//     break(){
//         return `${this.make} going at ${this.speed -= 5} km/h`;
//     };

//     get speedUS(){
//         // return `${parseFloat((this.speed / 1.6).toFixed(2))} mi/h`;
//         return this.speed / 1.6;
//     };

//     // set speed(speedUS){
//     //     console.log(speedUS);
//     //     if(this.speed) this.speed = (speedUS * 1.6).toFixed(2);
//     //     else this.speed;
//     // };

//     set speedUS(speed){
//         // this.speed = (parseFloat((speed * 1.6).toFixed(2)));
//         this.speed = speed * 1.6;
//     };
// };

// const car1 = new Car2('Ford',120);
// console.log(car1.accelerate());
// console.log(car1.break());
// console.log(car1.accelerate());
// console.log(car1.speedUS);
// console.log(car1.accelerate());
// console.dir(Car2);
// console.dir(car1);

// car1.speedUS = 40;
// console.log(car1);

//NOTE: Exersice three.

// const Car = function (make, speed){
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//     return `${this.make} going at ${this.speed += 10} km/h`;
// };

// Car.prototype.break = function () {
//     return `${this.make} going at ${this.speed -= 5} km/h`;
// };

// const Ev = function(make, speed, charge){
//     Car.call(this,make,speed);
//     this.charge = charge;
// };

// //Linking prototypes.
// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.constructor = Car;


// Ev.prototype.chargeBattery = function(chargeTo){
//     this.charge = this.charge + (chargeTo - this.charge);
//     return `Battery charge to: ${this.charge}%`;
// };

// Ev.prototype.accelerate = function () {
//     return `${this.make} going at ${this.speed += 20} km/h, with a charge of ${this.charge -= 5}%`;
// };


// const tesla = new Ev ('Tesla',150,20);

// console.log(tesla);
// console.log(tesla.chargeBattery(50));
// console.log(tesla.accelerate());
// console.log(tesla.break());
// console.log(tesla.chargeBattery(90));
// console.log(tesla.accelerate());
// console.log(tesla.accelerate());

//NOTE: Exersice Four.

class Car {

    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        return `${this.make} going at ${this.speed += 10} km/h`;
    }

    break(){
        // return `${this.make} going at ${this.speed -= 5} km/h`;
        console.log(`${this.make} going at ${this.speed -= 5} km/h`);
        return this;
    }

    get speedUS(){
        // return `${parseFloat((this.speed / 1.6).toFixed(2))} mi/h`;
        return this.speed / 1.6;
    };

    set speedUS(speed){
        // this.speed = (parseFloat((speed * 1.6).toFixed(2)));
        this.speed = speed * 1.6;
    };
}

class Ev extends Car{

    //fields
    #charge;

    constructor(make,speed,charge){
        super(make,speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo){
        if(chargeTo && chargeTo <= 100 && chargeTo > 0) {
            this.#charge = this.#charge + (chargeTo - this.#charge);
            console.log(`Battery charge to: ${this.#charge}%`);
            return this;
        }
        // return `Battery charge to: ${this.charge}%`;
        return this;
    }

    accelerate(){
        // return `${this.make} going at ${this.speed += 20} km/h, with a charge of ${this.#charge -= 5}%`;
        console.log(`${this.make} going at ${this.speed += 20} km/h, with a charge of ${this.#charge -= 15}%`);
        return this;
    }
}

const tesla = new Ev ('Tesla',150,20);

// console.log(tesla);
tesla.chargeBattery(50);
tesla.accelerate();
tesla.break();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();

// console.log(tesla.#charge);
console.log('Here start the chaining 😋');
console.log(tesla.accelerate().chargeBattery(75).accelerate().break().speedUS);




/**
 * Write a class Cat which extends the class animal and be exported as a name export
 * Write a constructor which take a name, type  and scream as param and extend constructor of Animal
 * Write a function catScream which return extend scream function of class Animal
 */


import { Animal } from "./animal";

class Cat extends Animal {
    constructor(name, type, scream){
        super(name, type);
        this.scream = scream;
    }

    catScream(){
    return super.scream(this.scream);
    }
}
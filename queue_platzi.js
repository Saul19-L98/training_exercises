'use strict'

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        // * <- * <- * <- *
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else if(this.length === 0){
            return `There are no elements in this queue 🙈`;
        }
        else{
            this.first = this.first.next;
        }
        this.length--;
        return this;
    }
}

const myQueque = new Queue();
console.log(myQueque)
console.log(myQueque.enqueue(0));
console.log(myQueque.enqueue(1));
console.log(myQueque.enqueue(2));
console.log(myQueque.peek());
console.log(myQueque)
//console.log(myQueque.dequeue());
// console.log(myQueque.dequeue());
// console.log(myQueque.dequeue());
// console.log(myQueque.dequeue());
// console.log(myQueque.dequeue());
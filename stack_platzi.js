'use strict'

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop(){
        // * <- x  
        // |       | 
        // *       *
        // |       |
        // *       * 
        if(this.length === 1){
            this.top = null;
            this.bottom = null;
        }else{
            this.top = this.top.next;
        }
        this.length--;
        return this;
    }
}

const newStack = new Stack();

console.log(newStack.push(0));
console.log(newStack.push(1));
console.log(newStack.push(2));

console.log(newStack.peek());
//console.log(newStack.pop());
//console.log(newStack.pop());

console.log(newStack.top.value);
console.log(newStack.bottom.value);

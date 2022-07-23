'use strict'

// 1 <--> 2 <--> 3 <--> 4 <--> 5 --> null

// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next:{
//             value: 2,
//             next:{
//                 value: 3,
//                 next:{
//                     value: 4,
//                     next: {
//                         value: 5,
//                         next: null
//                     }
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoubleLinkedList{
    constructor(value = 32){
        this.head={
            value:value,
            next: null,
            prev: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    
    preappend(value){
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index,value){
        // * - * - *
        //     |  
        //     *
        // * - * - * - *
        if(index >= this.length){
            return this.append(value)
        }else if(index === 0){
            return this.preappend(value);
        }else{
            const newNode = new Node(value);
            const firstPointer = this.getTheIndex(index - 1);
            const holdingPointer = firstPointer.next;
            firstPointer.next = newNode;
            newNode.prev = firstPointer;
            holdingPointer.prev = newNode;
            newNode.next = holdingPointer;
            this.length++;
            return this; 
        }
    }

    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        // * - * - * - *
        //     |
        //     x
        // * -   - * - *
        // * - * - *
        //Garbage collector do the job 😎
        if(index >= this.length){
            return `${index} is out of range.`
        }else if(index === 0 ){
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return this; 
        }else if(index === (this.length - 1)){
            const firstPointer = this.getTheIndex(index - 1);
            firstPointer.next = null;
            this.tail = firstPointer;
            this.length--;
            return this; 
        }else{
            const firstPointer = this.getTheIndex(index - 1);
            const pointerToRemove = firstPointer.next;
            const lastPointer = this.getTheIndex(index + 1);
            firstPointer.next = pointerToRemove.next;
            lastPointer.prev = firstPointer;
            this.length--;
            return this; 
        }
    }
}

const myLinkedList = new MyDoubleLinkedList(1);

console.log(myLinkedList.append(2));
console.log(myLinkedList.preappend(0));

//console.log(myLinkedList.insert(1,3));

console.log(myLinkedList.remove(2));

// console.log(myLinkedList.append(4));
// console.log(myLinkedList.insert(3,3));
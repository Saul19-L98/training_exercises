'use strict'

// 1 --> 2 --> 3 --> 4 --> 5 --> null

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
    }
}

class MySinglyLinkedList{
    constructor(value = 32){
        this.head={
            value:value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    
    preappend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index,value){
        // * - * - *
        //   |  
        //   *
        if(index >= this.length){
            return this.append(value)
        }else if(index === 0){
            return this.preappend(value);
        }else{
            const newNode = new Node(value);
            const firstPointer = this.getTheIndex(index - 1);
            const holdingPointer = firstPointer.next;
            console.dir(firstPointer);
            firstPointer.next = newNode;
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
        if(index >= this.length){
            return `${index} is out of range.`
        }else if(index === 0 ){
            this.head = this.head.next;
            this.length--;
            return this; 
        }else if(index === (this.length - 1)){
            this.tail = this.tail.next;
            this.length--;
            return this; 
        }else{
            const firstPointer = this.getTheIndex(index - 1);
            const pointerToRemove = firstPointer.next;
            firstPointer.next = pointerToRemove.next;
            this.length--;
            return this; 
        }
    }
}

const myLinkedList = new MySinglyLinkedList(1);

console.log(myLinkedList.append(2));
console.log(myLinkedList.preappend(0));

console.log(myLinkedList.insert(0,4));

console.log(myLinkedList.remove(0));

console.log(myLinkedList.append(4));
console.log(myLinkedList.insert(3,3));
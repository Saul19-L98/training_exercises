'use strict'

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    myDelete(index){
        const itemDeleted = this.data[index];
        this.backwardsShiftIndex(index);
        return itemDeleted; 
    }

    backwardsShiftIndex(index){
        for(let i = index; i < (this.length - 1);i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    addFirst(item){
        this.forwardShitfIndex();
        this.data[0] = item;
        return this.data;
    }

    forwardShitfIndex(){
        for(let i = this.length; i > 0;i--){
            this.data[i] = this.data[i - 1];
        }
        this.length++;
    }

    deletefirst(){
        const firstItem = this.data[0];
        this.backwardsShiftIndex(0);
        return firstItem;
    }

    // myJoin(join){
    //     if(join){
    //         for( let i of this.data)
    //     }else{

    //     }
    // }

    print(){
        for(let i = 0; i < this.length; i++){
            console.log(this.data[i]);
        }
    }
};

const myArray = new MyArray();

myArray.push("Saul");
myArray.push("Alejandro");
myArray.push("Lainez");
myArray.push("Mejia");
myArray.push("Kevin");
console.log(myArray.get(0));
console.log(myArray.get(1));
console.log(myArray.pop());
console.log(myArray.myDelete(1));
console.log(myArray);
myArray.addFirst("Dixie");
myArray.deletefirst();
console.log(myArray);
myArray.print();

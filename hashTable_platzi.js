'use strict'

class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    hashMethod(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key,value){
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data;
    }

    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                };
            };
        };
        return undefined;
    }

    myDelete(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let index = 0; index < currentBucket.length; index++){
                if(currentBucket[index][0] === key){
                    this.shift(currentBucket,index);
                }
            }
        }
    }

    shift(currentBucket,index){
        for(let j = index; j < (currentBucket.length - 1);j++){
            currentBucket[index] = currentBucket[index + 1];
        }
        delete currentBucket[currentBucket.length - 1];
        currentBucket.length--;
        return this.data;
    }

    returnAll(){
        const hashtable = this.data;
        const keys = [];
        hashtable.forEach((currentBucket)=>{
            currentBucket.forEach((key)=>{
                keys.push(key[0]);
            })
        });
        return keys;
    }
};

const myHashTable = new HashTable(50);

console.log(myHashTable.set("Diego",1990));
console.log(myHashTable.set("Kevin",1995));
console.log(myHashTable.set("Alejandra",2000));
console.log(myHashTable.set("Karen",1985));
console.log(myHashTable.set("Carlos",1986));
console.log(myHashTable.set("Steve",1987))
console.log(myHashTable.set("Karla",1986))
console.log(myHashTable.get("Diego"));
console.log(myHashTable.get("Carlos"));

myHashTable.myDelete("Karen");
myHashTable.myDelete("Karla");

console.dir(myHashTable.returnAll());

console.log(myHashTable.set("Marta",1996));
console.log(myHashTable.set("Coco",1997))
console.log(myHashTable.set("Juan",1996))
// console.log(myHashTable.set("Karla",1998))
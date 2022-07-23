class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data){
        const newNode = new Node(data);
        this.children.push(newNode);
        return this;
    }

    remove(data){
        this.children = this.children.filter(node => node.data !== data);
        return this;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn){
        let arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn){
        let arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

const mytree = new Tree();
mytree.root = new Node('a');
console.log(mytree.root.add('b'));
console.log(mytree.root.add('c'));
console.log(mytree.root.add('d'));
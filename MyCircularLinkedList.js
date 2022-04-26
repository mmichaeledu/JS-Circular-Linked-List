import {Node} from './Node.js'
class MyCircularLinkedList {
    constructor(node) {
        if (node === undefined) {
            this.head = null;
            this.tail = null;
            this.current = null;
            this.size = 0;
        } else {
            this.head = node;
            this.tail = node;
            this.current = node;
            this.size = 1;
        }
    }
    pop() {
        let temp = this.head;
        for (let i = 1; i <= this.size - 1; i++) {
            if (temp.getNext() == this.tail) {

                this.tail = temp;
                temp = this.tail.getNext();
                this.tail.setNext(this.head);
                if(this.current =- temp){
                    this.current = this.head;
                }
                this.size--;
                return temp;
            }
            temp = temp.getNext();
        }
        return null;
    }

    getNext(){ // return the current node and set the current node to become the next node of the current node.
        let temp = this.current;
        this.current = this.current.getNext();
        return temp;
    }
    add(node) {
        if (this.size == 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
            this.size++;
        } else if (this.size == 1) {
            this.head.setNext(node);
            this.tail = node;
            this.tail.setNext(this.head);
            this.size++;
        } else {
            this.tail.setNext(node);
            this.tail = node;
            this.tail.setNext(this.head);
            this.size++;
        }
    } 
    printOutAllNodeRecursively(node, size) { //needs second parameter: size decremented down till 0 and stop calling function
        if (node === undefined) {
            console.log("this is inside the empty parameter recursive method");
            this.printOutAllNodeRecursively(this.head, this.size);
        } 
        else {
            if (size == 0){
                return null;
            }
            console.log(node.toString());
            if (node.hasNext()) {
                this.printOutAllNodeRecursively(node.getNext(), --size);
            }
        }
    }
    printOutAllNodeProcedurely() {
        this.temp = Node.temp;
        Node.temp = null;
        for (let i = 1; i <= this.size; i++) {
            if (this.temp == null) {
                this.temp = this.head;
            }
            console.log("Node number " + i + " value: " + this.temp.toString());
            this.temp = this.temp.getNext();
        }
    }
}
export {
    MyCircularLinkedList
};
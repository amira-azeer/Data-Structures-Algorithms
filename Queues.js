class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}


class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0
    }
    
    peek(){ // view the top item on the stack
        return this.first;
    }
    
    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        this.length++;
        return this;
    }
    
    dequeue(){ // front of the list
        if(!this.first || this.length === 0){
            return null;
        }  
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
    
}

const myQueue = new Queue()
myQueue.enqueue('Joy')
myQueue.enqueue('Anxiety')
myQueue.enqueue('Anger')
myQueue.dequeue()
myQueue.dequeue()

const printQueue = myQueue.peek()
console.log(printQueue)

class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}


class Linkedlist {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value){
      const newNode = new Node(value)
      this.tail.next = newNode
      this.tail = newNode
      this.length++
      return this
    }
    prepend(value){
     const newNode = new Node(value)
     newNode.next = this.head
     this.head = newNode
     this.length++
     return this
    }
    
    printList(){
     const arr = []
     let currentNode = this.head
     while(currentNode !== null){
        arr.push(currentNode.value)
        currentNode = currentNode.next
     }
     console.log(arr)
     return arr
    }
    
    traverseList(index){
     let counter = 0;
     let currentNode = this.head;
     while(counter !== index){
         currentNode = currentNode.next
         counter++
     }
     return currentNode;
    }
    
    insert(index, value){
     if(index >= this.length){ //index greater than list
     return this.append(value)
     } 
     const newNode = new Node(value)
     const leader = this.traverseList(index-1)
     const holdingPointer = leader.next;
     leader.next = newNode;
     newNode.next = holdingPointer;
     this.length++
     return this
    }
    
    remove(index){
     if(index >= this.length){
        console.log('not present')
     } else {
     const leader = this.traverseList(index-1)
     const unwantedNode = leader.next;
     leader.next = unwantedNode.next;
     this.length--
     return this
     }
    }
    
    reverse(){
      if(!this.head.next){
          return this.head
      }
      
      let first = this.head
      this.tail = this.head
      let second = first.next
      
      while(second){
          let temp = second.next;
          second.next = first;
          first = second;
          second = temp;
      }
      this.head.next = null;
      this.head = first
    }
}



const myLinkedList = new Linkedlist(10)
myLinkedList.append(15)
myLinkedList.prepend(5)
myLinkedList.insert(1, 99)
myLinkedList.remove(1)
myLinkedList.reverse()
myLinkedList.printList()

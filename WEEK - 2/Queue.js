
// QUEUE USING ARRAY

class Queue {
    constructor(){
        this.items = []
    }

    enqueue(elements){
        this.items.push(elements)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    print(){
        console.log(this.items.toString())
    }
}

//const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()

console.log(queue.dequeue(10))
console.log(queue.peek())
console.log(queue.size())


//QUEUE USING OBJECT

class Queue {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(elements){
        this.items[this.rear] = elements
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    peek(){
        return this.items[this.front]
    }

    print(){
        console.log(this.items)
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()

console.log(queue.dequeue(10))
console.log(queue.peek())
queue.print()


//  QUEUE USING STACK

class QueueUsingStack {
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value){
        this.stack1.push(value)
    }

    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }

        return this.stack2.pop()
    }

    peek(){
        return this.stack2[this.stack2.length -1]
    }

    display(){
        console.log(this.stack1)
    }
}

const queueStack = new QueueUsingStack()

queueStack.enqueue(10)
queueStack.enqueue(20)
queueStack.enqueue(30)
queueStack.enqueue(40)

queueStack.display()

console.log(queueStack.dequeue())
console.log(queueStack.peek())


// // CREATE STACK USING QUEUE (2 QUEUE)

class StackUsingQue {
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    push(value){
        this.queue1.push(value)
    }

    pop(){
        while(this.queue1.length > 1){
            this.queue2.push(this.queue1.shift());
        }

        let popped = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return popped;
    }


    display(){
        console.log([...this.queue1])
    }
}

//const stack = new StackUsingQue()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.display()

console.log(stack.pop())
stack.display()

//////////////

// STACK USING QUEUE (1 QUEUE)

class StackUsingQueue {
    constructor(){
        this.que = []
    }
    
    push(value){
        
        this.que.push(value)
        
        let size = this.que.length
        
        while(size > 1){
            this.que.push(this.que.shift())
            size--
        }
    }
    
    pop(){
        return this.que.shift()
    }
    
    peek(){
        return this.que[0]
    }
    
    display(){
        console.log(this.que)
    }
}

const stack = new StackUsingQueue()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.display()

console.log(stack.pop())
console.log(stack.peek())
stack.display()


//////////////////////

// Queue using an Array

// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         return this.items.length ? this.items.shift() : "Queue is empty";
//     }

//     display() {
//         console.log(this.items);
//     }
// }

// let queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.display(); // [10, 20, 30]
// console.log(queue.dequeue()); // 10
// queue.display(); // [20, 30]


// // Circular Queue

// class CircularQueue {
//     constructor(size) {
//         this.queue = new Array(size);
//         this.front = -1;
//         this.rear = -1;
//         this.size = size;
//     }

//     enqueue(value) {
//         if ((this.rear + 1) % this.size === this.front) {
//             console.log("Queue is Full");
//             return;
//         }
//         if (this.front === -1) this.front = 0;
//         this.rear = (this.rear + 1) % this.size;
//         this.queue[this.rear] = value;
//     }

//     dequeue() {
//         if (this.front === -1) {
//             console.log("Queue is Empty");
//             return null;
//         }
//         let dequeuedValue = this.queue[this.front];
//         if (this.front === this.rear) {
//             this.front = this.rear = -1;
//         } else {
//             this.front = (this.front + 1) % this.size;
//         }
//         return dequeuedValue;
//     }

//     display() {
//         if (this.front === -1) {
//             console.log("Queue is Empty");
//             return;
//         }
//         let i = this.front;
//         while (true) {
//             console.log(this.queue[i]);
//             if (i === this.rear) break;
//             i = (i + 1) % this.size;
//         }
//     }
// }

// let cQueue = new CircularQueue(5);
// cQueue.enqueue(1);
// cQueue.enqueue(2);
// cQueue.enqueue(3);
// cQueue.dequeue();
// cQueue.display(); // 2, 3


// // Queue Using a Linked List

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class QueueLinkedList {
//     constructor() {
//         this.front = this.rear = null;
//     }

//     enqueue(value) {
//         let newNode = new Node(value);
//         if (!this.rear) {
//             this.front = this.rear = newNode;
//             return;
//         }
//         this.rear.next = newNode;
//         this.rear = newNode;
//     }

//     dequeue() {
//         if (!this.front) return "Queue is empty";
//         let dequeuedValue = this.front.value;
//         this.front = this.front.next;
//         if (!this.front) this.rear = null;
//         return dequeuedValue;
//     }

//     display() {
//         let temp = this.front;
//         let queueValues = [];
//         while (temp) {
//             queueValues.push(temp.value);
//             temp = temp.next;
//         }
//         console.log(queueValues);
//     }
// }

// let queue = new QueueLinkedList();
// queue.enqueue(100);
// queue.enqueue(200);
// queue.enqueue(300);
// queue.display(); // [100, 200, 300]
// console.log(queue.dequeue()); // 100
// queue.display(); // [200, 300]

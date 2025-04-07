
//STACK - USING ARRAY

class Stack {
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }
        return this.items[this.items.length - 1]
    }

    display(){
        console.log(this.items)
    }
}

///const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.display()

console.log(stack.pop())
console.log(stack.peek())


//STACK - USING LINKEDLIST


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.size = 0
    }
    
    push(value){
        const node = new Node(value)
        node.next = this.top
        this.top = node
        this.size++
    }
    
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }
        const removeNode = this.top
        this.top = this.top.next
        this.size--
        
        return removeNode.value
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    peek(){
        return this.isEmpty() ? "Stack is Empty" : this.top.value
    }
    
    display(){
        let curr = this.top
        let result = []
        while(curr){
            result.push(curr.value)
            curr = curr.next
        }
        console.log(result)
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.display()

console.log(stack.pop())
console.log(stack.peek())



// REVERSE A STACK USING RECURSION

class Stack {
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }

    isEmpty(){
        return this.stack.length === 0
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    display(){
        console.log(this.stack)
    }
}

function reverse(stack, reversed=[]){
    if(stack.isEmpty()) return

    reversed.push(stack.pop())

    reverse(stack,reversed)

    stack.push(reversed.shift())
}

//const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.display()

console.log(reverse(stack))

stack.display()


//FINDING MIN VALUE FROM A STACK

class MinStack {
    constructor(){
        this.stack = []
        this.min = []
    }

    push(value){
        this.stack.push(value)

        if(this.min.length === 0 || value <= this.min[this.min.length - 1]){
            this.min.push(value)
        }
    }

    pop(){
        let removeValue = this.stack.pop()

        if(removeValue === this.min[this.min.length - 1]){
            this.min.pop()
        }

        return removeValue
    }

    getMin(){
        return this.min.length > 0 ? this.min[this.min.length - 1] : null
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    print(){
        console.log(this.stack)
    }
}

//const stk = new MinStack()


stk.push(20)
stk.push(30)
stk.push(40)
stk.push(10)

stk.print()

console.log(stk.getMin())

console.log(stk.pop())

console.log(stk.getMin())

stk.print()


//SORT STACK USING ANOTHER TEMP STACK

class Stack {
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0
    }

    print(){
        console.log(this.stack)
    }
}

function sortStack(stk){
    let tempStack = new Stack()

    while(!stk.isEmpty()){
        let temp = stk.pop()

        while(!tempStack.isEmpty() && tempStack.peek() < temp){
            stk.push(tempStack.pop())
        }

        tempStack.push(temp)
    }

    while(!tempStack.isEmpty()){
        stk.push(tempStack.pop())
    }
}

//const stk = new Stack()

stk.push(40)
stk.push(30)
stk.push(20)
stk.push(10)

stk.print()

sortStack(stk)

stk.print()


// REVERSE STRING USING STACK

class Stack{
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }

    isEmpty(){
        return this.stack.length === 0
    }
}

function reverse(str){
    let TempStack = new Stack()

    for(let char of str){
        TempStack.push(char)
    }

    let revised =""
    while(!TempStack.isEmpty()){
        revised += TempStack.pop()
    }

    return revised
}

console.log(reverse("PRAVEEN"))


// DELETE A SPECIFIC NODE FROM STACK

class StackDD {
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }

    isEmpty(){
        return this.stack.length === 0
    }

    remove(target){
        let tempStack = new StackDD()
    
        while(!this.isEmpty()){
            let val = this.pop()
    
            if(val !== target){
                tempStack.push(val)
            }
        }
    
        while(!tempStack.isEmpty()){
            this.push(tempStack.pop())
        }
    }

    print(){
    console.log(this.stack)
    }
}



const stk = new StackDD()

stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.print()

stk.remove(3)
stk.print()


/// VALID PARENTHESIS

function parenthisis(str){
    const arr = []
    const map = {")" : "(", "]" : "[", "}" : "{"}

    for(let char of str){
        if(char === "(" || char === "[" || char === "{"){
            arr.push(char)
        }else{
            if(arr.pop() !== map[char]){
                return false
            }
        }
    }

    return arr.length === 0
}


let str = "{[()]}"

console.log(parenthisis(str))


///////////////////////////////////////////////////////

// using an Array

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         return this.items.length ? this.items.pop() : "Stack is empty";
//     }

//     display() {
//         console.log(this.items);
//     }
// }

// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.display(); // [10, 20, 30]
// console.log(stack.pop()); // 30
// stack.display(); // [10, 20]


// // Stack with a Fixed Size

// class FixedSizeStack {
//     constructor(size) {
//         this.items = [];
//         this.size = size;
//     }

//     push(element) {
//         if (this.items.length < this.size) {
//             this.items.push(element);
//         } else {
//             console.log("Stack Overflow!");
//         }
//     }

//     pop() {
//         return this.items.length ? this.items.pop() : "Stack is empty";
//     }

//     display() {
//         console.log(this.items);
//     }
// }

// let stack = new FixedSizeStack(3);
// stack.push(5);
// stack.push(15);
// stack.push(25);
// stack.push(35); // Stack Overflow!
// stack.display(); // [5, 15, 25]


// // Stack Using a Linked List

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class StackLinkedList {
//     constructor() {
//         this.top = null;
//     }

//     push(value) {
//         let newNode = new Node(value);
//         newNode.next = this.top;
//         this.top = newNode;
//     }

//     pop() {
//         if (!this.top) return "Stack is empty";
//         let poppedValue = this.top.value;
//         this.top = this.top.next;
//         return poppedValue;
//     }

//     display() {
//         let temp = this.top;
//         let stackValues = [];
//         while (temp) {
//             stackValues.push(temp.value);
//             temp = temp.next;
//         }
//         console.log(stackValues);
//     }
// }

// let stack = new StackLinkedList();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.display(); // [3, 2, 1]
// console.log(stack.pop()); // 3
// stack.display(); // [2, 1]

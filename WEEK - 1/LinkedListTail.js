
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedListWithTail {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size ===0 
    }

    getSize(){
        return this.size
    }

    print(){
        if(this.isEmpty()){
            console.log("Linked List is Empty")
        }else{
            let curr = this.head;
            let result = ""
            while(curr){
                result += `${curr.value} `
                curr = curr.next
            }
            console.log(result)
        }
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }

        const value = this.head.value;
        this.head = this.head.next
        this.size--;
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }

        const value = this.tail;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let prev = this.head;
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null;
            this.tail = prev
        }
        this.size--
        return value
    }

    // delete node
    delete(value){
        if(!this.head) return
        
        if(this.head.value === value){
            this.head = this.head.next
            if(!this.head){
                this.tail = null
            }
            this.size--
            return
        }
        let prev = this.head
        while(prev.next && prev.next.value !== value){
            prev = prev.next
        }
        
        if(prev.next){
            prev.next = prev.next.next
            if(prev.next === null){
                this.tail = prev
            }
            this.size--
        }
    }

    removeDuplicate(){
        if(!this.head) return

        let duplicate = new Set()
        let curr = this.head
        let prev = null

        while(curr){
            if(duplicate.has(curr.value)){
                prev.next = curr.next
            }else{
                duplicate.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }

    sortLL(){
        let swapped;
        do{
            swapped = false
            let curr = this.head
            while(curr.next){
                if(curr.value > curr.next.value){
                    let temp = curr.value
                    curr.value = curr.next.value
                    curr.next.value = temp

                    swapped = true
                }
                curr = curr.next
            }
        }while(swapped)
    }

    removeMiddle(){
        if(!this.head) return
        
        if(!this.head.next){
            this.head = null
            this.tail = null
            this.size--
            return
        }
        
        let prev = null
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
        
        if(slow === this.tail){
            this.tail = prev
        }
        this.size--
    }
}

const List = new LinkedListWithTail()
console.log("List is Empty ? ",List.isEmpty())
List.print()

List.append(10)
List.append(20)
List.append(10)
List.prepend(40)
List.append(30)
List.append(40)
List.append(30)
List.prepend(20)
List.print()

// List.removeDuplicate()
// List.print()

// List.sortLL()
// List.print()

// console.log("Size of List : ",List.getSize())

List.removeFromFront()
List.print()

// List.removeFromEnd()
// List.print()

// console.log("Size of List : ",List.getSize())
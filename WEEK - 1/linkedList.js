
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    isSize(){
        return this.size
    }

    // (prepend) - add a new node to begining
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    //(append) - add a new node to the end as null
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let previous = this.head;
            while(previous.next){
                previous = previous.next
            }
            previous.next = node
        }
        this.size++
    }   

    //insert a value to a specific positiom
    insert(value, index){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i< index-1;i++){
                prev = prev.next
            }
            node.next =prev.next;
            prev.next =node;
            this.size++
        }
    }

    //Remove a value fron specified index
    Remove(index){  
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i< index-1; i++){
                prev = prev.next
            }
            removeNode = prev.next;
            prev.next = removeNode.next
        }
        this.size--;
        return removeNode.value
    }

    // remove a matching value from linked list
    delete(value){
        if(value === this.head.value){
            this.head = this.head.next
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removeValue = prev.next
                prev.next = removeValue.next
            }
        }
        this.size--
    }

    // delete nth node from last in a singly linked list - two pointer
    deleteNode(n){
        let fast = this.head
        let slow = this.head

        for(let i=0;i<n;i++){
            if(!fast) return
            fast = fast.next
        }

        if(!fast){
            this.head = this.head.next
            return
        }

        while(fast.next){
            fast = fast.next
            slow = slow.next
        }

        slow.next = slow.next.next
    }

    deleteNthNode(n){
        if(!this.head) return null

        let slow = this.head
        let fast = this.head

        for(let i=0;i<n;i++){
            if(!fast) return null
            fast = fast.next
        }

        if(!fast){
            this.head = this.head.next
            return 
        }

        while(fast.next){
            slow = slow.next
            fast = fast.next
        }

        slow.next = slow.next.next
        this.size--
    }

    // search a value and return the index.
    searchValue(value){
        if(this.isEmpty()){
            return -1
        }
        let index = 0;
        let prev = this.head
        while(prev){
            if(prev.value === value){
                return index
            }
            prev = prev.next;
            index++
        }
        return -1
    }

    //Reverse list
    reverseList(){
        let prev = null;
        let curr = this.head
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.head =prev
    }

    findMiddle(){
        if(!this.head){
            return
        }
        let fast = this.head
        let slow = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        return slow.value
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head
            let values = ""
            while(curr){
                values += `${curr.value },`
                curr = curr.next
            }
            console.log(values)
        }
    }
}

const list = new LinkedList()



list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()

list.deleteNthNode(9)
list.print()
console.log(list.searchValue(10))

// console.log("insert ------------");

// list.print()

// list.insert(10, 0)
// list.print()

// list.insert(20,1)
// list.print()

// list.insert(30,2)
// list.print()

// list.insert(40,1)
// list.print()

// list.reverseList()
// list.print()











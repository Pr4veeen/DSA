
class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty.")
        }else{
            let current = this.head
            let result = ""
            while(current){
                result += `${current.value} `
                current = current.next
            }
            console.log(result)
        }
    }

    reverse(){
        let current = this.tail
        let result = ""
        while(current){
            result +=`${current.value} `
            current = current.prev
        }
        console.log(result)
    }

    reverseNormal(){
        let prev = null
        let current = this.head
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    insertValue(value, index){
        if(this.isEmpty()){
            return null
        }
        if(index === 0){
            this.prepend(value)
        }
        else if(index === this.size){
            this.append(value)
        }
        else{ 
            const node = new Node(value)
            let previous = this.head
           for(let i=0;i<index-1;i++){
            previous = previous.next
           }
            node.next = previous.next;
            previous.next = node
            this.size++
        }
    }

    seach(){
        if(this.isEmpty()){
            return -1
        }
        let index = 0
        let prev = this.head
        while(prev){
            prev = prev.next
        }
    }

}

const List = new LinkedList()

List.prepend(10)
List.prepend(20)
List.prepend(30)
List.print()

List.append(40)
List.append(50)
List.append(60)
List.print()

List.reverse()

List.reverseNormal()
List.print()
console.log(List.getSize())

List.insertValue(100,5)
List.print()
console.log(List.getSize())
